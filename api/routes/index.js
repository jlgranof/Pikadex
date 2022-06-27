const express = require('express');
const router = express.Router();

// const apiRouter = require('./api');
// const authenticationRouter = require('./authentication');

// router.use('/api', apiRouter);
// router.use('/authenticaiton', authenticationRouter);

router.get('/hello/world', function(req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('Hello World!');
});

module.exports = router;