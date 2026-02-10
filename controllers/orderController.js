const { v4: uuidv4 } = require("uuid");

let orders = [];

exports.placeOrder = (req, res) => {
  const order = {
    id: uuidv4(),
    items: req.body.items,
    total: req.body.total,
    date: new Date()
  };
  orders.push(order);
  res.status(201).json(order);
};

exports.getOrders = (req, res) => {
  res.json(orders);
};
