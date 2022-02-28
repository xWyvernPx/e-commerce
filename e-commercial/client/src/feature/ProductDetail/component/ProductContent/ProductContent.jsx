import React, { useState } from 'react'
import ProductInfo from './ProductInfo'
import "./productcontent.scss"
import ProductPayment from './ProductPayment'
import ProductRating from './ProductRating'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../cartSlice'
function ProductContent(props) {
    const {data} = props;
    const cart = useSelector(getCart);
    const [amount, setAmount] = useState(0);
    const dispatch = useDispatch();
    const addToCart = (amount) => {
        const dupliCheck = cart.find(item => item.product.productID === data.id);
       if(dupliCheck){
            dispatch()            
       }
    //    else {
    //          //TODO:  dispatch update product
    //    }
    }
    const amountSet = (e)=>{
        setAmount(e.target.value);
    }
    return (
        data && <div className='detail__content'>
            <h1 className="detail__title">{data.name}</h1>
            <ProductRating rating={data.Rating} buyCount= {data.buyCount}/>
            <p className="detail__desc">{data.describe}</p>
            <ProductInfo data={data}/>
            <ProductPayment price = {data.price} discount = {data.Discount}/>
            <button className="detail__add-wishlist"  ><img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/ic-actions-heart_svg_u4NMf3p3k.svg?updatedAt=1639806004624" alt="" />Add to my wish list</button>
        </div>
    )
}

export default ProductContent
