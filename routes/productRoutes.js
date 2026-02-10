const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const productController = require("../controllers/productController");
const validate = require("../middleware/validate");

router.get("/", productController.getProducts);

router.post(
  "/",
  body("name").notEmpty(),
  body("price").isNumeric(),
  validate,
  productController.addProduct
);

// 🚨 THIS LINE IS NON-NEGOTIABLE
module.exports = router;
