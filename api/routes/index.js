const express = require('express');
const router = express.Router();

// const apiRouter = require('./api');
const authenticationRouter = require('./authentication');

// router.use('/api', apiRouter);
router.use('/authentication', authenticationRouter);

module.exports = router;