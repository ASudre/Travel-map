import React from 'react';
import Footer from './Footer';
import Map from './Map';
import Authentication from '../containers/Authentication';

class App extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                <Map />
                <Authentication />
                <Footer />
            </div>
        );
    }

}

export default App;