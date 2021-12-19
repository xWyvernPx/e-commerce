export const sortProductMiddleware = (req,res,next)=> {
    console.log("in middle ware" , req.query)
    let {type,rating,budget,brand,orderby,page,limit,categoryID,subcategoryID} = req.query;
    // if(type== null  && budget == null ,brand == null && orderby== null){
    //     next();
    // }
    req.query.page = Number.parseInt(page)
    req.query.limit= Number.parseInt(limit)
    if(type) {
        switch(type) {
            case "popular" : {req.query.type = {
                key : "viewCount" ,
                order :"desc"
            }
                break;
            }
            case "newest" :  { req.query.type = {
                key : "created_at" ,
                order :"asc"
            }
            break;}
            case "best_selling" : {req.query.type = {
                key : "rating" ,
                order :"desc"
            }
        break;    
        }}}
    if(!rating) {
        rating = 0;
    }
    else {
       rating = parseInt(rating);
    }

    if(orderby) {
        const key= orderby.split("_")[0];
        const order= orderby.split("_")[1];
        req.query.orderby = {
            key,
            order,
        }
    }
    else {
        req.query.orderby = {
            key : "viewCount",
            order : "DESC"
        }
    }
    if(!budget) budget = 0; 
    if(!categoryID) categoryID =0;
    if(!subcategoryID) subcategoryID =0;
    const filter = [];
    filter.push(
        {
            key : "price",
            value : budget,
            op: "gte" // gte to have data mock in UI , change lte later
        },{
            key : "rating",
            value : rating,
            op: "gte"
        },{
            key : "categoryID",
            value : categoryID,
            op: "eq"
        },{
            key : "subcategoryID",
            value : subcategoryID,
            op: "eq"
        });
    // console.log("filter",filter)
    req.query.filter = filter;
    next();
}