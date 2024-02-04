import { Router } from "express";
import {
  getAllProducts,
  getAllProductStatic,
} from "../controllers/products.mjs";

const productRouter = Router();

productRouter.route("/").get(getAllProducts);
productRouter.route("/static").get(getAllProductStatic);

export default productRouter;
