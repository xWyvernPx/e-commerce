import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from "../component/Breadcrumb/Breadcrumb";
import ProductHeading from '../component/heading/ProductHeading';
import MainPage from '../component/MainPage/MainPage';
import TopFilter from '../component/TopFilter/TopFilter';
import {useDispatch, useSelector} from "react-redux";
import { loadRandom } from '../../Landing/landingSlice';
import { fetchCateInfo } from '../productPageSlice';
import ProductAPI from '../../../api/ProductAPI';
function ProductPage() {
    const [listType, setListType] = useState("");
    const onListTypeChange = (value) => {
        setListType(value);   
    }
    const state = useSelector(state =>  state.productPageReducer);

    const param = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadRandom());
        dispatch(fetchCateInfo(param));
        let cateId , subId ;
        const {category, subcategory} = state;
        if(category && subcategory) {
            cateId = category.id;
                subId = subcategory.id;
            console.log(cateId, subId);
        }
        
        const fetchProduct = async ()=> {
            const data = await ProductAPI.getProduct({page :1 , limit:20} , {type : "popular"} , {orderby : "price_desc"} , {budget : 2000 , rating : 4,categoryID : cateId , subcategoryID : subId} );
            console.log( data);
        }
        fetchProduct();
    }, [])
    return (
        <div>
            <Breadcrumb></Breadcrumb>
            <ProductHeading onTypeChange = {onListTypeChange}/>
            <TopFilter/>
            <MainPage type={listType}/>
        </div>
    )
}

export default ProductPage
