import { RECEIVE, REQUEST } from '../constants';

const userStates = {
    REQUEST: {
        USER: `${REQUEST}USER`,
        LOGIN: `${REQUEST}LOGIN`,
        LOGOUT: `${REQUEST}LOGOUT`,
        CREATE_USER: `${REQUEST}CREATE_USER`,
    },
    RECEIVE: {
        USER: `${RECEIVE}USER`,
        LOGIN: `${RECEIVE}LOGIN`,
        LOGOUT: `${RECEIVE}LOGOUT`,
        CREATE_USER: `${RECEIVE}CREATE_USER`,
    },
};

/************************
 * Exports              *
 ************************
 */
export default userStates;
