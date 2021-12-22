import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./breadcrumb.scss"
function Breadcrumb() {
    const param = useParams();
    const [list, setList] = useState([]);
    useEffect(() => {
        setList([...Object.values(param).map(ele => ele.split("_").join(" ").replace(ele.charAt(0),ele.charAt(0).toUpperCase())) ] );
    }, [param])
    return (
        <div className='breadcrumb'>
            <div className="breadcrumb_list">
                <a href="/" className="breadcrumb_home">Homepage</a>
                {list.map((ele,i)=><a href="/" key={i} className={`breadcrumb_link ${list.length - 1 === i ? "breadcrumb_active" : ""}`}>{ele}</a> )}
            </div>
        </div>
    )
}

export default Breadcrumb
