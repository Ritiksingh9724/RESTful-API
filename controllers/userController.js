const { v4: uuidv4 } = require("uuid");

let users = [];

exports.registerUser = (req, res) => {
  const user = {
    id: uuidv4(),
    email: req.body.email,
    password: req.body.password
  };
  users.push(user);
  res.status(201).json(user);
};

exports.loginUser = (req, res, next) => {
  const user = users.find(
    u => u.email === req.body.email && u.password === req.body.password
  );

  if (!user) {
    return next({ status: 401, message: "Invalid credentials" });
  }

  res.json({ message: "Login successful", user });
};
