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
            <button className="checkout__submit" type="submit">Complete order</button>
            <div className="checkout__commisson">
                <img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/Vrstva_302_ByNfznmC5.svg?updatedAt=1640159153605" alt="" />

                <h6>We are using the most advanced security to provide you the best experience ever.</h6>
            </div>
        </div>
    )
}

export default Confirmation

