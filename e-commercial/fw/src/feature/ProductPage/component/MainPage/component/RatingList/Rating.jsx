import React from 'react'
import "./rating.scss"
function Rating() {
    return (
        <>  
            <h4 className="rating__title">Rating</h4>
            <div className='rating__list'>
                <div className="rating_item">
                    <input type="checkbox" name="" id="rating_item-input5" value={5} className='rating_item-input' />
                    <label htmlFor="" htmlFor="rating_item-input5"><img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/5star-svg_BpnN148fB.svg?updatedAt=1639807231701" alt="" /></label>
                </div>
                <div className="rating_item">
                    <input type="checkbox" name="" id="rating_item-input4" value={4} className='rating_item-input' />
                    <label htmlFor="" htmlFor="rating_item-input4"><img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/4star-svg_-cbBAtolv.svg?updatedAt=1639807230988" alt="" /></label>
                </div>
                <div className="rating_item">
                    <input type="checkbox" name="" id="rating_item-input3" value={3} className='rating_item-input' />
                    <label htmlFor="" htmlFor="rating_item-input3"><img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/3star-svg__3IPMyU8a.svg?updatedAt=1639807230492" alt="" /></label>
                </div>
                <div className="rating_item">
                    <input type="checkbox" name="" id="rating_item-input2" value={2} className='rating_item-input' />
                    <label htmlFor="" htmlFor="rating_item-input2"><img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/2star-svg_41tQtkj5z.svg?updatedAt=1639807230209" alt="" /></label>
                </div>
                <div className="rating_item">
                    <input type="checkbox" name="" id="rating_item-input1" value={1} className='rating_item-input' />
                    <label htmlFor="" htmlFor="rating_item-input1"><img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/1start-svg_My1_BpQtTm-.svg?updatedAt=1639807230139" alt="" /></label>
                </div>
            </div>
        </>
    )
}

export default Rating
