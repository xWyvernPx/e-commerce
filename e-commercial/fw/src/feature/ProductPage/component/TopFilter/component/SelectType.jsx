import React, { useState } from 'react'
import "./selecttype.scss";
function SelectType(props) {
    const {data} = props;
    const [active, setActive] = useState(false);
    const [sortKey, setSortKey] = useState("");
    const handleClick = () =>  {
        setActive(!active)
    }
    const handleItemClick = (e) => {
        const text = document.querySelector(".select__text");
        console.log(e.target.getAttribute("data"));
        setSortKey(e.target.value)
        text.textContent = e.target.innerText;
    }
    const onBlurHandle = ()=> {
        setActive(false)
    }
    return (
        <button className='select' onBlur={onBlurHandle} onClick={handleClick}>
            <div className="select__field">
                <p className="select__text">Filter</p>
                <img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/ic-chevron-down-black_AxkUH3Ri3.svg?updatedAt=1639727309448" className={`${active ? "spin" : ""}`}alt="" />
            </div>
            <ul className={`select__list ${active ?"select__list--active" : "" }`}>
                {data && data.map((ele,i) => <li data={ele.value} onClick={handleItemClick} key={i} className="select__item">{ele.label}</li>)}
            </ul>
        </button>
    )
}

export default SelectType
