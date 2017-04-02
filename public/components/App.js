import React from 'react';
import Footer from './Footer';
import Map from './Map';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Map />
                <Footer />
            </div>
        );
    }

}

export default App;