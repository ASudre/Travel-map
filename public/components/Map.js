import React from 'react';
import { Chart } from 'react-google-charts';

class Map extends React.Component {
    render() {
        return (
            <div className={'my-pretty-chart-container'}>
                <Chart
                  chartType="GeoChart"
                  data={[['Age', 'Weight'], ['France', 12], ['Germany', 5.5]]}
                  options={{
                      legend: 'none',
                  }}
                  width="100%"
                  height="400px"
                />
            </div>
        );
    }
}

export default Map;