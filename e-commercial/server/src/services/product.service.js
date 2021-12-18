
import Category from "../models/category.model.js"
import Product from "../models/product.model.js"
import ProductImg from "../models/product_img.model.js"
import Subcategory from "../models/subcategory.model.js"
import Discount from "../models/discount.model.js"
import { Op } from "sequelize"
class ProductService {
   async getAll(pagination,sort,sort2,filter){
        Product.hasMany(ProductImg)
        Product.belongsTo(Discount,{foreignKeyConstraint : "FK_ProductDiscount"})
        Discount.hasOne(Product );
        ProductImg.belongsTo(Product , {foreignKeyConstraint : "FK_ImgProduct"})
        let page , limit,offset;
        if (pagination) {
            page = pagination.page;
            limit = pagination.limit;
        }
        let {order,key} = sort;
        const order2 = sort2.order2;
        const key2 = sort2.key2;
        offset = (page - 1) * limit;
    
        console.log(page, limit);
        return await Product.findAll({
            include : [ProductImg,{model : Discount }] ,
            order:[
                [key, order],
                [key2,order2]
              ],
            where : filter,
            limit : limit,
            offset :offset ,
            })
            .then (data => {
                    return data.map(ele =>ele)
            })
            .catch(err=> null) 
    }
    async
}
export default new ProductService();