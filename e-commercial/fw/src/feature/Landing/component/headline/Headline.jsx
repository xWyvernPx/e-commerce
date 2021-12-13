import React from 'react'
import ProductCard from '../../../../component/common/product card/ProductCard'
import "./headline.scss"
function Headline() {
    return (
                <section className="headline"> 
                  <div className="customer__header">
                    <h4 className="customer__title">Section headline</h4>
                    <button className="customer__more">Button <img src="/static/img/ic-chevron-right.svg" alt="" /></button>
                  </div>
                  <div className="headline__display">
                      <ProductCard/>
                      <ProductCard/>
                      <ProductCard/>
                      <ProductCard/>    
                  </div>
                </section>
            
    );
}

export default Headline
