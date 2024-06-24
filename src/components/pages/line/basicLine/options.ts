import { LineSeriesOption } from 'echarts';

type EChartsOption = echarts.ComposeOption<LineSeriesOption>;

const LineOptions: EChartsOption = {
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
      animation: false,
    },
  ],
};

export { LineOptions };
