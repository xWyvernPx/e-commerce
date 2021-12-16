import express from "express";
import ProductController from "../controllers/Product.controller.js";

const route = express.Router();
route.get("/", ProductController.getAll);
// route.get("/:id"),
export default route;