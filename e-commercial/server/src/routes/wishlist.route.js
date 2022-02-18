import express from "express";
import WishlistController from "../controllers/Wishlist.controller.js"
const route = express.Router();
route.get("/:id",WishlistController.getByUserId)
export default route