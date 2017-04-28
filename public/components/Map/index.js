import React from 'react';
import Paper from 'material-ui/Paper';
import DisplayedCountries from '../../containers/DisplayedCountries';
import AddCountry from '../../containers/AddCountry';

const Map = () => (
    <div>
        <Paper>
            <DisplayedCountries />
        </Paper>
        <AddCountry />
    </div>
);

/** **********************
 * Exports              *
 ************************
 */
export default Map;
