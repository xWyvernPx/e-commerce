import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import BestSelling from '../component/bestselling/BestSelling'
import Feature from '../component/feature/Feature'
import { loadList } from '../landingSlice'
    const Headline2 = React.lazy(()=> import("../component/headline/Headline"));
    const Blog2 = React.lazy(()=> import("../component/blog/Blog"))
    const Customer2 = React.lazy(()=> import("../component/customer/Customer"))
    const BestProduct2  = React.lazy(()=> import("../component/bestproduct/BestProduct"))

function Landing() {
    
    return (
        <div className='landing' >
            <Feature></Feature>
            <BestSelling></BestSelling>
            <BestProduct2></BestProduct2>
            <Customer2/>
            <Headline2/>
            <Blog2/>
        </div>
    )
}

export default Landing
