import express from "express";
import CartController from "../controllers/Cart.controller.js";
const route = express.Router();
    route.get("/:accountId",CartController.getCartByAccount)
    route.delete("/:cartId",CartController.deleteCartItem);
    route.put("/:cartId",CartController.updateCartItem);
export default route;
