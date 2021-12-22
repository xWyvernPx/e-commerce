import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumb from "../../ProductPage/component/Breadcrumb/Breadcrumb"
import ExtentalInfo from '../component/ExtenalInfo/ExtentalInfo'
import ProductContent from '../component/ProductContent/ProductContent'
import ProductImgs from '../component/ProductImgList/ProductImgs'
import ProductAPI from "../../../api/ProductAPI"
import ProductCard from '../../../component/common/product card/ProductCard'
import "./product_detail.scss"
function ProductDetail() {
    const param = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        const {id} = param;
        const fetchData = async () =>{
            const data = await ProductAPI.getProductById(id);
            console.log(data)
            setData(data);
        }
        fetchData();
    }, [param])
    return (
        <div className='detail__page'>
            <Breadcrumb/>
            <div className="detail__layout">
                {data.ProductImgs && <ProductImgs list={data.ProductImgs}/> }
                <ProductContent data={data}/>
                <ExtentalInfo dataId= {data.id} />
            </div>
            <section className="detail__related">
                <div className="detail__related-header">
                    <h4 className="detail__related-title">Related products</h4>
                    <a href="#!" className="detail__related-more">More Product <img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/ic-chevron-right_qkWANlH4l.svg?updatedAt=1639053393863" alt="" /></a>
                </div>
                <div className="detail__related-list">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </section>
        </div>
    )
}

export default ProductDetail
