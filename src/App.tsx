import './App.css';

import React, { Component } from 'react';

import { Dataset as DatasetDef } from './api/api-definition';
import getDatasets from './api/api';
import Dataset from './dataset/Dataset';

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

    return (
      <div>
        <h1>Datasets Visualisation</h1>

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
