import React from 'react';
import LineRooteLayout from '../_fragments/lineRootLayout';
import * as echarts from 'echarts/core';
import { LineSeriesOption, BarSeriesOption } from 'echarts/charts';
import ReactECharts from 'echarts-for-react';

type EChartsOption = echarts.ComposeOption<LineSeriesOption | BarSeriesOption>;

const BasicLine = () => {
  const option: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Charts',
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
      },
    ],
  };

  return (
    <LineRooteLayout>
      <ReactECharts option={option} opts={{ renderer: 'svg' }}></ReactECharts>
    </LineRooteLayout>
  );
};

export default BasicLine;
