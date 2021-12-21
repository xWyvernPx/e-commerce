import React from 'react'
import "./bill_method.scss"
function BillMethod() {
    return (
        <div className='bill-method'>
            <h3 className="checkout__step1-title">Billing method</h3>
            <div className="checkout__step1-subtitle">
                <h6>Please enter your payment method</h6>
                <h6>Step 2 of 5</h6>
            </div>
            <div className="bill-method__form">
                <div className="bill-method__tag">
                    <div className="bill-method__label">
                        <input type="radio" name='bill-method' id="bill-method__input" className="bill-method__input" />
                        <label htmlFor="bill-method__input">FedEx</label>
                    </div>
                    <div className="bill-method__value">
                        <h6 className="bill-method__price">+32 USD</h6>
                        <h6 className="bill-method__title">Additional price</h6>
                    </div>
                    <img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/FedEx_Express_1_Z3qqxTr52.svg?updatedAt=1640092379357" alt="" className='bill-method__logo' />
                </div>
                <div className="bill-method__tag">
                    <div className="bill-method__label">
                        <input type="radio" id="bill-method__input2" name='bill-method' className="bill-method__input" />
                        <label htmlFor="bill-method__input2">DHL</label>
                    </div>
                    <div className="bill-method__value">
                        <h6 className="bill-method__price">+15 USD</h6>
                        <h6 className="bill-method__title">Additional price</h6>
                    </div>
                    <img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/dhl_KkJkJ_9En.svg?updatedAt=1640092379449" alt="" className='bill-method__logo' />
                </div>
            </div>
        </div>
    )
}

export default BillMethod
