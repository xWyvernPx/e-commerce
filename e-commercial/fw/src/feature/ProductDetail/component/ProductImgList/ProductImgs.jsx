import React from 'react'
import "./listimg.scss"
function ProductImgs(props) {
    const {listImg} = props
    
    return (
        listImg && 
        <div className='detail__imgs'>
            <p className="detail__discount-tag">- 36 %</p>
            {listImg.map((ele,i)=> <img src={ele.url || `https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/mockup_detail_img_5f_ZARdme.png?updatedAt=1639985660866`} alt="" className="detail__img" /> )}
           
        </div> || <div className='detail__imgs'>
                <p className="detail__discount-tag">- 36 %</p>
                <img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/mockup_detail_img_5f_ZARdme.png?updatedAt=1639985660866" alt="" className="detail__img" />
            </div>
    )
}
//TODO LATER : MODAL WHEN CLICK ON IMG
export default ProductImgs
