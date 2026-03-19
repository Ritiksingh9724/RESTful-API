const { v4: uuidv4 } = require("uuid");

let orders = [];

exports.placeOrder = (req, res, next) => {
  try {
    const order = {
      id: uuidv4(),
      items: req.body.items,
      total: req.body.total,
      date: new Date()
    };

    orders.push(order);
    res.status(201).json(order);

  } catch (error) {
    next(error);
  }
};

exports.getOrders = (req, res, next) => {
  try {
    res.json(orders);
  } catch (error) {
    next(error);
  }
};
