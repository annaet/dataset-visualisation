import React, { Component } from 'react';
import './Statistic.scss';

interface StatisticProps {
  label: string,
  value: string,
  className: any
};

export default class Statistic extends Component<StatisticProps, {}> {
  static defaultProps = { className: '' };

  render() {
    const { label, value, className } = this.props;

    return (
      <div className={ 'statistic flex flex-col ' + className }>
        <div className="value">
          {value}
        </div>
        <div className="label">
          {label}
        </div>
      </div>
    );
  }

};
