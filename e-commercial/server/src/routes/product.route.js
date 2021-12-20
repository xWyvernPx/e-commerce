import express from "express";
import ProductController from "../controllers/Product.controller.js";
import { sortProductMiddleware } from "../middleware/product-sorting.middleware.js";

const route = express.Router();
route.get("/" ,sortProductMiddleware);
route.get("/", ProductController.getAll);
route.get("/:id" ,ProductController.getOneById);
route.get("/:category/:subcategory",sortProductMiddleware);
route.get("/:category/:subcategory",ProductController.getAllByClassification );
export default route;