import React from 'react'
import Breadcrumb from "../../ProductPage/component/Breadcrumb/Breadcrumb"
import ExtentalInfo from '../component/ExtenalInfo/ExtentalInfo'
import ProductContent from '../component/ProductContent/ProductContent'
import ProductImgs from '../component/ProductImgList/ProductImgs'
import "./product_detail.scss"
function ProductDetail() {
    return (
        <div className='detail__page'>
            <Breadcrumb/>
            <div className="detail__layout">
                <ProductImgs/>
                <ProductContent/>
                <ExtentalInfo/>
            </div>
            <section className="detail__related">
                <div className="detail__related-header">
                    <h4 className="detail__related-title">Related products</h4>
                    <a href="#!" className="detail__related-more">More Product <img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/ic-chevron-right_qkWANlH4l.svg?updatedAt=1639053393863" alt="" /></a>
                </div>
                <div className="detail__related-list">

                </div>
            </section>
        </div>
    )
}

export default ProductDetail
