import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import user from './User/userReducer';

const travelMapApp = combineReducers({
    user,
    form: formReducer,
});

/** **********************
 * Exports              *
 ************************
 */
export default travelMapApp;
