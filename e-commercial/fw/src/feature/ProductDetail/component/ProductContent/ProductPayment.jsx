import React from 'react'
import "./payment.scss"
function ProductPayment() {
    return (
        <div className='detail__payment'>
            <div className="detail__price">
                <h2 className="detail__newprice">36.23 USD</h2>
                <h6 className="detail__oldprice">48.56USD</h6>
            </div>
            <div className="detail__quantity">
                        <input type="number"  placeholder="1 pcs" className="detail__count" />
                        <p className="detail__unit">Pcs</p>
            </div>
            <button className="detail__tocart"><img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/ic-actions-add-simple_09uaxs37H.svg?updatedAt=1639984156992" alt="" /> Add to cart</button>
        </div>
    )
}

export default ProductPayment
