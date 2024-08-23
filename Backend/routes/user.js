const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { registerValid, loginValid } = require("../utils/errorHandler");

const Users = require('../models/User');

router.post("/register", async (req, res) => {
    
    try {
      const { name, email, password, cf_password } = req.body;
      const errorMessage = registerValid(name, email, password, cf_password);
      if (errorMessage) return res.status(400).json({ message: errorMessage });
      const userExists = await Users.findOne({ email });
      if (userExists) {
        return res
          .status(400)
          .json({ message: "This email is already in use" });
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      await new Users({
        name,
        email,
        password: hashedPassword,
      }).save();
      res.status(201).json({
        message: "You have successfully registered. Please login now",
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const errorMessage = loginValid(email, password);
      if (errorMessage) return res.status(400).json({ message: errorMessage });

      const user = await Users.findOne({ email });
      if (!user)
        return res.status(400).json({ message: "Invalid email or password" });

      const match = await bcrypt.compare(password, user.password);
      if (!match)
        return res.status(400).json({ message: "Invalid email or password" });

      const token = await jwt.sign({ _id: user._id }, 'process.env.JWT_SECRET', {
        expiresIn: "7d",
      });

      user.password = undefined;
      res
        .status(200)
        .json({ message: "You have successfully logged in", user, token });
    } catch (error) {
      res.status(500).json({ message: error.message });
    } 
});


module.exports = router;
