import React, { useEffect, useState } from 'react'
import ProvinceAPI from '../../../../../api/ProvinceAPI';
import "./billinfo.scss"
import {useForm} from "react-hook-form"
function BillInfo() {
    const [city, setCity] = useState([]);
    const [district, setDistrict] = useState([]);
    const [commune, setCommune] = useState([]);
    const {register,formState:{errors}} = useForm();
    console.log(commune)
    useEffect(() => {
        const fetchCity = async () => {
                const data = await ProvinceAPI.getCity().then(
                    data => {
                        console.log(data)
                        return data;
                    }
                );
            setCity(data);
        }
        fetchCity();
        
    }, [])
    const onCitySelect = (e) => {
        const cityId = e.target.value
        const fetchDistrict = async()=>{
            const data = await ProvinceAPI.getDistrict(cityId);
            // console.log(data.districts)
            setDistrict(data.districts);
        }
        fetchDistrict();
    }
    const onDistrictSelect = (e) => {
        const districtId = e.target.value
        const fetchWard = async()=>{
            const data = await ProvinceAPI.getCommune(districtId);
            console.log(data.wards)
            setCommune(data.wards);
        }
        fetchWard();
        
    }
    const orderAddressHandle = (e) =>
    {
        console.log(e.target.checked)
        if(e.target.checked === true) document.querySelector(".checkout__orderaddress").classList.add("checkout__orderaddress--active")
        else document.querySelector(".checkout__orderaddress").classList.remove("checkout__orderaddress--active")
    }
    return (
        <div className='checkout__step1'>
            <h3 className="checkout__step1-title">Billing info</h3>
            <div className="checkout__step1-subtitle">
                <h6>Please enter your billing info</h6>
                <h6>Step 1 of 5</h6>
            </div>
            <div className="checkout__step1-form">
                <div className="checkout__text-field">
                    <label htmlFor="checkout__fname" className='checkout__fname--label'>First Name</label>
                    <input type="text" name="first_name" id="checkout__fname" className="checkout__fname" placeholder='First Name' {...register("First name" , {required : true })} />

                    <label htmlFor="email" className='checkout__email--label'>Email address</label>
                    <input type="email" name="email" id="" className="checkout__email" placeholder='Email address'
                        {...register("Email" , {required : true ,pattern : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})}
                    />

                    <label htmlFor="address" className='checkout__address--label'>Address</label>
                    <input type="text" name="address" id="" className="checkout__address" placeholder='Address'
                    {...register("Address" , {required : false })} />

                    <label htmlFor="district" className='checkout__district--label'>District</label>
                    <select name="district" id="" className="checkout__district" placeholder='District' onChange={onDistrictSelect} {...register("District" , {required : true  } )} >
                        <option value="">Choose your district</option>  
                        {district && district.map((ele,i)=><option key={i} value={ele.code} >{ele.name}</option> )}  
                    </select>
                </div>
                <div className="checkout__text-field">
                    <label htmlFor="last_name" className='checkout__lname--label'>Last Name</label>
                    <input type="text" name="last_name" id="" className="checkout__lname" placeholder='Last Name' />
                    <label htmlFor="phone" className='checkout__phone--label'>Phone number</label>
                    <input type="number" name="phone" id="" className="checkout__phone" placeholder='Phone number' />
                    <label htmlFor="city" className='checkout__city--label'>City/Province</label>
                    <select name="city" id="" className="checkout__city" onChange={onCitySelect} placeholder='City or Province'  >
                        <option value="none">Choose your city</option>    
                        {city && city.map((ele,i)=><option key={i} value={ele.code} >{ele.name}</option> )}
                    </select>

                    <label htmlFor="Commune" className='checkout__commune--label'>Commune</label>
                    <select name="Commune" id="" className="checkout__commune" placeholder='Commune' defaultValue={"none"}> 
                        <option value="none">Choose your commune</option>    
                        {commune && commune.map((ele,i)=><option key={i} value={ele.code} >{ele.name}</option>)}
                    </select>
                </div>
            </div>
            <div className="checkout__otherAddress">
            <input type="checkbox" name="otherAddress" id="otherAddress" onChange={orderAddressHandle} />
            <label htmlFor="otherAddress" className='checkout__otherAddress--label'>Ship to a different address?</label>

            </div>
            <div className="checkout__text-field  checkout__orderaddress">
                <label htmlFor="address" className='checkout__address--label'>Address</label>
                <input type="text" name="address" id="" className="checkout__address" placeholder='Other Address'  />
            </div>

        </div>
    )
}

export default BillInfo
