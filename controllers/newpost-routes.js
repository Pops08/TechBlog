const router = require('express').Router();
const sequelize = require('../config/connection');
const {
    Post,
    User,
    Comment
} = require('../models');

router.get('/', (req, res) => {
    res.render('newpost', { loggedIn: true, username: req.session.username });
  });

module.exports = router;