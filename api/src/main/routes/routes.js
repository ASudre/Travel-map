import express from 'express';
import userRoute from './User/userRoute';

const router = express.Router();
router.use('/user', userRoute);

/** *********************
 * Export               *
 ************************
 */
export default router;
