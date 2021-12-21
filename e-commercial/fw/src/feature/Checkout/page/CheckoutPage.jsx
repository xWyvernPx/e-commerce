import React from 'react'
import Breadcrumb from '../../ProductPage/component/Breadcrumb/Breadcrumb'
import BillInfo from './component/BillingInfo/BillInfo'
import "./checkout.scss"
import BillMethod from './component/BillingMethod/BillMethod'
import Additional from './component/Addtional/Additional'
import Confirmation from './component/Confirmation/Confirmation'
import {useForm} from "react-hook-form";
function CheckoutPage() {
    const {register,handleSubmit,formState:{errors}} = useForm()
    const onSubmit = (data)=> {
        console.log(data)
    }
    return (
        <div className='checkout__page'>
            {/* fix later */}
            <Breadcrumb/> 
            <div className="checkout__layout">
                <section className="checkout__info">
                    <form action="" onSubmit={handleSubmit(onSubmit)} className='checkout__form'>
                        <BillInfo/>
                        <BillMethod/>
                        <Additional/>
                        <Confirmation/>
                    </form>
                </section>
                <section className="checkout__orders">

                </section>
            </div>

        </div>
    )
}

export default CheckoutPage
