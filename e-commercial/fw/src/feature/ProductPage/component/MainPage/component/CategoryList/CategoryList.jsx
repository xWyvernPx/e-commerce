import React from 'react'
import "./categorylist.scss";
function CategoryList() {
    return (
        <div className='category-list'>
            <h4 className="category-list__title">Category</h4>
            <div className="category-list__list">
                <a href='#!' className="category-list__item">
                    <h6 className="category-list__name">Fruit</h6>
                    <p className="category-list__sku">320</p>
                </a>
                <a  href='#!' className="category-list__item">
                    <h6 className="category-list__name">Bakery</h6>
                    <p className="category-list__sku">20</p>
                </a>
                <a  href='#!' className="category-list__item">
                    <h6 className="category-list__name">Baby</h6>
                    <p className="category-list__sku">50</p>
                </a>
            </div>
        </div>
    )
}

export default CategoryList
