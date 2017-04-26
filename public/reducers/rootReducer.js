import { combineReducers } from 'redux';
import user from './User/userReducer';

const travelMapApp = combineReducers({
    user,
});

export default travelMapApp;