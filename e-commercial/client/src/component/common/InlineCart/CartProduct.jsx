import React from 'react'
import "./cart.scss"
function CartProduct() {
    return (
        <div className="product">
            <div className="product__function ">
                <img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/mockup_item_Kg-bjD8PQ.png?updatedAt=1639053396749" className="product__img" alt="" />
                <button className="product__wish"><img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/ic-actions-heart_JNatLvUd-.png?updatedAt=1639053398744" alt="" />Wishlist</button>
                <button className="product__compare"><img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/ic-layout-picture-right_Ve0Py_1GP.png?updatedAt=1639053395329" alt="" />Compare</button>
                <button className="product__remove"><img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/ic-actions-close-simple_R1SCIuwbt.svg?updatedAt=1639053398420" alt="" />Remove</button>
            </div>
            <div className="product__content">
                <h5 className="product__title">Product title</h5>
                <div className="product__info">
                    <label htmlFor="product__farmname" className="product__farm">Farm:</label>
                    <h6 className="product__farmname">Tharamis Farm</h6>
                    <label htmlFor="product__freshness" className="product__fresh">Freshness:</label>
                    <h6 className="product__freshness">1 days ago</h6>
                </div>
                <div className="product__rating">
                </div>
                <div className="product__quantity">
                    <div className="product__pricing">
                        <h4 className="product__newprice">36.99 USD</h4>
                        <h6 className="product__oldprice">48.56 USD</h6>
                    </div>
                    <div className="product__amount">
                        <input type="number"  placeholder="1 pcs" className="product__count" />
                        <p className="product__unit">Pcs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct
