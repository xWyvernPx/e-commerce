
import express from "express";
import SubcategoryController from "../controllers/Subcategory.controller.js";
const route = express.Router();

route.get("/:parentslug",SubcategoryController.GetByParentSlug);
route.get("/:slug/slug",SubcategoryController.GetBySlug);

export default route;