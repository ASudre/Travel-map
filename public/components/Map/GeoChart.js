import React from 'react';
import { Chart } from 'react-google-charts';

class GeoChart extends React.Component {
    render() {
        return (
            <div className={'my-pretty-chart-container'}>
                <Chart
                  chartType="GeoChart"
                  data={[['Country'], ...this.props.countries]}
                  options={{
                      legend: 'none',
                      displayMode: 'regions',
                      region: 'world',
                      sizeAxis: {minValue: 0,  maxSize: 20},
                      width: "1000px",
                      magnifyingGlass: {enable: true, zoomFactor: 9.0},
                  }}
                  width="1000px"
                  height="800px"
                />
            </div>
        );
    }
}

export default GeoChart;