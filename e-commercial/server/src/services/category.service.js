import Category from "../models/category.model.js"
class CategoryService {
    async findAll() {
      
        return await Category.findAll()
        .then((data)=>{
              return data.map(ele =>  ({
                id : ele.id ,
                name : ele.name,
                describe : ele.describe,
                slug : ele.slug,
                created_at : ele.created_at,
            }))
        })
        
    }
    async findById (id) {
        return await Category.findOne({where : {id : id}});
    }
}
export default new CategoryService;