import React from 'react'
import ProductInfo from './ProductInfo'
import "./productcontent.scss"
import ProductPayment from './ProductPayment'
import ProductRating from './ProductRating'
import { useSelector } from 'react-redux'
function ProductContent(props) {
    const {data} = props;
    const cart = useSelector(state => state.rootReducer.cartReducer.cart);
    console.log("cart in product content", cart)
    const addToCart = () => {
        const dupliCheck = state.cart.find(item => item.product.productID === action.payload.productId);
       if(dupliCheck){
          // TODO : dispatch add to cart

       }
       else {
             //TODO:  dispatch update product
       }
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
