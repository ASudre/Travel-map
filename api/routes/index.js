/** *********************
 * Imports              *
 ************************
 */
import express from 'express';
import userRoute from './userRoute';

const router = express.Router();

router.use('/user', userRoute);

/** *********************
 * Export               *
 ************************
 */
export default router;
