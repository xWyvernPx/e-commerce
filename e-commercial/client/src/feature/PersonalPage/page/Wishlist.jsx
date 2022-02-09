import React from 'react';
import ProductCard from "../../../component/common/product card/ProductCard"
function Wishlist() {
  return <div>
      <div className="profile__card">
        <h3 className="profile__card-title">My profile</h3>
        <div className="profile__devider"></div>
        <div className="wishlist__main">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </div>
  </div>;
}

export default Wishlist;
