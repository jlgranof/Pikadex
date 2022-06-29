const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { toSafeUser } = require('./user');
const { jwtConfig } = require('../config');
const { restoreUser } = require('../services/auth');
const { func } = require('superstruct');

const { secret, expiresIn } = jwtConfig;

// Middleware to set a JWT Cookie
const setTokenCookie = (res, user) => {
  user = toSafeUser(user)

  // Create the token
  const token = jwt.sign(
    { data: user },
    secret,
    { expiresIn: parseInt(expiresIn) } // 1 week
  );
  
  const isProduction = process.env.NODE_ENV === "production";

  // Set the token as a cookie
  res.cookie('token', token, {
    maxAge: expiresIn * 1000,
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction && "Lax"
  });

  return token;
};

// Middleware for requiring a session user to be authenticated
const requireAuth = [
  restoreUser,
  function(req, _res, next) {
    if (req.user) return next();

    const e = new Error('Unauthorized');
    return next(e);
  }
]

module.exports = {
  setTokenCookie,
  requireAuth,
};