import { RECEIVE, REQUEST } from '../../constants';

const countriesStates = {
    REQUEST: {
        SAVE_COUNTRY: `${REQUEST}SAVE_COUNTRY`,
        REMOVE_COUNTRY: `${REQUEST}REMOVE_COUNTRY`,
    },
    RECEIVE: {
        SAVE_COUNTRY: `${RECEIVE}SAVE_COUNTRY`,
        REMOVE_COUNTRY: `${RECEIVE}REMOVE_COUNTRY`,
    },
    ADD_COUNTRY: 'ADD_COUNTRY',
};

/** **********************
 * Exports              *
 ************************
 */
export default countriesStates;
