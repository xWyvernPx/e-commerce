import React from 'react'
import BestProduct from '../component/bestproduct/BestProduct'
import BestSelling from '../component/bestselling/BestSelling'
import Blog from '../component/blog/Blog'
import Customer from '../component/customer/Customer'
import Feature from '../component/feature/Feature'
import Headline from '../component/headline/Headline'

function Landing() {
    return (
        <div className='landing'>
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
