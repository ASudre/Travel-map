import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ToolbarComponent from '../../containers/Toolbar/Toolbar.container';
import Authenticated from '../../containers/Authenticated/Authenticated.container';
import Login from '../../containers/Authentication/Login.container';
import Home from '../../containers/Home/Home.container';
import Profile from '../../containers/Profile/Profile.container';

class App extends React.Component {
    render() {
        return (
            <div>
                <ToolbarComponent {...this.props} />
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Authenticated exact path="/home" component={Home} {...this.props} />
                    <Authenticated exact path="/profile" component={Profile} {...this.props} />
                    <Redirect to="/" />
                </Switch>
            </div>
        );
    }
}

export default App;
