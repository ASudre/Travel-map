import React from 'react';
import createHistory from 'history/createHashHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { applyMiddleware, compose, createStore } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import travelMapApp from './reducers/rootReducer';
import userActions from './actions/User/userActions';
import '../assets/materialIcons.css';
import App from './containers/App/App.container';

injectTapEventPlugin();

const history = createHistory();
const composeFunctions = [
    applyMiddleware(thunkMiddleware),
    applyMiddleware(routerMiddleware(history)),
    ...(process.env.NODE_ENV !== 'production' ?
        [window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__()]
        : []),
];

const store = createStore(
    travelMapApp,
    compose(...composeFunctions),
);

store.dispatch(userActions.fetchUser()).then(() => {
    render(
        <Provider store={store}>
            <MuiThemeProvider>
                <ConnectedRouter history={history}>
                    <App />
                </ConnectedRouter>
            </MuiThemeProvider>
        </Provider>,
        document.getElementById('root'),
    );
});
