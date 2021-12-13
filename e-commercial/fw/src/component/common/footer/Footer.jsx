import React from 'react'
import {mockupTag} from "../../../mockup/mockupSeoTag"
import SeoTag from './SeoTag'
import './footer.scss'
function Footer() {
    return (
        <footer className="footer">
            <div className="footer__about">
                <div className="footer__about-session">
                    <h4 className="footer__about-title">Get in touch</h4>
                    <a href="#a" className="footer__about-item">About us</a>
                    <a href="a" className="footer__about-item">Careers</a>
                    <a href="a" className="footer__about-item">Press Releases</a>
                    <a href="#" className="footer__about-item">Blog</a>
                </div>
                <div className="footer__about-session">
                    <h4 className="footer__about-title">Connections</h4>
                    <a href="a" className="footer__about-item">Facebook</a>
                    <a href="#" className="footer__about-item">Twitter</a>
                    <a href="#" className="footer__about-item">Instagram</a>
                    <a href="#" className="footer__about-item">Youtube</a>
                    <a href="#" className="footer__about-item">LinkedIn</a>
                </div>
                <div className="footer__about-session">
                    <h4 className="footer__about-title">Earnings</h4>
                    <a href="#" className="footer__about-item">Become an Affiliate</a>
                    <a href="#" className="footer__about-item">Advertise your product</a>
                    <a href="#" className="footer__about-item">Sell on Market</a>
                </div>
                <div className="footer__about-session">
                    <h4 className="footer__about-title">Account</h4>
                    <a href="#" className="footer__about-item">Your account</a>
                    <a href="#" className="footer__about-item">Returns Centre</a>
                    <a href="#" className="footer__about-item">100 % purchase protection</a>
                    <a href="#" className="footer__about-item">Chat with us</a>
                    <a href="#" className="footer__about-item">Help</a>
                </div>
            </div>
            <div className="footer__product-tag">
                <h4 className="footer__tag-title">Product tags</h4>
                <div className="footer__tag-list">
                    {mockupTag.map((ele,i) => <SeoTag key={i}  tagName ={ele}></SeoTag>)}
                </div>
            </div>
            <h5 className="footer__copyright">
                Copyright © 2020 petrbilek.com
            </h5>
        </footer>
    )
}

export default Footer
