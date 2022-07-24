import { PieChart } from 'react-minimal-pie-chart';
import React from 'react'

export const PieChartCard = ({win, matches}) => {

  const dataMock=[
    { title: 'Losses', value: matches - win, color: '#8B0000' },
    { title: 'Wins', value: win, color: '#046307' }
  ];
  const defaultLabelStyle = {
    fontSize: '9px',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    fill: 'white'
  };
  //const shiftSize = 7;

  return (    
    <PieChart
    data={dataMock}
    lineWidth='55'
    radius='35'
    label={({ dataEntry }) => dataEntry.value}
    labelStyle={{
      ...defaultLabelStyle,
    }}
    labelPosition='70'
    center={[45, 40]}
    viewBoxSize={[90, 75]}
  />
  )
}

