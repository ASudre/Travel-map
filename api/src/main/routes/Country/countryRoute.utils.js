import Country from '../../models/Country/Country';
import logger from '../../../../conf/logger';

const getCountries = (req, res) => {
    return Country.find()
        .then((countries) => {
            res.json({ countries });
        });
};

/** *********************
 * Export               *
 ************************
 */
export default {
    getCountries,
};
