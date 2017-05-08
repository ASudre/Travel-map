import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { Chart } from 'react-google-charts';

class Map extends React.Component {
    render() {
        return (
            <Paper>
                <div className={'my-pretty-chart-container'}>
                    <Chart
                        chartType="GeoChart"
                        data={[['Country'], ...this.props.countries]}
                        options={{
                            displayMode: 'regions',
                            region: 'world',
                            sizeAxis: { minValue: 0, maxSize: 20 },
                            magnifyingGlass: { enable: true, zoomFactor: 9.0 },
                        }}
                        width="100%"
                    />
                </div>
            </Paper>
        );
    }
}

Map.propTypes = {
    countries: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

/** **********************
 * Exports              *
 ************************
 */
export default Map;
