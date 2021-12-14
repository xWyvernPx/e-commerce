import categoryService from "../services/category.service.js";

class CategoryController {

   async GetAll(req,res) {
        const data = await categoryService.findAll();
        res.json((data))
    }
    async GetById (req,res){
        const id = req.params.id;
        const data = await categoryService.findById(id);
        res.json(data);
    }

}
export default new CategoryController();