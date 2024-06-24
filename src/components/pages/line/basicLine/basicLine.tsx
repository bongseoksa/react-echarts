import React from 'react';
import LineRooteLayout from '../_fragments/lineRootLayout';
import ReactECharts from 'echarts-for-react';
import { LineOptions } from './options';

const BasicLine = () => {
  return (
    <LineRooteLayout>
      <ReactECharts
        option={LineOptions}
        opts={{ renderer: 'canvas' }}
      ></ReactECharts>
    </LineRooteLayout>
  );
};

export default BasicLine;
