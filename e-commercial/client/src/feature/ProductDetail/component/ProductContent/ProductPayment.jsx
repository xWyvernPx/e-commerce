import React from 'react'
import { useRef } from 'react';
import { calcNewPrice } from '../../../../component/common/Product Card List/ProductCardList';
import "./payment.scss"
function ProductPayment(props) {

    const {price,discount,addToCart} = props;
    const amount = useRef(1)

    return (
        <div className='detail__payment'>
            <div className="detail__price">
                {discount && <h2 className="detail__newprice">{calcNewPrice(price,discount.discount_percent)} $</h2> }
                <h6 className="detail__oldprice">{price} $</h6>
            </div>
            <div className="detail__quantity">

                        <input type="number" ref={amount}  defaultValue={1} placeholder="1 pcs" className="detail__count"/>

                        <p className="detail__unit">Pcs</p>
            </div>
            <button className="detail__tocart" onClick = {()=>addToCart(amount.current.value)}><img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/ic-actions-add-simple_09uaxs37H.svg?updatedAt=1639984156992" alt="" /> Add to cart</button>
        </div>
    )
}

export default ProductPayment
