import React from 'react'
import "./additional.scss"
function Additional() {
    return (
        <div className='checkout__addtional'>
             <h3 className="checkout__step1-title">Additional informations</h3>
            <div className="checkout__step1-subtitle">
                <h6>Need something else? We will make it for you!</h6>
                <h6>Step 4 of 5</h6>
            </div>

            <div className="checkout__additional-form">
                <label htmlFor="checkout__additional-textarea">Order notes</label>
                <textarea name="" placeholder='Need a specific delivery day? Sending a gitf? Let’s say ...' 
                id="checkout__additional-textarea" cols="30"  rows="10"></textarea>
            </div>

        </div>
    )
}

export default Additional
