import React from 'react'
import Breadcrumb from '../../ProductPage/component/Breadcrumb/Breadcrumb'
import BillInfo from './component/BillingInfo/BillInfo'
import "./checkout.scss"
import BillMethod from './component/BillingMethod/BillMethod'
import Additional from './component/Addtional/Additional'
import Confirmation from './component/Confirmation/Confirmation'
import {useForm} from "react-hook-form";
import PaymentMethod from './component/PaymentMethod/PaymentMethod'
function CheckoutPage() {
    const {register,handleSubmit,formState:{errors}} = useForm()
    const onSubmit = (data)=> {
        console.log(data)
    }
    return (
        <div className='checkout__page'>
            {/* fix later */}
            <Breadcrumb/> 
            <div className="checkout__layout">
                <section className="checkout__info">
                    <form action="" onSubmit={handleSubmit(onSubmit)} className='checkout__form'>
                        <BillInfo/>
                        <BillMethod/>
                        <PaymentMethod/>
                        <Additional/>
                        <Confirmation/>
                    </form>
                </section>
                <section className="checkout__orders">
                    <h3 className="checkout__order-title">Order Summary</h3>
                    <h6 className="checkout__order-desc">Price can change depending on shipping method and taxes of your state.</h6>
                    <div className="checkout__order-list">

                    </div>
                    <div className="checkout__order-payment">
                        <div className="checkout__order-subtotal">
                            <h6>Subtotal</h6>
                            <p>73.98 USD</p>
                        </div>
                        <div className="checkout__order-tax">
                            <h6>{"Tax (10%)"} </h6>
                            <p>7.398 USD</p>
                        </div>
                        <div className="checkout__order-shipping">
                            <h6>Shipping</h6>
                            <p>0 USD</p>
                        </div>

                        <div className="checkout__order-promo">
                            <input type="text" id='promo-code' placeholder='Promo Code' className="checkout__order-promo-code" />
                            <button className='checkout__order-promo-apply'>Apply</button>  
                            {/* onclick do side effect with saga */}
                        </div>
                        <div className="checkout__total">
                            <div className="checkout__total-label">
                                <h6>Total orders</h6>
                                <p>Guaranteed delivery day:  June 12, 2020</p>
                            </div>
                            <h3>89.84 USD</h3>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

function calcTax (tax, price) {
    return (tax/100) * price;
}
export default CheckoutPage
