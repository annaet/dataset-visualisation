import './App.css';

import React, { Component } from 'react';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Legend, Bar, Tooltip } from 'recharts';

import { Dataset as DatasetDef } from './api/api-definition';
import getDatasets from './api/api';
import Dataset from './dataset/Dataset';
import Categories from './categories/Categories';
import TreeChart from './categories/TreeChart';

interface AppState {
  data: Array<DatasetDef>,
  selectedTab: number,
  activePage: number
};

export default class App extends Component<{}, AppState> {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      selectedTab: 0,
      activePage: 0
    };
  }

  componentDidMount() {
    getDatasets.then(data => {
      console.log(data);
      this.setState({ data });
    })
  }

  render() {
    const { data, selectedTab, activePage } = this.state;

    let category;
    if (data.length) {
      category = data[0].stats.categories[0];
    }

    const categoriesStats = [];
    const commonStats = [];

    data.forEach(d => {
      const rowCount = parseInt(d.stats.row_count);

      d.stats.categories.forEach((category, i) => {
        const bestRep = category.best_representation;
        let distinct = bestRep.statistics.distinct;
        let nullCount = bestRep.statistics.null_fraction;

        let mostCommon = bestRep.statistics.most_common;
        commonStats.push({
          dataset: d.name,
          name: bestRep.representation_name,
          children: mostCommon.map(d => {
            return {
              name: d.value.text,
              size: d.frequency // * rowCount
            };
          })
        });

        if (distinct < 0) {
          distinct = Math.round(Math.abs(distinct) * rowCount);
        }

        nullCount = Math.round(nullCount * rowCount);

        categoriesStats.push({
          dataset: `${d.name}-${i}-${d.stats.categories.length}` ,
          name: category.name,
          representation_name: bestRep.representation_name,
          distinct: distinct,
          null: nullCount
        });
      });
    });

    const colours = [
      "#36c4a8",
      "#6beaf3",
      "#BEBADA",
      "#FC7F72",
      "#80B1D3",
      "#FDB462",
      "#B3DE69",
      "#f5a5ce",
      "#CFCFCF",
      "#BC80BD",
      "#A8BD9F",
      "#ffdf00",
    ];

    return (
      <div>
        <div className="header flex flex-ac">
          <h1>Datasets Visualisation</h1>
          <span className={'tab' + (activePage === 0 ? ' active' : '')} onClick={ () => this.setState({activePage: 0}) }>Categories</span>
          <span className={'tab' + (activePage === 1 ? ' active' : '')} onClick={ () => this.setState({activePage: 1}) }>Keys</span>
        </div>

        <div className="body">
          {activePage === 0 ? (
            <div>
              <div className="panel mb0">
                <h2 className="no-margin">Categories</h2>

                {category ? (
                  <Categories data={ categoriesStats }></Categories>
                ) : null}
              </div>

              <div className="panel mb0">
                <h2 className="no-margin">Most Common</h2>

                <div className="grid grid-w-30">
                  {commonStats.map((stat, i) => (
                    <div key={ i }>
                      <h4>{stat.name} <span className="text-secondary">({stat.dataset})</span></h4>
                      <TreeChart data={ stat.children } colour={ colours[i] }></TreeChart>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex">
              <div className="flex flex-col">
                {data.map((set, i) => (
                  <div className={'side-tab panel clickable'  + (selectedTab === i ? ' active' : '')} key={ i } onClick={ () => { this.setState({ selectedTab: i })} }>
                    {set.name}
                  </div>
                ))}
              </div>

              <div className="flex-grow ml1">
                {data.length ? (
                  <Dataset data={ data[selectedTab] } />
                ) : null}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
