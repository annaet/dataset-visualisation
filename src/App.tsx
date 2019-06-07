import './App.css';

import React, { Component } from 'react';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Legend, Bar, Tooltip } from 'recharts';

import { Dataset as DatasetDef } from './api/api-definition';
import getDatasets from './api/api';
import Dataset from './dataset/Dataset';
import Categories from './categories/Categories';

interface AppState {
  data: Array<DatasetDef>,
  selectedTab: number
};

export default class App extends Component<{}, AppState> {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      selectedTab: 0
    };
  }

  componentDidMount() {
    getDatasets.then(data => {
      console.log(data);
      this.setState({ data });
    })
  }

  render() {
    const { data, selectedTab } = this.state;

    let category;
    if (data.length) {
      category = data[0].stats.categories[0];
    }

    const categoriesStats = [];
    data.forEach(d => {
      d.stats.categories.forEach((category, i) => {
        let distinct = category.best_representation.statistics.distinct;
        let nullCount = category.best_representation.statistics.null_fraction;

        if (distinct < 0) {
          distinct = Math.round(Math.abs(distinct) * parseInt(d.stats.row_count));
        }

        nullCount = Math.round(nullCount * parseInt(d.stats.row_count));

        categoriesStats.push({
          dataset: `${d.name}-${i}-${d.stats.categories.length}` ,
          name: category.name,
          representation_name: category.best_representation.representation_name,
          distinct: distinct,
          null: nullCount
        });
      });
    });


    return (
      <div>
        <h1>Datasets Visualisation</h1>

        <div className="panel mb0">
          <h2 className="no-margin">Categories</h2>

          {category ? (
            <Categories data={ categoriesStats }></Categories>
          ) : null}
        </div>

        <div className="flex">
          <div className="flex flex-col">
            {data.map((set, i) => (
              <div className="panel clickable" key={ i } onClick={ () => { this.setState({ selectedTab: i })} }>
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

      </div>
    )
  }
}
