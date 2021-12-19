import React from 'react'
import "./rating.scss"
function Rating(props) {
    const {onRatingChange,ratingValue} = props;
    const onClickHandle = (e) => {
       if(e.target.checked) {
           if (e.target.value > ratingValue) onRatingChange(e.target.value)
       }
       else {
           let max= 0;
           const input =   document.querySelectorAll(".rating_item-input");
            input.forEach(ele => {
               if (ele.checked ) max = ele.value > max ? ele.value : max;
           })
           onRatingChange(max);
       }
    }
    return (
        <>  
            <h4 className="rating__title">Rating</h4>
            <div className='rating__list'>
                <div className="rating_item">
                    <input type="checkbox" name="rating_item-input"  id="rating_item-input5" value={5} onClick={onClickHandle} className='rating_item-input' />
                    <label htmlFor="" htmlFor="rating_item-input5"><img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/5star-svg_BpnN148fB.svg?updatedAt=1639807231701" alt="" /></label>
                </div>
                <div className="rating_item">
                    <input type="checkbox" name="" id="rating_item-input4" value={4} onClick={onClickHandle}  className='rating_item-input' />
                    <label htmlFor="" htmlFor="rating_item-input4"><img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/4star-svg_-cbBAtolv.svg?updatedAt=1639807230988" alt="" /></label>
                </div>
                <div className="rating_item">
                    <input type="checkbox" name="" id="rating_item-input3" value={3} onClick={onClickHandle}  className='rating_item-input' />
                    <label htmlFor="" htmlFor="rating_item-input3"><img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/3star-svg__3IPMyU8a.svg?updatedAt=1639807230492" alt="" /></label>
                </div>
                <div className="rating_item">
                    <input type="checkbox" name="" id="rating_item-input2" value={2} onClick={onClickHandle}  className='rating_item-input' />
                    <label htmlFor="" htmlFor="rating_item-input2"><img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/2star-svg_41tQtkj5z.svg?updatedAt=1639807230209" alt="" /></label>
                </div>
                <div className="rating_item">
                    <input type="checkbox" name="" id="rating_item-input1" value={1} onClick={onClickHandle}  className='rating_item-input' />
                    <label htmlFor="" htmlFor="rating_item-input1"><img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/1start-svg_My1_BpQtTm-.svg?updatedAt=1639807230139" alt="" /></label>
                </div>
            </div>
        </>
    )
}

export default Rating
