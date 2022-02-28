import React from 'react';
import { useNavigate } from "react-router-dom";

function SubcatalogueList(props) {
    const nav = useNavigate();
    const {list,main,active} = props;
    const NavHandle = (slug)=> {
        nav(`/${main}/${slug}`)
    }
    return (
        <ul className={`catalogue__select-list catalogue--${main} ${active ? "active" : ""}`}>
            {
               list && list.map((ele,i)=><li className="catalogue__select-option" onClick={()=> NavHandle(ele.slug)} key={i}> <a>{ele.name}</a> </li>)
            }
        </ul>
    )
}

export default SubcatalogueList
