import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import user from './User/userReducer';
import country from './Country/countryReducer';

const travelMapApp = combineReducers(
    {
        user,
        countries: country,
        form: formReducer,
        router: routerReducer,
    });

/** **********************
 * Exports              *
 ************************
 */
export default travelMapApp;
