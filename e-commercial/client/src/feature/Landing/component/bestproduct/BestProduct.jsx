import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import ProductCard from '../../../../component/common/product card/ProductCard'
import { loadRandom } from '../../landingSlice';
import RandomList from '../common/RandomList';
import "./bestproduct.scss";
function BestProduct() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadRandom())
    }, [])
    return (
        <section className="best-farmer">
            <div className="feature__menu">
                <h4 className="feature__menu-title">Best from Farmers</h4>
                <RandomList/>
                <a href="#!" className="feature__menu-more">More products <img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/ic-chevron-right-black_bO3AYENdwMv.png?updatedAt=1639053394173" alt="" /></a>
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
