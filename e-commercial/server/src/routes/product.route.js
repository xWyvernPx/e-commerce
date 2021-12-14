import express from "express";

const route = express.Router();
route.get("/", (req,res)=>{
    res.json({
        "messg" : "hehe"
    });
})
// route.get("/:id"),
export default route;