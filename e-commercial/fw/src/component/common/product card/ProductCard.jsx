import React from 'react'
import "./card.scss"
function ProductCard(props) {
    const {data} = props;
    let url = null;
    if(data.ProductImgs.length > 1) url =data.ProductImgs[0].url;
    return (
        <div className="product__card">
            <div className="product__card-cover">
                <img src={url || "https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/mockup_product_M_vMeNgWO2G.png?updatedAt=1639053397284"} alt="" className="product__card-img" />
                <p className="product__card-discount">- 36 $</p>
            </div>
            <h5 className="product__card-title">{data.name}</h5>
            <h6 className="product__card-desc">{data.describe} </h6>
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