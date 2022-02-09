const express = require("express");
const { errorHandler } = require("./middlewares/errorMiddleware");
require("colors");
const products = require("./data/products");
const dotenv = require("dotenv");
const connectDb = require("./config/config");
const productRoutes = require("./routes/productsRoute");
const usersRoutes = require("./routes/UsersRoute");
const orderRoutes = require("./routes/orderRoute");

dotenv.config();
//connecting to mongodb database
connectDb();
const app = express();
//middleware bodyparser
app.use(express.json());

//dotenv config
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Node Server</h1>");
});
const PAYPAL_CLIENT_ID = "AW6cqLVeDQMRLEyJ7UQd8v4bxgK2UHhUFjoyTd1DnJN3EiYZkTiu02YA9X72ICXHMqfJw8XZZkg0hKOh";
app.use("/api", productRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/orders", orderRoutes);
app.get("/api/config/paypal", (req, res) => {
  res.send(PAYPAL_CLIENT_ID);
});

app.use(errorHandler);

const PORT = 8080;

app.listen(PORT,()=> {
  console.log(`Server is running in ${PORT}`.underline.green)
}
);