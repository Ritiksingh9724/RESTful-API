const { v4: uuidv4 } = require("uuid");

let products = [];

exports.getProducts = (req, res, next) => {
  try {
    res.json(products);
  } catch (error) {
    next(error);
  }
};

exports.addProduct = (req, res, next) => {
  try {
    const product = {
      id: uuidv4(),
      name: req.body.name,
      price: req.body.price
    };

    products.push(product);

    res.status(201).json({
      success: true,
      message: "Product added successfully",
      product
    });

  } catch (error) {
    next(error);
  }
};
