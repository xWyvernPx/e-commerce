import ProductRoute from "./product.route.js";
import CategoryRoute from "./category.route.js";
import SubcategoryRoute from "./subcategory.route.js"
import BlogRoute from "./blog.route.js"
import FeedbackRoute from "./feedback.route.js"
import { sortProductMiddleware } from "../middleware/product-sorting.middleware.js";
import AccountRoute from "./account.route.js"
import OrdersRoute from "./orders.route.js"
import WishlistRoute from "./wishlist.route.js"
import CartRoute from "./cart.route.js"
import ReviewRoute from "./review.route.js"
import QuestionRoute from "./question.route.js"


export const Route = (app) => {
    app.use("/product",ProductRoute);
    app.use("/category",CategoryRoute);    
    app.use ("/subcategory",SubcategoryRoute);
    app.use("/blog" , BlogRoute);
    app.use("/feedback",FeedbackRoute);
    app.use("/account",AccountRoute);
    app.use("/orders",OrdersRoute);
    app.use("/wishlist", WishlistRoute);
    app.use("/cart", CartRoute);
    app.get("/",(req,res)=>{
        res.send("haha")
        })
};
