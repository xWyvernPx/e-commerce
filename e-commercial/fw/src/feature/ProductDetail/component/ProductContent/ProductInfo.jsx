import React from 'react'
import { calcDay } from '../../../../component/common/Product Card List/ProductCardList';
import "./productinfo.scss"
function ProductInfo(props) {
    const {data} = props;
    return (
        data &&
        <div className='detail__info'>
            <div className="detail__info--box1">
                <h6 className="detail__sku--label detail__info-label">SKU : </h6>
                <h6 className="detail__sku detail__info-value">{data.SKU} </h6>
                <h6 className="detail__cate--label  detail__info-label">Category : </h6>
                 {data.Category && <h6 className="detail__cate detail__info-value">{data.Category.name}</h6> }
                <h6 className="detail__stk--label detail__info-label">Stock</h6>
                <h6 className="detail__stk detail__info-value">In Stock </h6>
                <h6 className="detail__brand--label  detail__info-label">Brand : </h6>
                <h6 className="detail__brand detail__info-value">Grocery Tarm Fields </h6>
            </div>
            <div className="detail__info--box2">
            <h6 className="detail__frn--label  detail__info-label">Freshness:  </h6>
                <h6 className="detail__frn detail__info-value">{calcDay(data.created_at)} days old</h6>
                <h6 className="detail__unit--label  detail__info-label">Buy by : </h6>
                <h6 className="detail__unit detail__info-value">pcs , kg,box,pack</h6>
                <h6 className="detail__deli--label  detail__info-label">Delivery</h6>
                <h6 className="detail__deli detail__info-value">In 2 days </h6>
                <h6 className="detail__area--label  detail__info-label">Delivery area: </h6>
                <h6 className="detail__area detail__info-value">Vietnam </h6>
            </div>
        </div> || <div></div>
    )
}

export default ProductInfo
