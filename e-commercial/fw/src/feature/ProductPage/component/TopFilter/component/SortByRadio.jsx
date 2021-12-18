import React from 'react'
import "./sortradio.scss"
function SortByRadio() {
    return (
        <div className="product-filter__sort-by">
            <div className="sort-by__item">
                <input type="radio" name="sort" value={"popular"} id="sort-by__item-p" />
                <label htmlFor="sort-by__item-p" className='sort-by__item-label'>  Popular   </label>
            </div>
            <div className="sort-by__item">
                <input type="radio" name="sort" value={"best-selling"} id="sort-by__item-b" />
                <label htmlFor="sort-by__item-b" className='sort-by__item-label'>Best Selling</label>
            </div>
            <div className="sort-by__item">
                <input type="radio" name="sort" value={"newest"} id="sort-by__item-n" />
                <label htmlFor="sort-by__item-n" className='sort-by__item-label'>Newest</label>
            </div>
        </div>
    )
}

export default SortByRadio
