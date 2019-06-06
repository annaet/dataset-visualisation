import './App.css';

import React, { Component } from 'react';

import { Dataset as DatasetDef } from './api/api-definition';
import getDatasets from './api/api';
import Dataset from './dataset/Dataset';

interface AppState {
  data: Array<DatasetDef>
};

export default class App extends Component<{}, AppState> {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    getDatasets.then(data => {
      this.setState({ data });
    })
  }

  render() {
    const { data } = this.state;
    console.log(data);

    return (
      <div>
        <h1>Datasets Visualisation</h1>

        <Dataset />
      </div>
    )
  }
}
