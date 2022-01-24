import React, { useEffect, useState } from 'react'
import CustomerCard from './CustomerCard'
import "./customer.scss"
import FeedbackAPI from "../../../../api/FeedbackAPI"
import Slider from "react-slick"

import SwiperCore,{ Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'



import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/navigation/navigation.min.css'
SwiperCore.use([Navigation]);

function Customer() {
    const [list, setList] = useState([]);
  
    useEffect( () => {
        
        try{
            const fetchList = async ()=>{
                let data=[];
                
                data = await FeedbackAPI.getAll();
                // console.log(data);
                setList(data);
                // console.log(list)
            }
             
           fetchList();
        }
        catch(err){
            console.log(err);
        }
        }
        
    , [])
    // const settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 5,
    //     slidesToScroll: 5,
        
    //   };
    return (
        <section className="customer">
            <div className="customer__header">
                <h4 className="customer__title">Our customers say</h4>
                <button className="customer__more">More <img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/ic-chevron-right_qkWANlH4l.svg?updatedAt=1639053393863" alt="" /></button>
            </div>
            {/* <button className="comment__scroll--previous" type="button"><img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/ic-chevron-left-white_MBGX3W7bp.png?updatedAt=1639053393535" alt="" /></button>
            <button className="comment__scroll--next" type="button"><img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/ic-chevron-right-white_m7jjZJscG.png?updatedAt=1639053394469" alt="" /></button> */}
            <div className="customer__display">
                {/* <Slider {...settings}> */}
            <Swiper
                modules={[ Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={5}
                navigation={true}

                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                
            >
                
                {list && list.map((ele, i) =><SwiperSlide><CustomerCard data={ele} key={i} /></SwiperSlide> )}
              
            </Swiper>

                {/* </Slider> */}
                
            </div>
        </section>

    )
}

export default Customer
