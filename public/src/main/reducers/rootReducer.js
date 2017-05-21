import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import user from './User/userReducer';

const travelMapApp = combineReducers(
    {
        user,
        form: formReducer,
        router: routerReducer,
    });

/** **********************
 * Exports              *
 ************************
 */
export default travelMapApp;
