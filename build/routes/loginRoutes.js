"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/login', (req, res) => {
    res.send(`
  <form method="POST">
  <label>Email</label>
  <input type="text">
  <label>Password</label>
  <input type="password">
  <button>Submit</button>
  </form>
  `);
});
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    res.send('work');
});
