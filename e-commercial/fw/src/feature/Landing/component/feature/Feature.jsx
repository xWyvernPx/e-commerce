import React from 'react'
import FeatureAticle from "./FeatureArticle"
import "./feature.scss"
function Feature() {
    return (
        <section className="feature">
            <div className="feature__menu">
                <h4 className="feature__menu-title">Category menu</h4>
                <ul className="feature__menu-list">
                    <li className="feature__menu-option"><a href="#!">Bakery</a></li>
                    <li className="feature__menu-option"><a href="#!">Fruits and Vegetable</a></li>
                    <li className="feature__menu-option"><a href="#!">Meat and Fish</a></li>
                    <li className="feature__menu-option"><a href="#!">Drinks</a></li>
                    <li className="feature__menu-option"><a href="#!">Kitchen</a></li>
                </ul>
                <a href="#!" className="feature__menu-more">More categories <img src="/static/img/ic-chevron-right-black.png" alt="" /></a>
            </div>
            <div className="feature__display">
                <FeatureAticle/>
                <FeatureAticle/>
                <FeatureAticle/>
            </div>
        </section>
    )
}

export default Feature
