import React from 'react';
import Footer from './Footer';
import Map from './Map';
import LogIn from "../containers/LogIn";

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Map />
                <LogIn />
                <Footer />
            </div>
        );
    }

}

export default App;