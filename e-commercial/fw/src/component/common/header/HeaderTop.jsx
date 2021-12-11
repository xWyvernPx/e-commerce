import React from 'react'

function HeaderTop() {
    return (
        <div className="header__info">
            <div className="header__contact">
                <a href="#!" className="header__chat">Chat with us</a>
                <h6 className="header__phone">+420 336 775 664</h6>
                <h6 className="header__mail">info@freshnesecom.com</h6>
            </div>
            <div className="header__shortcut">
                <a href="#!" className="header__blog">Blog</a>
                <a href="#!" className="header__about">About Us</a>
                <a href="#!" className="header__career">Careers</a>
            </div>
        </div>
    )
}

export default HeaderTop
