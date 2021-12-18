import subcategoryService from "../services/subcategory.service.js";

class SubcategoryController {

    // async GetAll(req,res) {
    //      const data = await categoryService.findAll();
    //      res.json((data))
    //  }
     async GetByParentSlug (req,res){
         const slug = req.params.parentslug;
         const data = await subcategoryService.findByParentSlug(slug);
        //  console.log("controller", data)
         res.json(data);
     }
     async GetBySlug (req ,res)  {
         const {slug} = req.params;
         console.log(slug);
         const data = await subcategoryService.findBySlug(slug);

         res.json(data);
     }
 }
 export default new SubcategoryController();