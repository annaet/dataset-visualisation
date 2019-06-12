import React, { Component } from 'react';
import { ResponsiveContainer, Treemap } from 'recharts';

export default class TreeChart extends Component<any, any> {
  render() {
    const { data, colour } = this.props;

    return (
      <div className="tree-chart">
        {data.length === 0 ? (
          <div className="flex flex-ac flex-jc empty-tree-chart" style={ {background: colour} }>
            No common values.
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={400}>
            <Treemap
              data={ data }
              dataKey="size"
              ratio={ 4 / 3 }
              stroke="#fff"
              fill={ colour }
            />
          </ResponsiveContainer>
        )}
      </div>
    );
  }
};
