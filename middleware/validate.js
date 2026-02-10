const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next({ status: 400, message: "Validation failed" });
  }
  next();
};
