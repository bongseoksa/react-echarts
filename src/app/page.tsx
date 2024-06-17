'use client'; // this is a client component 👈🏽
import styles from './page.module.css';
import * as Style from './pageStyle';
import { Fragment, ReactNode, useMemo, useState } from 'react';
import LinePage from '@/pages/line';

export default function Home() {
  const [chartType, setChartType] = useState('');
  const onClickChartType = (to: string) => {
    console.log('onClickMove');
    setChartType(to);
  };

  const activeChart = useMemo((): ReactNode => {
    switch (chartType) {
      case 'Line':
        return <LinePage />;
      default:
        return <></>;
    }
  }, [chartType]);
  return (
    <main className={styles.main}>
      <Fragment>
        <Style.ButtonGroup>
          <button onClick={() => onClickChartType('Line')}>Line</button>
        </Style.ButtonGroup>

        {activeChart}
      </Fragment>
    </main>
  );
}
