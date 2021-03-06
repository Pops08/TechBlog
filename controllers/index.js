const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const newPostRoutes = require('./newpost-routes.js');
const signupRoutes = require('./signup-route')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/newpost', newPostRoutes) 
router.use('/signup', signupRoutes)


router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
