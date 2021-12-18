import ProductRoute from "./product.route.js";
import CategoryRoute from "./category.route.js";
import SubcategoryRoute from "./subcategory.route.js"
import BlogRoute from "./blog.route.js"
import FeedbackRoute from "./feedback.route.js"
import { sortProductMiddleware } from "../middleware/product-sorting.middleware.js";

export const Route = (app) => {
    app.use("/product",ProductRoute);
    app.use("/category",CategoryRoute);    
    app.use ("/subcategory",SubcategoryRoute);
    app.use("/blog" , BlogRoute);
    app.use("/feedback",FeedbackRoute);
    app.get("/",(req,res)=>{
        res.send("haha")
        })
};
