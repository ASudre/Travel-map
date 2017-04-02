import { combineReducers } from 'redux';
import user from './users';

const travelMapApp = combineReducers({
    user,
});

export default travelMapApp;