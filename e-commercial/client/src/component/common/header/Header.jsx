import React, { useEffect } from 'react'
import HeaderTop from './HeaderTop'
import "./header.scss"
import HeaderMiddle from './HeaderMiddle'
import HeaderBottom from './HeaderBottom'
import { useDispatch } from 'react-redux'
import { loadList } from '../../../feature/Landing/landingSlice'
function Header() {
    const dispatch = useDispatch();
     useEffect(() => {
        dispatch(loadList());
     }, [dispatch])
    return (
        <header className="header">
            <HeaderTop></HeaderTop>
            <HeaderMiddle></HeaderMiddle>
            <HeaderBottom></HeaderBottom>
        </header>
    )
}

export default Header
