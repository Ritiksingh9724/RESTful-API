const express = require("express");
const app = express();

app.use(express.json());

app.use("/products", require("./routes/productRoutes"));
app.use("/users", require("./routes/userRoutes"));
app.use("/cart", require("./routes/cartRoutes"));
app.use("/orders", require("./routes/orderRoutes"));

const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
