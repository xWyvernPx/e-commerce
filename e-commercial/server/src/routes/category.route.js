
import express from "express";
import CategoryController from "../controllers/Category.controller.js";
const route = express.Router();

route.get("/",CategoryController.GetAll);
route.get("/:id",CategoryController.GetById);
route.get("/:slug/slug",CategoryController.GetBySlug);

export default route;