const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const { toRegularUser } = require('../utils/user');
const { validatePassword } = require('../utils/auth');
const { jwtConfig } = require('../config');

const prisma = new PrismaClient();
const { secret, expiresIn } = jwtConfig;

// Login Service
const loginService = async ({ username, password }) => {
  const user = await prisma.user.findFirst({
    where: {
      username: username
    }
  });
  if (user && bcrypt.compareSync(password, user.hashedPassword.toString())) {
    return toRegularUser(user);
  }
}

// Signup Service
const signupService = async ({ username, email, password, avatarUrl }) => {
  const hashedPassword = bcrypt.hashSync(password);

  const user = await prisma.user.create({
    data: {
      username, 
      email,
      hashedPassword,
      avatarUrl
    }
  });

  if (user) return toRegularUser(user);
}


// Middleware Service to restore the session and for routes that require authentication
const restoreUser = (req, res, next) => {
  // Token parsed from the cookies
  const { token } = req.cookies;

  return jwt.verify(token, secret, null, async(e, jwtPayload) => {
    if (e) return next();

    try {
      console.log(jwtPayload)
      const { id } = jwtPayload.data;
      req.user = await prisma.user.findUnique({
        where: {
          id: id
        }
      });
     
    } catch (e) {
      console.log(e)
      res.clearCookie('token');
      return next();
    }

    if (!req.user) {
      res.clearCookie('token');
    }

    return next();
  });
};



module.exports = {
  loginService,
  signupService,
  restoreUser,
}