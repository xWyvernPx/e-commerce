import React, { useState } from 'react'
import DetailDescribe from './DetailDescribe';
import NumberTag from './NumberTag'
import "./extenal.scss"
function ExtentalInfo() {
    const [type, setType] = useState("");
    const changeType = (e) => {
        console.log( e.target.value)
        setType(e.target.value);
    }
    return (
        <div className='detail__extenal'>
            <div className="detail__tabs">
                <button className={`detail__tab-item ${type === "DESC" ? "detail__tab-item--active" : ""}`} value={"DESC"} onClick={changeType}>Description</button>
                <button className={`detail__tab-item ${type === "REVIEW" ? "detail__tab-item--active" : ""}`} value={"REVIEW"} onClick={changeType}>Reviews <NumberTag/></button>
                <button className={`detail__tab-item ${type === "QUEST" ? "detail__tab-item--active" : ""}`} value={"QUEST"} onClick={changeType}>Questions <NumberTag/></button>
            </div>
            {type === "DESC" ? <DetailDescribe/> : type === "REVIEW" ? "REVIEW" : "QUEST"}
        </div>
    )
}

export default ExtentalInfo
