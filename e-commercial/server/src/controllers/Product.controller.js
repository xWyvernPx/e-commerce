import productService from "../services/product.service.js";

class ProductController {
    async getAll(req,res) {
        const {page,limit} = req.query;
        const pageInt = Number.parseInt(page)
        const limitInt = Number.parseInt(limit)
        const {order,by} = req.query;
       
        const data= await productService.getAll({pageInt,limitInt},{order ,by})
        if(data)res.json(data);
        else res.status(404).json({message: "failed to get data", reason: "invalid query params"})
    }
}
export default new ProductController();