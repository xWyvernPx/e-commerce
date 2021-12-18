import React from 'react'
import ProductCard from '../../../../component/common/product card/ProductCard'
import BrandList from './component/BrandList'
import CategoryList from './component/CategoryList/CategoryList'
import GridView from './component/GridView/GridView'
import ListView from './component/ListView/ListView'
import Rating from './component/RatingList/Rating'
import "./mainpage.scss"
function MainPage(props) {
    const {type} = props;
    return (
        <div className='product-page__layout'>
            <div className="product-page__sidebar">
                <CategoryList/>
                <BrandList/>
                <Rating/>
            </div>
            <div className="product-page__main">
                {type === "LIST" ?<ListView/> : <GridView/> }
                <button className="product-page__loadmore" type='button'>Show More Product</button>       
            </div>
        </div>
    )
}

export default MainPage
