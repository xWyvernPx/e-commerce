import React from 'react'
import { NavLink } from 'react-router-dom';
import "./card.scss"
function ProductCard(props) {
    const {data} = props;
    let url = null;
    if(data && data.ProductImgs.length > 1) url =data.ProductImgs[0].url;
    return (
        data &&
        <div className="product__card">
            <div className="product__card-cover">
                <NavLink to={`/${data.Category.slug}/${data.Subcategory.slug}/${data.id}`}>
                    <img src={url || "https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/mockup_product_M_vMeNgWO2G.png?updatedAt=1639053397284"} alt="" className="product__card-img" />
                </NavLink>

                <p className="product__card-discount">- 36 $</p>
            </div>
            <NavLink to={`/${data.Category.slug}/${data.Subcategory.slug}/${data.id}`}>

                <h5 className="product__card-title">{data.name}</h5>
            </NavLink>
            <NavLink to={`/${data.Category.slug}/${data.Subcategory.slug}/${data.id}`}>
                <h6 className="product__card-desc">{data.describe} </h6>
            </NavLink>

            <div className="product__card-payment">
                <div className="product__card-price">
                    <h4 className="product__card-newprice">1.48 USD</h4>
                    <h5 className="product__card-oldprice">4.48 USD</h5>
                </div>
                <NavLink to={`/${data.Category.slug}/${data.Subcategory.slug}/${data.id}`}>
                    <a href="#!" className="product__card-checkout">Buy Now</a>
                </NavLink>

                </div>
            </div> ||
            <div className="product__card">
            <div className="product__card-cover">
                    <img src={url || "https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/mockup_product_M_vMeNgWO2G.png?updatedAt=1639053397284"} alt="" className="product__card-img" />
                <p className="product__card-discount">- 36 $</p>
            </div>
         

                <h5 className="product__card-title">Product title</h5>
     
                <h6 className="product__card-desc">Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus </h6>

            <div className="product__card-payment">
                <div className="product__card-price">
                    <h4 className="product__card-newprice">1.48 USD</h4>
                    <h5 className="product__card-oldprice">4.48 USD</h5>
                </div>
                    <a href="#!" className="product__card-checkout">Buy Now</a>
                </div>
            </div>
        
    )
}
export default ProductCard
// {`${url ? url :"https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/mockup_product_M_vMeNgWO2G.png?updatedAt=1639053397284" } `}