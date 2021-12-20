import React from 'react'
import ProductInfo from './ProductInfo'
import "./productcontent.scss"
import ProductPayment from './ProductPayment'
import ProductRating from './ProductRating'
function ProductContent() {
    return (
        <div className='detail__content'>
            <h1 className="detail__title">Carrots from Tomissy Farm</h1>
            <ProductRating/>
            <p className="detail__desc">Carrots from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s carrots are growing on the fields naturally.</p>
            <ProductInfo/>
            <ProductPayment/>
            <button className="detail__add-wishlist"><img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/ic-actions-heart_svg_u4NMf3p3k.svg?updatedAt=1639806004624" alt="" />Add to my wish list</button>
        </div>
    )
}

export default ProductContent
