const { v4: uuidv4 } = require("uuid");

let cart = [];

exports.addToCart = (req, res) => {
  const item = {
    id: uuidv4(),
    productId: req.body.productId,
    quantity: req.body.quantity
  };
  cart.push(item);
  res.status(201).json(item);
};

exports.viewCart = (req, res) => {
  res.json(cart);
};

exports.removeFromCart = (req, res) => {
  cart = cart.filter(item => item.id !== req.params.id);
  res.json({ message: "Item removed from cart" });
};
