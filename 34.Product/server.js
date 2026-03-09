require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config");
const logger = require("./middlewares/loggerMiddleware");

const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

connectDB();
const connectDB = require("./config");
app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});