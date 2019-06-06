import React from 'react';
import moment from 'moment';

import { Dataset as DatasetDef } from '../api/api-definition';

interface DatasetProps {
  data: DatasetDef
};

const Dataset: React.FC<DatasetProps> = (props) => {
  const { data } = props;

  return (
    <div>
      <h2>{ data.name }</h2>

      <p>Created at { moment(data.created_at).format('MMMM Do YYYY, h:mm:ssa') }</p>
    </div>
  );
};

export default Dataset;
