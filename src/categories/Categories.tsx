import React, { Component } from 'react';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Legend, Bar, Tooltip } from 'recharts';

export default class Categories extends Component<any, any> {
  renderDatasetTick(tickProps) {
    const { x, y, payload } = tickProps;
    const { value, offset } = payload;

    const splits = value.split('-');
    const name = splits[0];
    const i = parseInt(splits[1]);
    const length = parseInt(splits[2]);

    const isFirst = i === 0;
    const isMiddle = (i + 1) / (length + 1) === 0.5;
    const isLast = (i + 1) === length;

    const pathFirstX = Math.floor(x) + 0.5;
    const pathLastX = Math.floor(x + offset * 2) + 0.5;

    const firstTick = <path d={`M${pathFirstX},${y - 4}v${-35}`} stroke="#aaa" />;
    const lastTick = <path d={`M${pathLastX},${y - 4}v${-35}`} stroke="#aaa" />;
    const text = <text x={x + offset} y={y} textAnchor="middle" fill="#aaa">{ name }</text>;

    if (i === 0 || isLast) {
      return <g>
        { isFirst ? firstTick : null }
        { isMiddle ? text : null }
        { isLast ? lastTick : null }
      </g>;
    }

    if (isMiddle) {
      return text;
    }

    return null;
  };

  render() {
    const { data } = this.props;

    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={ data }
          margin={ {top: 20, right: 30, left: 20, bottom: 30} }>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <XAxis dataKey="dataset" axisLine={false} tickLine={false} interval={0} tick={this.renderDatasetTick} height={1} scale="band" xAxisId="dataset" />
          <YAxis yAxisId="left" orientation="left" stroke="#82ca9d" label={{ value: 'Distinct', angle: -90, position: 'insideLeft', offset: -10, dy: 20, fill: "#82ca9d" }} />
          <YAxis yAxisId="right" orientation="right" stroke="#ffc658" label={{ value: 'Null Count', angle: -90, position: 'insideRight', offset: -10, dy: -50, fill: "#ffc658" }} />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Bar yAxisId="left" dataKey="distinct" fill="#82ca9d" />
          <Bar yAxisId="right" dataKey="null" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    );
  }

};
