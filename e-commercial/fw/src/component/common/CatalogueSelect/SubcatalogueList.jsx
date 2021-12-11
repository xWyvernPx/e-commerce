import React from 'react'

function SubcatalogueList(props) {
    const {list,main,active} = props;
    console.log(list);
    return (
        <ul className={`catalogue__select-list catalogue--${main} ${active ? "active" : ""}`}>
            {
               list && list.map((ele,i)=><li className="catalogue__select-option" key={i}><a href="#">{ele.name}</a></li>)
            }
        </ul>
    )
}

export default SubcatalogueList
