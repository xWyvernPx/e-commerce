import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import ProductAPI from '../../../api/ProductAPI';
import { loadRandom } from '../../Landing/landingSlice';
import Breadcrumb from "../component/Breadcrumb/Breadcrumb";
import ProductHeading from '../component/heading/ProductHeading';
import MainPage from '../component/MainPage/MainPage';
import TopFilter from '../component/TopFilter/TopFilter';
import { fetchCateInfo } from '../productPageSlice';
function ProductPage() {
    const [listType, setListType] = useState("");
    const onListTypeChange = (value) => {
        setListType(value);   
    }
    const [list, setList] = useState([]);
    const param = useParams();
    const [deps, setDeps] = useState({
        sort1 : {type: "best_selling"} ,
        sort2 : {orderby : "price_asc"},
        filter : {budget : 2000 , rating : 0 }
    })
    const [pagination, setPagination] = useState(  {page : 1 ,limit : 20 })
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(loadRandom());
        dispatch(fetchCateInfo(param));
        //============================================
    
        console.log(param)
        // ========================================================
        const fetchProduct = async ()=> {
            const data = await ProductAPI.getProductCate(pagination,deps.sort1,deps.sort2,deps.filter,{cate : param.cateslug , subcate : param.subslug});
            
            setList(data)
          
        }
        fetchProduct();
    }, [deps,param]);
    useEffect(() => {
      
        const fetchProduct = async ()=> {
            const data = await ProductAPI.getProduct(pagination,deps.sort1,deps.sort2,deps.filter);
            console.log(data)
            setList(list.concat(data));
            console.log(data)
        }
        fetchProduct();
    }, [pagination]);

    const onTypeChange = (selected) => {
        setDeps({...deps , sort1 : {type : selected.target.value }})
        console.log(deps)
    }
    const onOrderbyChange = (value) => {
        setDeps({...deps , sort2 : { orderby : value}})
    }
    const onLoadMore = () =>{
        setPagination ( {...pagination , page : (pagination.page + 1) })
    }
    const onRatingChange = (value) => {
        setDeps({...deps , filter : {...deps.filter, rating :value }})
    }
    return (
        <div >
            <div className={param.cateslug}></div>
            <Breadcrumb></Breadcrumb>
            <ProductHeading onTypeChange = {onListTypeChange}/>
            <TopFilter onTypeChange = {onTypeChange} onOrderbyChange={onOrderbyChange} />
            <MainPage   onRatingChange={onRatingChange} ratingValue ={deps.filter.rating} type={listType} onLoadMore={onLoadMore} data = {list}/>
        </div>
    )
}

export default ProductPage
