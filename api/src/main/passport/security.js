const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.sendStatus(403);
};


/** *********************
 * Export               *
 ************************
 */
export default ensureAuthenticated;
