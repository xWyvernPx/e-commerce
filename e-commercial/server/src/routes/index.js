import ProductRoute from "./product.route.js";
import CategoryRoute from "./category.route.js"
export const Route = (app) => {
    app.use("/product",ProductRoute);
    app.use("/category",CategoryRoute);    

    app.get("/",(req,res)=>{
        res.send("haha")
        })
};
