import React from 'react';
import Footer from './Footer';
import Map from './Map';
import Authentication from '../containers/Authentication';

class App extends React.Component {

    render() {
        return (
            <div>
                <Map />
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
