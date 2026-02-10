const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const userController = require("../controllers/userController");
const validate = require("../middleware/validate");

router.post(
  "/register",
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  validate,
  userController.registerUser
);

router.post("/login", userController.loginUser);

module.exports = router;
