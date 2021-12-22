import React, { useEffect, useState } from 'react'
import CustomerCard from './CustomerCard'
import "./customer.scss"
import FeedbackAPI from "../../../../api/FeedbackAPI"
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
    return (
        <section className="customer">
            <div className="customer__header">
                <h4 className="customer__title">Our customers say</h4>
                <button className="customer__more">More <img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/ic-chevron-right_qkWANlH4l.svg?updatedAt=1639053393863" alt="" /></button>
            </div>
            <button className="comment__scroll--previous" type="button"><img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/ic-chevron-left-white_MBGX3W7bp.png?updatedAt=1639053393535" alt="" /></button>
            <button className="comment__scroll--next" type="button"><img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/ic-chevron-right-white_m7jjZJscG.png?updatedAt=1639053394469" alt="" /></button>
            <div className="customer__display">
                {list&& list.map((ele,i)=> <CustomerCard data={ele} key={i}/>)}
                
                <CustomerCard></CustomerCard>
            </div>
        </section>

    )
}

export default Customer
