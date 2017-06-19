import express from 'express';
import ensureAuthenticated from '../../passport/security';
import countryRouteUtils from './countryRoute.utils';

const router = express.Router({ mergeParams: true });

router.get('/', ensureAuthenticated, countryRouteUtils.getCountries);

export default router;
