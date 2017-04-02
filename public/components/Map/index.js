import React from 'react';
import DisplayedCountries from '../../containers/DisplayedCountries';
import AddCountry from '../../containers/AddCountry';

const Map = () => {
    return (
        <div>
            <DisplayedCountries />
            <AddCountry />
        </div>
    );
};

export default Map;
