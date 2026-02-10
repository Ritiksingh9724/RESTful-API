const { v4: uuidv4 } = require("uuid");

let products = ["products"];

exports.getProducts = (req, res) => {
  res.json(products);
};

exports.addProduct = (req, res) => {
  const product = {
    id: uuidv4(),
    name: req.body.name,
    price: req.body.price
  };
  products.push(product);
  res.status(201).json(product);
};
