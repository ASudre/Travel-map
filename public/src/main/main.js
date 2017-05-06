import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { applyMiddleware, compose, createStore } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import travelMapApp from './reducers/rootReducer';
import userActions from './actions/User/userActions';
import App from './components/App';

injectTapEventPlugin();

const store = createStore(
    travelMapApp,
    compose(
        applyMiddleware(thunkMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
);

store.dispatch(userActions.fetchUser());

render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'),
);
