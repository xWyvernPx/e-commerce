import React from 'react'
import ProductCard from '../../../../component/common/product card/ProductCard'
import "./bestproduct.scss";
function BestProduct() {
    return (
        <section className="best-farmer">
            <div className="feature__menu">
                <h4 className="feature__menu-title">Best from Farmers</h4>
                <ul className="feature__menu-list">
                    <li className="feature__menu-option"><a href="#!">Kitchen</a></li>
                    <li className="feature__menu-option"><a href="#!">Meat and Fish</a></li>
                    <li className="feature__menu-option"><a href="#!">Special Nutrition</a></li>
                    <li className="feature__menu-option"><a href="#!">Pharmacy</a></li>
                    <li className="feature__menu-option"><a href="#!">Baby</a></li>
                </ul>
                <a href="#!" className="feature__menu-more">More products <img src="/static/img/ic-chevron-right-black.png" alt="" /></a>
            </div>
            <div className="best-farmer__display">
               <ProductCard>    </ProductCard>
               <ProductCard>    </ProductCard>
               <ProductCard>    </ProductCard>
            </div>
        </section>

    )
}

export default BestProduct
