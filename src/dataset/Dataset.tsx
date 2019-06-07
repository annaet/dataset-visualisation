import React, { Component } from 'react';
import moment from 'moment';
import { ResponsiveContainer, Cell, PieChart, Pie, Sector } from 'recharts';

import { Dataset as DatasetDef } from '../api/api-definition';
import Statistic from '../statistic/Statistic'
import { getHeapStatistics } from 'v8';

interface DatasetProps {
  data: DatasetDef
};

interface DatasetState {
  activeIndexes: Array<number>,
  datasetId: number
};

export default class Dataset extends Component<any, DatasetState> {
  constructor(props) {
    super(props);

    this.onPieEnter = this.onPieEnter.bind(this);

    this.state = {
      activeIndexes: [],
      datasetId: 0
    }
  }

  componentDidMount() {
    const { data } = this.props;

    if (data && data.stats.keys.length) {
      const indexes = data.stats.keys.map(() => 0 );
      this.setState({
        activeIndexes: indexes,
        datasetId: data.dataset_id
      });
    }
  }

  componentDidUpdate() {
    const { data } = this.props;
    const { datasetId } = this.state;

    if (data && data.dataset_id !== datasetId) {
      const indexes = data.stats.keys.map(() => 0 );
      this.setState({
        activeIndexes: indexes,
        datasetId: data.dataset_id
      });
    }
  }

  renderActiveShape(props) {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
    const formattedValue = (Math.floor(value / 100) / 10) + 'K';

    const formattedLabel = payload.label.split('::');

    return (
      <g>
        {formattedLabel.length === 1 ? (
          <g>
            <text x={cx} y={cy} dy={-12} textAnchor="middle" style={ {fontSize: '0.9em'} } fill="#999">Key</text>
            <text x={cx} y={cy} dy={20} textAnchor="middle" style={ {fontSize: '1.6em'} }>{formattedLabel[0]}</text>
          </g>
        ) : (
          <g>
            <text x={cx} y={cy} dy={-24} textAnchor="middle" style={ {fontSize: '0.9em'} } fill="#999">Key</text>
            <text x={cx} y={cy} dy={8} textAnchor="middle" style={ {fontSize: '1.6em'} }>{formattedLabel[0]}</text>
            <text x={cx} y={cy} dy={32} textAnchor="middle" style={ {fontSize: '1em'} }>{formattedLabel[1]}</text>
          </g>
        )}
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={-14} textAnchor={textAnchor} fill={fill}>{`${payload.name}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={4} textAnchor={textAnchor} fill="#333">{`${formattedValue}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={22} textAnchor={textAnchor} fill="#999">
          {`(${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  }

  onPieEnter(data, index, i) {
    const { activeIndexes } = this.state;
    const indexes = [ ...activeIndexes ];
    indexes[i] = index;

    this.setState({
      activeIndexes: indexes
    });
  }

  render() {
    const { activeIndexes } = this.state;
    const { data } = this.props;

    const rowCount:number = parseInt(data.stats.row_count, 10);
    const formattedRowCount = Math.floor(rowCount / 1000) + 'K';
    const keys = data.stats.keys.map(key => {
      const nullCount:number = rowCount * key.null_fraction;
      const distinctCount:number = key.distinct < 0 ? Math.abs(rowCount * key.distinct) : key.distinct;
      const duplicateCount:number = rowCount - nullCount - distinctCount;

      return {
        id: key.id,
        label: key.label,
        chartData: [
          { name: 'Null', value: nullCount, total: formattedRowCount, label: key.label },
          { name: 'Distinct', value: distinctCount, total: formattedRowCount, label: key.label },
          { name: 'Duplicate', value: duplicateCount, total: formattedRowCount, label: key.label }
        ]
      }
    });

    const colours = [
      "#BC80BD",
      "#36c4a8",
      "#80B1D3"
    ];

    return (
      <div className="flex flex-col">
        <div className="panel">
          <h2 className="no-margin">Dataset</h2>


          <div className="grid grid-w-48">
            <Statistic label="Name" value={data.name}></Statistic>
            <Statistic label="ID" value={data.dataset_id}></Statistic>
            <Statistic label="Rows" value={ data.stats.row_count }></Statistic>
            <Statistic label="Created At" value={ moment(data.created_at).format('MMMM Do YYYY') }></Statistic>
          </div>
        </div>

        <div className="panel">

          <h2 className="no-margin">Keys</h2>

          <div className="flex">
            {keys.map((key, i) => (
              <div key={ i } className={ 'w-' + Math.round(100 / keys.length) }>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      activeIndex={activeIndexes[i]}
                      activeShape={this.renderActiveShape}
                      data={key.chartData}
                      dataKey="value"
                      innerRadius={60}
                      outerRadius={80}
                      onMouseEnter={(data, index) => this.onPieEnter(data, index, i)}
                      >
                      { key.chartData.map((entry, index) => <Cell key={index} fill={ colours[index] }/>) }
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            ))}

            {keys.length === 0 ? <p>No keys available.</p> : null}
          </div>
        </div>
      </div>
    );
  }

};
