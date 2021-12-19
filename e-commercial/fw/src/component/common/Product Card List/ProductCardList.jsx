import React from 'react'
import "./cardlist.scss"
function ProductCardList(props) {
    const {data} = props;
    let url = null;
    if(data.ProductImgs.length > 1) url =data.ProductImgs[0].url;
    return (
        <div className='card'>
            {/* cover */}
             <div className="card__cover">
                <img src={url || "https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/mockup_product_M_vMeNgWO2G.png?updatedAt=1639053397284"} alt="" className="card__img" />
                <p className="card__discount">- {data.Discount.discount_percent} %</p>
            </div>
            {/* content */}
            <div className="card__content">
                <h4 className="card__name">{data.name}</h4>
                <h6 className="card__desc">{data.describe}</h6>

                <div className="card__info">
                    <h6 className="card__lastupdate-title">Last Update</h6>
                    <h6 className="card__lastupdate">{calcDay(data.created_at)} days</h6>
                    <h6 className="card__brand-title">Brand</h6>
                    <h6 className="card__brand">Henessy</h6>
                    <h6 className="card__delivery-title">Delivery</h6>
                    <h6 className="card__delivery">Country</h6>
                    <h6 className="card__stock--title">Stock</h6>
                    <h6 className="card__stock">{data.SKU}</h6>
                </div>

            </div>

                {/* payment */}
            <div className="card__payment">
                <div className="card__price">
                    <h4 className="card__newprice">{calcNewPrice(data.price,data.Discount.discount_percent)} USD</h4>
                    <h5 className="card__oldprice">{data.price} USD</h5>
                </div>
                <h6 className="card__shipping-price">Free shipping</h6>
                <h6 className="card__shipping-period">Delivery in 1 day</h6>
                <a href="#!" className="card__detail">Product Detail<img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/ic-chevron-right-white_m7jjZJscG.png?updatedAt=1639053394469" alt="" />  </a>
                <a href="#!" className="card__wishlist"><img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/ic-actions-heart_svg_u4NMf3p3k.svg?updatedAt=1639806004624" alt="" /> Add to wishlist</a>
            </div>
        </div>
    )
}
function calcDay(date) {

   return new Date(Date.now() - Date.parse(date)).getDate();
    
}
function calcNewPrice (price, discount_percent){
    return (price * (discount_percent /100)).toFixed(2);
}

export default ProductCardList
