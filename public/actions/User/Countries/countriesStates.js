import { RECEIVE, REQUEST } from '../../constants';

const countriesStates = {
    REQUEST: {
        SAVE_COUNTRY: `${REQUEST}SAVE_COUNTRY`,
    },
    RECEIVE: {
        SAVE_COUNTRY: `${RECEIVE}SAVE_COUNTRY`,
    },
};

/************************
 * Exports              *
 ************************
 */
export default countriesStates;
