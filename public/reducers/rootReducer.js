import { combineReducers } from 'redux';
import user from './User/userReducer';
import countries from './User/Country/countryReducer';

const travelMapApp = combineReducers({
    user,
    countries,
});

export default travelMapApp;