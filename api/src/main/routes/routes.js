import express from 'express';
import userRoute from './User/userRoute';
import countryRoute from './Country/countryRoute';

const router = express.Router();
router.use('/user', userRoute);
router.use('/countries', countryRoute);

/** *********************
 * Export               *
 ************************
 */
export default router;
