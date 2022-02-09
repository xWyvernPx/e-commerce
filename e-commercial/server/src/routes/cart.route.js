import express from "express";
import CartController from "../controllers/Cart.controller.js";
const route = express.Router();
    route.get("/:accountId",CartController.getCartByAccount)
export default route;
