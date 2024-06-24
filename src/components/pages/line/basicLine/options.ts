import { LineSeriesOption } from 'echarts';

type EChartsOption = echarts.ComposeOption<LineSeriesOption>;

const LineOptions: EChartsOption = {
  backgroundColor: '#27293d', // darkMode의 경우 배경 색상 지정
  title: {
    left: '50',
    text: 'Basic Line',
    target: 'blank',
    link: 'https://www.naver.com',
    textStyle: { fontStyle: 'oblique', color: 'white' },
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  dataZoom: [
    {
      type: 'inside',
      start: 30, // 0 ~ 100% 사이
      end: 50, // 0 ~ 100% 사이
    },
    {
      type: 'slider',
      start: 0,
      end: 50,
      xAxisIndex: [0], // 컨트롤 할 데이터 컴포넌트 인덱스
    },
    {
      type: 'slider',
      start: 10,
      end: 90,
      yAxisIndex: [0], // 컨트롤 할 데이터 컴포넌트 인덱스
    },
  ],
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
