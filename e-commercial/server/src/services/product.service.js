
import Category from "../models/category.model.js"
import Product from "../models/product.model.js"
import ProductImg from "../models/product_img.model.js"
import Subcategory from "../models/subcategory.model.js"
import Discount from "../models/discount.model.js"
import { Op } from "sequelize"
class ProductService {
   async getAll(pagination,sort,sort2,filter){
        Product.hasMany(ProductImg ,)
        Product.belongsTo(Discount,{foreignKeyConstraint : "FK_ProductDiscount"})
        Product.belongsTo(Category , {foreignKeyConstraint : "FK_ProductCategory"})
        Product.belongsTo(Subcategory , {foreignKeyConstraint : "FK_ProductSubcategory"})
        Category.hasMany(Product)
        Subcategory.hasMany(Product)
        Discount.hasOne(Product );
        ProductImg.belongsTo(Product , {foreignKeyConstraint : "FK_ImgProduct"})
        let page , limit,offset;
        if (pagination) {
            page = pagination.page;
            limit = pagination.limit;
            offset = (page - 1) * limit;
        }
        let {order,key} = sort;
        const order2 = sort2.order2;
        const key2 = sort2.key2;
    
        // console.log([key, order],
        //     [key2,order2] , "in service");
        return await Product.findAll({
            include : [ProductImg, Discount,{model: Category } ,Subcategory] ,
            order:[ [key2,order2] ,
                    [key, order]
                     ],
            where : filter,
            limit : limit,
            offset :offset ,
            })
            .then (data => {
                    return data.map(ele =>ele)
            })
            .catch(err=> {
                 console.log(err)
                return null}) 
    }
    async getOneById(id) {
        Product.hasMany(ProductImg ,)
        Product.belongsTo(Discount,{foreignKeyConstraint : "FK_ProductDiscount"})
        Product.belongsTo(Category , {foreignKeyConstraint : "FK_ProductCategory"})
        Product.belongsTo(Subcategory , {foreignKeyConstraint : "FK_ProductSubcategory"})
        Category.hasMany(Product)
        Subcategory.hasMany(Product)
        Discount.hasOne(Product );
        ProductImg.belongsTo(Product , {foreignKeyConstraint : "FK_ImgProduct"})

        return await Product.findOne({
            include : [ProductImg,Discount ,Category,Subcategory] ,
            where : { id : id}
        })
    }
    async getAllByCate (pagination,slug,filter,sort) {
     
        Product.hasMany(ProductImg ,)
        Product.belongsTo(Discount,{foreignKeyConstraint : "FK_ProductDiscount"})
        Product.belongsTo(Category , {foreignKeyConstraint : "FK_ProductCategory"})
        Product.belongsTo(Subcategory , {foreignKeyConstraint : "FK_ProductSubcategory"})
        Category.hasMany(Product)
        Subcategory.hasMany(Product)
        Discount.hasOne(Product );
        ProductImg.belongsTo(Product , {foreignKeyConstraint : "FK_ImgProduct"})
        //pagi 
        let page , limit,offset;
        if (pagination) {
            page = pagination.page;
            limit = pagination.limit;
            offset = (page - 1) * limit;
        }
        let {order,key} = sort;
        // const {order2,key2} = sort2;
        const {category,subcategory} = slug
        console.log(slug)
        return await Product.findAll({
            include : [ProductImg, Discount,
                {model: Category ,where : { slug : category}} ,
                {model : Subcategory , where : { slug : subcategory }}
            ] ,
            order:[ 
                        [key, order]
                        // [key2,order2] ,
                     ],
            where : filter,
            limit : limit,
            offset :offset ,
            })
            .then (data => {
                    return data.map(ele =>ele)
            })
            .catch(err=> {
                 console.log(err)
                return null}) 

    
    }
}
export default new ProductService();