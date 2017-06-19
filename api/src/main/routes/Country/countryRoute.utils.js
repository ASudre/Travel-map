import Country from '../../models/Country/Country';
import logger from '../../../../conf/logger';

const getCountries = (req, res) => {
    logger.info(`Get countries for ${req.user.id}`);
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
