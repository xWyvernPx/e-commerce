

import express from "express";
import FeedbackController from "../controllers/Feedback.controller.js";
const route = express.Router();

route.get("/",FeedbackController.GetAll);


export default route;