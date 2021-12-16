
import Category from "../models/category.model.js"
import Product from "../models/product.model.js"
import ProductImg from "../models/product_img.model.js"
import Subcategory from "../models/subcategory.model.js"
import Discount from "../models/discount.model.js"
class ProductService {
   async getAll(pagination,sort){
        Product.hasMany(ProductImg)
        Product.belongsTo(Discount,{foreignKeyConstraint : "FK_ProductDiscount"})
        Discount.hasOne(Product );
        ProductImg.belongsTo(Product , {foreignKeyConstraint : "FK_ImgProduct"})
        let page , limit,offset;
        if (pagination) {
            page = pagination.pageInt;
            limit = pagination.limitInt
        }
        let {order,by} = sort;
        order = order ? order : "ASC";
        by = by ? by : "id";
        offset = (page - 1) * limit;
        console.log(page, limit);
        return await Product.findAll({
            include : [ProductImg,{model : Discount }] ,
            order:[
                [by, order]
              ],
            limit : limit,
            offset :offset 
            })
            .then (data => {
                    return data.map(ele =>ele)
            })
            .catch(err=> null) 



       
       


    }
}
export default new ProductService();