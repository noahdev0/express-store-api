import express from "express";
import dotenv from "dotenv";
import connectDB from "../db/connect.mjs";
import notFound from "../middlewares/not-found.mjs";
import errorHandler from "../middlewares/error-handler.mjs";
import productRouter from "../routes/products.mjs";
import "express-async-errors";

dotenv.config();
const app = express();
// ================ middlewares =========================

app.use(express.json());
app.use("/api/v1/products", productRouter);

// =================== routes  ======================

app.get("/", (req, res) => {
  res.send("<h1>Store API</h1> <a href='/api/v1/products'>products</a>");
});

app.use(notFound);
app.use(errorHandler);

// ===================== start the app ====================
const port = process.env.PORT || 3000;

try {
  connectDB(process.env.MONGO_URI);
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
} catch (error) {
  console.log(error);
}
