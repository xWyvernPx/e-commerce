import React, { useState } from 'react'
import "./method.scss" ;
function PaymentMethod() {
    const [method, setMethod] = useState("CREDIT");
    const onMethodChange = (e)=>{
        if(e.target.checked) {
            setMethod(e.target.value);
        }
    }
    return (
        <div>
            <h3 className="checkout__step1-title">Payment method</h3>
            <div className="checkout__step1-subtitle">
                <h6>Please enter your payment method</h6>
                <h6>Step 3 of 5</h6>
            </div>
            <div className="payment-method">
                <div className="payment-method__item">
                    <div className="payment-method__title">
                        <div className="payment-method__label">
                            <input type="radio" name="method" defaultChecked id="payment-method__input" className="payment-method__input"  value={"CREDIT"} onChange={onMethodChange}/>
                            <label htmlFor="payment-method__input">Credit Card</label>
                        </div>
                        <div className="payment-method__logos">
                            <img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/Visa_Inc._logo_1_edb1-6vkj.svg?updatedAt=1640156445555" className='payment-method__logo-visa' alt="" />
                            <img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/mc_UVotQ4Zs1.svg?updatedAt=1640156445532" className='payment-method__logo-mc' alt="" />
                        </div>
                    </div>
                    <div className={`payment-method__info ${method === "CREDIT" ? "payment-method__info--active" : ""}`}>
                        <div className="payment-method__cardnum">
                            <label htmlFor="payment-method__cardnum">Card Number</label>
                            <input type="number" name="" id="payment-method__cardnum" placeholder='Card Number'/>
                        </div>



                        <div className="payment-method__subinfo">
                            <div className="payment-method__cardholder">
                                <label htmlFor="payment-method__cardholder">Card Holder</label>
                                <input type="text" name="" id="payment-method__card-holder" placeholder='Holder'/>

                            </div>

                            <div className="payment-method__expired">
                                <label htmlFor="payment-method__expired">Expiration Date</label>
                                <input type="date" name="" id="payment-method__expired" placeholder='DD/MM/YY' />
                            </div>

                            <div className="payment-method__cvc">
                                <label htmlFor="payment-method__cvc">CVC</label>
                                <input type="number" name="" id="payment-method__cvc" placeholder='CVC'/>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="payment-method__item">
                    <div className="payment-method__title">
                        <div className="payment-method__label">
                            <input type="radio" name="method" id="payment-method__input--paypal" className="payment-method__input" value={"PAYPAL"} onChange={onMethodChange}/>
                            <label htmlFor="payment-method__input--paypal">Paypal</label>
                        </div>
                        <div className="payment-method__logos">
                            <img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/PayPal_1_VtWkW7AiY.svg?updatedAt=1640158150530" className='payment-method__logo-visa' alt="" />
                        
                        </div>
                    </div>
                    <div className={`payment-method__info ${method === "PAYPAL" ? "payment-method__info--active" : ""}`}>
                        <div className="payment-method__cardnum">
                            <label htmlFor="payment-method__cardnum">Card Number</label>
                            <input type="number" name="" id="payment-method__cardnum" placeholder='Card Number'/>
                        </div>



                        <div className="payment-method__subinfo">
                            <div className="payment-method__cardholder">
                                <label htmlFor="payment-method__cardholder">Card Holder</label>
                                <input type="text" name="" id="payment-method__card-holder" placeholder='Holder'/>

                            </div>

                            <div className="payment-method__expired">
                                <label htmlFor="payment-method__expired">Expiration Date</label>
                                <input type="date" name="" id="payment-method__expired" placeholder='DD/MM/YY' />
                            </div>

                            <div className="payment-method__cvc">
                                <label htmlFor="payment-method__cvc">CVC</label>
                                <input type="number" name="" id="payment-method__cvc" placeholder='CVC'/>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="payment-method__item">
                    <div className="payment-method__title">
                        <div className="payment-method__label">
                            <input type="radio" name="method" id="payment-method__input-bit" className="payment-method__input" value={"BITCOIN"} onChange={onMethodChange} />
                            <label htmlFor="payment-method__input--bit">Bitcoin</label>
                        </div>
                        <div className="payment-method__logos">
                        
                            <img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/Bitcoin_logo_1_xbttlgCr6.svg?updatedAt=1640158150593" className='payment-method__logo-mc' alt="" />
                        </div>
                    </div>
                    <div className={`payment-method__info ${method === "BITCOIN" ? "payment-method__info--active" : ""}`}>
                        <div className="payment-method__cardnum">
                            <label htmlFor="payment-method__cardnum">Card Number</label>
                            <input type="number" name="" id="payment-method__cardnum" placeholder='Card Number'/>
                        </div>



                        <div className="payment-method__subinfo">
                            <div className="payment-method__cardholder">
                                <label htmlFor="payment-method__cardholder">Card Holder</label>
                                <input type="text" name="" id="payment-method__card-holder" placeholder='Holder'/>

                            </div>

                            <div className="payment-method__expired">
                                <label htmlFor="payment-method__expired">Expiration Date</label>
                                <input type="date" name="" id="payment-method__expired" placeholder='DD/MM/YY' />
                            </div>

                            <div className="payment-method__cvc">
                                <label htmlFor="payment-method__cvc">CVC</label>
                                <input type="number" name="" id="payment-method__cvc" placeholder='CVC'/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethod
