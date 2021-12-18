import { Op } from "sequelize"
import productService from "../services/product.service.js";

class ProductController {
    async getAll(req,res) {
        const {page,limit} = req.query;
        const {key,order} = req.query.orderby;
        const key2 = req.query.type.key;
        const order2 = req.query.type.order;
        const filterQuery = req.query.filter;
        let filter = {};
        filterQuery.forEach(ele => {
            if(ele.value){
            const obj = {};
            const compare = {[Op[ele.op]] : ele.value};
            obj[ele.key] = compare;
            filter = {...filter , ...obj};
        }})
        console.log(filter);
   
        const data= await productService.getAll({page,limit},{order ,key},{key2,order2},filter);
        if(data)res.json(data);
        else res.status(404).json({message: "failed to get data", reason: "invalid query params"})
    }
}
export default new ProductController();