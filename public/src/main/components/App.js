import React from 'react';
import Footer from './Footer';
import Map from '../containers/Map/Map.container';
import AddCountry from '../containers/AddCountry/AddCountry.container';
import CountryList from '../containers/CountryList/CountryList.container';
import Authentication from '../containers/Authentication/Authentication.container';

class App extends React.Component {
    render() {
        return (
            <div>
                <Map />
                <div>
                    <AddCountry />
                    <CountryList />
                </div>
                <Authentication />
                <Footer />
            </div>
        );
    }
}

/** **********************
 * Exports              *
 ************************
 */
export default App;
