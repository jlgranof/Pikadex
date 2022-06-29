const express = require('express');
const asyncHandler = require('express-async-handler');
const { PrismaClient } = require('@prisma/client');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { toRegularUser } = require('../../utils/user');
const { restoreUser } = require('../../services/auth');

const { loginService, signupService } = require('../../services/auth');

const router = express.Router();
const prisma = new PrismaClient();

router.get('/login', (req, res) => res.json({"hi" : "HI"}));
router.post('/test', (req, res) => res.json({ "hi": "hi" }));

// Login Route
router.post(
  '/login',
  asyncHandler(async (req, res, next) => {
    const { username, password } = req.body;
    const user = await loginService({ username, password });
    console.log(user);
    if (!user) return next(new Error("Login failed"));

    setTokenCookie(res, user);

    return res.json({ user });
  })
);

// Logout Route
router.delete(
  '/logout',
  (_req, res) => {
    res.clearCookie('token');
    return res.json({ message: "success" });
  } 
);

// Signup Route
router.post(
  '/signup',
  asyncHandler(async (req, res) => {
    const { username, email, password, avatarUrl } = req.body;
    const user = await signupService({ username, email, password, avatarUrl });

    setTokenCookie(res, user);

    return res.json(user);
  })
);

// Restore Session Route
router.get(
  '/session',
  restoreUser,
  (req, res) => {
    const { user } = req;
    if (user) return res.json({ user: toRegularUser(user) });
    else return res.json({});
  }
)

module.exports = router;