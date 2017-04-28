import { combineReducers } from 'redux';
import user from './User/userReducer';

const travelMapApp = combineReducers({
    user,
});

/** **********************
 * Exports              *
 ************************
 */
export default travelMapApp;
