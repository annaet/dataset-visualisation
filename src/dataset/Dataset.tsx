import React, { Component } from 'react';
import moment from 'moment';
import { ResponsiveContainer, Cell, PieChart, Pie, Sector } from 'recharts';

import { Dataset as DatasetDef } from '../api/api-definition';

interface DatasetProps {
  data: DatasetDef
};

interface DatasetState {
  activeIndexes: Array<number>
};

export default class Dataset extends Component<any, DatasetState> {
  constructor(props) {
    super(props);

    this.onPieEnter = this.onPieEnter.bind(this);

    this.state = {
      activeIndexes: []
    }
  }

  componentDidMount() {
    const { data } = this.props;
    if (data && data.stats.keys.length) {
      const indexes = data.stats.keys.map(() => 0 );
      this.setState({ activeIndexes: indexes })
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

    return (
      <g>
        <text x={cx} y={cy} dy={-12} textAnchor="middle" style={ {fontSize: '0.9em'} } fill="#999">Total</text>
        <text x={cx} y={cy} dy={20} textAnchor="middle" style={ {fontSize: '1.6em'} }>{payload.total}</text>
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
          { name: 'Null', value: nullCount, total: formattedRowCount },
          { name: 'Distinct', value: distinctCount, total: formattedRowCount },
          { name: 'Duplicate', value: duplicateCount, total: formattedRowCount }
        ]
      }
    });

    const colours = [
      "#BC80BD",
      "#36c4a8",
      "#80B1D3",
      "#B3DE69"
    ]

    return (
      <div>
        <h2>{ data.name } - Keys</h2>

        <div className="flex">
          {keys.map((key, i) => (
            <div key={ i } style={ { width: (100 / keys.length) + '%' } }>
              <h4>{ key.label }</h4>
              <ResponsiveContainer width="100%" height={350}>
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
        </div>

        <p>Created at { moment(data.created_at).format('MMMM Do YYYY, h:mm:ssa') }</p>
      </div>
    );
  }

};
