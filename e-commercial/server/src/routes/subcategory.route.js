
import express from "express";
import SubcategoryController from "../controllers/Subcategory.controller.js";
const route = express.Router();

route.get("/:slug",SubcategoryController.GetByParentSlug);

export default route;