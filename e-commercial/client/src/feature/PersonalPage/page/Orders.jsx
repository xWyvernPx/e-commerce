import React from 'react';
import "./orders.scss"
function Orders() {
  return <div className="profile__card">
        <h3 className="profile__card-title">My orders</h3>
        
        <div className="orders__type">
            <p className="orders__type-item">All</p>
            <p className="orders__type-item">Processing</p>
            <p className="orders__type-item">Done</p>
        </div>
        <div className="orders__list">
          <div className="orders__card">
              <div className="orders__card-header">
                <h3>Brand name</h3>
                <h4>Status</h4>
              </div>
              <div className="orders__card-main">
                <div className="orders__card-itemava">
                  <img src="https://mac24h.vn/images/detailed/47/apple_mlh42ll_a_15_4_macbook_pro_with_1293727_n0o7-dk.jpg?t=1629384174" alt="" />
                </div>
                <div className="orders__card-info">
                    <h3 className="orders__product-name">Product name</h3>
                    <h4 className="orders__product-desc">Description</h4>
                    <h4 className="orders__product-quantity"> Quantity</h4>
                </div>
                <span className="orders__old-price">32$</span>
              </div>
              <div className="orders__total-price"><h4>Total : &nbsp; </h4> <h4>230$</h4></div>
          </div>
          <div className="orders__card">
              <div className="orders__card-header">
                <h3>Brand name</h3>
                <h4>Status</h4>
              </div>
              <div className="orders__card-main">
                <div className="orders__card-itemava">
                  <img src="https://mac24h.vn/images/detailed/47/apple_mlh42ll_a_15_4_macbook_pro_with_1293727_n0o7-dk.jpg?t=1629384174" alt="" />
                </div>
                <div className="orders__card-info">
                    <h3 className="orders__product-name">Product name</h3>
                    <h4 className="orders__product-desc">Description</h4>
                    <h4 className="orders__product-quantity"> Quantity</h4>
                </div>
                <span className="orders__old-price">32$</span>
              </div>
              <div className="orders__total-price"><h4>Total : &nbsp; </h4> <h4>230$</h4></div>
          </div>
          <div className="orders__card">
              <div className="orders__card-header">
                <h3>Brand name</h3>
                <h4>Status</h4>
              </div>
              <div className="orders__card-main">
                <div className="orders__card-itemava">
                  <img src="https://mac24h.vn/images/detailed/47/apple_mlh42ll_a_15_4_macbook_pro_with_1293727_n0o7-dk.jpg?t=1629384174" alt="" />
                </div>
                <div className="orders__card-info">
                    <h3 className="orders__product-name">Product name</h3>
                    <h4 className="orders__product-desc">Description</h4>
                    <h4 className="orders__product-quantity"> Quantity</h4>
                </div>
                <span className="orders__old-price">32$</span>
              </div>
              <div className="orders__total-price"><h4>Total : &nbsp; </h4> <h4>230$</h4></div>
          </div>
        </div>
  </div>;
}

export default Orders;
