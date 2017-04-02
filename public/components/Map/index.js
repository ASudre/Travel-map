import React from 'react';
import DisplayedCountries from '../../containers/DisplayedCountries';
import AddCountry from '../../containers/AddCountry';
import Paper from 'material-ui/Paper';

const Map = () => {
    return (
        <div>
            <Paper>
                <DisplayedCountries />
            </Paper>
            <AddCountry />
        </div>
    );
};

export default Map;
