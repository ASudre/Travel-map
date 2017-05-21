import React from 'react';
import Map from '../../containers/Map/Map.container';
import AddCountry from '../../containers/AddCountry/AddCountry.container';
import CountryList from '../../containers/CountryList/CountryList.container';
import Logout from '../../containers/Authentication/Logout.container';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Map />
                <div>
                    <AddCountry />
                    <CountryList />
                </div>
                <Logout />
            </div>
        );
    }
}

/** **********************
 * Exports              *
 ************************
 */
export default Home;
