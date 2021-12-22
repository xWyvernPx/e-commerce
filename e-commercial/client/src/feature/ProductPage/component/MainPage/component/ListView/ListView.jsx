import React from 'react'
import ProductCardList from '../../../../../../component/common/Product Card List/ProductCardList'

function ListView(props) {
    const {data} = props
    return (
        <div className='product-page__view-list'>
             {data.map((ele,i)=><ProductCardList key={i} data={ele} />
                   )} 
            
            
        </div>
    )
}

export default ListView
