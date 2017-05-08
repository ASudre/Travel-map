import express from 'express';
import ensureAuthenticated from '../../passport/security';
import userRouteUtils from './userRoute.utils';

const router = express.Router({ mergeParams: true });

router.get('/', ensureAuthenticated, (req, res) => res.json(req.user));

router.post('/', userRouteUtils.createUser);
router.post('/login', userRouteUtils.login);
router.post('/logout', userRouteUtils.logout);
router.post('/countries/:country', ensureAuthenticated, userRouteUtils.createCountry);

router.delete('/countries/:country', ensureAuthenticated, userRouteUtils.removeCountry);

export default router;
