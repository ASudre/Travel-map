import express from 'express';
import usersRoute from './usersRoute';

const router = express.Router();

router.use('/users', usersRoute);

////////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////////

export default router;
