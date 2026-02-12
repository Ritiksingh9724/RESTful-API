const { v4: uuidv4 } = require("uuid");

let cart = [];

exports.addToCart = (req, res, next) => {
  try {
    const item = {
      id: uuidv4(),
      productId: req.body.productId,
      quantity: req.body.quantity
    };

    cart.push(item);
    res.status(201).json(item);

  } catch (error) {
    next(error);
  }
};

exports.viewCart = (req, res, next) => {
  try {
    res.json(cart);
  } catch (error) {
    next(error);
  }
};

exports.removeFromCart = (req, res, next) => {
  try {
    cart = cart.filter(item => item.id !== req.params.id);

    res.json({
      success: true,
      message: "Item removed from cart"
    });

  } catch (error) {
    next(error);
  }
};
