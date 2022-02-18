import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import "./cart.scss"
import CartProduct from './CartProduct';
import CartAPI from '../../../api/cartAPI'
function InlineCart(props) {
    const {active, onClose} = props;
    const user = useSelector(state => state.rootReducer.loginReducer.loginInfo);
    
    useEffect(() => {
        if(user.id) {
            const cart = await CartAPI
        }
    }, [user]);
    
    return (
        <div className={`checkout__cart ${active ? "cartActive" :""}`}>
                <div className="checkout__header">
                    <h2 className="checkout__title">Shopping cart</h2>
                    <img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/ic-actions-close-simple_R1SCIuwbt.svg?updatedAt=1639053398420" alt="" className="checkout__close" onClick={onClose} />
                </div>
                <div className="checkout__list">
                    <CartProduct></CartProduct>
                    <CartProduct></CartProduct>
                    <CartProduct></CartProduct>
                    <CartProduct></CartProduct>
                </div>
                <div className="checkout__total">
                    <h6 className="checkout__total-title">Subtotal</h6>
                    <div className="checkout__total-price">
                        <h2 className="checkout__total-number">73.98 </h2>
                        <h2 className="checkout__total-currency"> USD</h2>
                    </div>
                </div>
                <div className="checkout__selection">
                    <a href="#!" className="checkout__continue">Continue shopping</a>
                    <a href="#!" className="checkout__checkout">Go to checkout</a>
                </div>
            </div>
    )
}

export default InlineCart
