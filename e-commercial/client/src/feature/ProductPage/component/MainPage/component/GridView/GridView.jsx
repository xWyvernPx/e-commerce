import React from 'react'
import ProductCard from '../../../../../../component/common/product card/ProductCard'

function GridView(props) {
    const {data} = props

    return (
         <div className={`product-page__view--grid`}>
                   {data.map((ele,i)=><ProductCard key={i} data={ele} />
                   )} 
        </div> 
    )
}

export default GridView
