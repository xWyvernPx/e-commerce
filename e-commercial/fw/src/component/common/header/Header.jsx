import React from 'react'
import HeaderTop from './HeaderTop'
import "./header.scss"
import HeaderMiddle from './HeaderMiddle'
import HeaderBottom from './HeaderBottom'
function Header() {
    return (
        <header className="header">
            <HeaderTop></HeaderTop>
            <HeaderMiddle></HeaderMiddle>
            <HeaderBottom></HeaderBottom>
        </header>
    )
}

export default Header
