import React from 'react';
import ProductCard from '../../../../component/common/product card/ProductCard';
import RandomList from '../common/RandomList';
import './bestselling.scss';
function BestSelling() {
    return (
        <section className="best-selling">
            <div className="feature__menu">
                <h4 className="feature__menu-title">Best selling Products</h4>
                { <RandomList ></RandomList>}
                <a href="#!" className="feature__menu-more">More products <img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/ic-chevron-right-black_bO3AYENdwMv.png?updatedAt=1639053394173" alt="" /></a>
            </div>
            <div className="best-selling__display">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </section>
    )
}

export default BestSelling
