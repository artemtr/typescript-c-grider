"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
    }
    res.status(403);
    res.send('Protected');
}
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
    you log in
    <a href="/logout">Log Out</a>
    `);
    }
    else {
    }
    res.send(`
  you log out
  <a href="/login">Log in</a>
  `);
});
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        // mark this person as logged in
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('Invalid email or pass');
    }
});
router.post('/login', (req, res) => { });
router.get('/logout', (req, res) => {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, (req, res) => {
    res.send('Welcome to protected page');
});
