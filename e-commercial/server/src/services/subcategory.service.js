import Category from "../models/category.model.js";
import Subcategory from "../models/subcategory.model.js";

class subcategoryService {
    findByParentId(id) {
        return Subcategory.findAll({
            where : {
                categoryID : id
            }
        
        })
    }
    async findByParentSlug (slug) {
        const data = await Category.findOne({
            where : {
                slug : slug
            }
        }).then((data)=> {
             if(data) return Subcategory.findAll({
                where : {
                    categoryID :  data.id   
                }}
            ) 
        })
        return data.map(ele => ({
            id : ele.id ,
            name : ele.name ,
            describe : ele.describe,
            slug : ele.slug, 
            categoryID : ele.categoryID,
        }));
       
    }
    async findBySlug(slug) {
        return await Subcategory.findOne({
            where : {
                slug : slug
            }
        })
    }
}
export default new subcategoryService();