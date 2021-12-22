import React, { useState } from 'react'
import "./product-heading.scss";
function ProductHeading(props) {
    const {onTypeChange} = props;
    const [viewState, setViewState] = useState("GRID");
    const checkedHandleGrid = (e)=> {
        const grid = document.getElementById('product-heading_grid')
        const list = document.getElementById('product-heading_list');
        if(grid.checked) list.checked = false;
        if(!grid.checked) list.checked = true;
        setViewState(grid.checked ? "GRID" : "LIST");
        onTypeChange(list.checked ? "LIST" : "GRID");

    console.log(viewState)

    }
const checkedHandleList = ()=> {
    const grid = document.getElementById('product-heading_grid')
    const list = document.getElementById('product-heading_list');
    if(list.checked) grid.checked = false;
    if(!list.checked) grid.checked = true;
    setViewState(list.checked ? "LIST" : "GRID");
    onTypeChange(list.checked ? "LIST" : "GRID");
    console.log(viewState)
}
    return (
        <div className='product-heading'>
            <h1 className="product-heading_title">Fruit and vegetable</h1>
            <div className="product-heading_function">
                
                    <div className="product-heading_view-grid">
                        <input type="checkbox" name='grid' id='product-heading_grid' onChange={checkedHandleGrid} />
                        <label htmlFor="product-heading_grid" className={`product-heading_grid-label ${viewState === "GRID" ? "product-heading_view-active" : ""}`}>
                            <img className='product-heading_grid-img'
                                src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/ic-layout-square-grid_qM-sjPiyo.svg?updatedAt=1639721671294" alt=""  />
                            Grid View
                        </label>
                    </div>
                    <div className="product-heading_view-list">
                        <input type="checkbox" name='list' id='product-heading_list' onChange={checkedHandleList} />
                        <label htmlFor="product-heading_list" className={`product-heading_list-label ${viewState === "LIST" ? "product-heading_view-active" : ""}`}>
                            <img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/ic-layout-sections_iIaF2fbpV.svg?updatedAt=1639721671033"
                                className='product-heading_list-img' alt="" />
                            List View
                        </label>
                    </div>
            </div>
        </div>
    )
}

export default ProductHeading
