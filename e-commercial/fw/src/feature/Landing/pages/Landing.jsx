import React, { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import BestProduct from '../component/bestproduct/BestProduct'
import BestSelling from '../component/bestselling/BestSelling'
import Blog from '../component/blog/Blog'
import Customer from '../component/customer/Customer'
import Feature from '../component/feature/Feature'
import Headline from '../component/headline/Headline'
import { loadList, getData} from '../landingSlice'



function Landing() {
    const dispatch = useDispatch();
     useEffect(() => {
        dispatch(loadList());
     }, [])
    return (
        <div className='landing' >
            <Feature></Feature>
            <BestSelling></BestSelling>
            <BestProduct></BestProduct>
            <Customer/>
            <Headline/>
            <Blog/>
        </div>
    )
}

export default Landing
