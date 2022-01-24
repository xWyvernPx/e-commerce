import express from "express";
const route = express.Router();
import ordersController from '../controllers/Orders.controller.js'
route.route("/:id").get(ordersController.getOrdersByUser);

export default route;