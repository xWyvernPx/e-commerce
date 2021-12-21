import React from 'react'
import "./confirm.scss"
function Confirmation() {
    return (
        <div className='checkout__confirm'>
             <h3 className="checkout__step1-title">Confirmation</h3>
            <div className="checkout__step1-subtitle">
                <h6>We are getting to the end. Just few clicks and your order si ready!</h6>
                <h6>Step 5 of 5</h6>
            </div>
            <div className="checkout__confirm-item">
                <input type="checkbox" name="" id="checkout__confirm-newsletter" />
                <label htmlFor="checkout__confirm-newsletter">I agree with sending an Marketing and newsletter emails. No spam, promissed!</label>
            </div>
            <div className="checkout__confirm-item">
                <input type="checkbox" name="" id="checkout__confirm-newsletter" />
                <label htmlFor="checkout__confirm-newsletter">I agree with our <u>terms and conditions</u> and <u>privacy policy</u>.</label>
            </div>
        </div>
    )
}

export default Confirmation
