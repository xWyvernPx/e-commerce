import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData } from '../../../feature/Landing/landingSlice';
// import {category} from "../../../mockup/category";
import InlineCart from '../InlineCart/InlineCart';
import PrivateLink from '../PrivateLink/PrivateLink';

function HeaderMiddle() {
    const [active, setActive] = useState(false);
    const [cart, setCart] = useState(false);
    const [searchCategory, setSearchCategory] = useState("");
    const [amountCart, setAmountCart] = useState(0);
    const data= useSelector(getData).data;

    // const [category, setCategory] = useState();
   
    const categoryClickHandle = (e)=> {
        // document.querySelector(".header__category-select--list").classList.toggle("active");
        // document.querySelector(".header__category-select--icon").classList.toggle("spin");
        setActive(!active);
    }
    const cartClickHandle = (e)=> {
        setCart(!active);
    }
    const onCloseHandle = (e) => {
        setCart(false);
    }
    const searchCategoryChange= (e) =>{
        // console.log(e.target.innerText);
        setSearchCategory(e.target.innerText);
    }
    const categoryBlur = (e) => {
        setActive(false);
    }
    const amountSet = (value) => setAmountCart(value);
    return (
        <div className="header__main">
            <img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/logo_ZLKBetlBR.svg?updatedAt=1639053395891" alt="" className="header__logo" />
            <div className="header__lookup">
                <button className="header__category-select"  onClick={categoryClickHandle} onBlur={categoryBlur}>
                    <div className="header__category-select--field">
                        <p className="header__category-select--text" unselectable='on'>{searchCategory === ""? "All category" : searchCategory}</p>
                        <img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/ic-chevron-down_LCYAei6Yn.svg?updatedAt=1639053392995" className={`header__category-select--icon ${active ? "spin" : ""}`} alt="" />
                    </div>
                    <ul className={`header__category-select--list ${active ? "active" : ""}`}>
                        
                        {
                            data&&data.map((ele,i)=><li key={i} onClick={searchCategoryChange} className="header__category-select--option">{ele.name}</li> )
                        }
                    </ul>
                </button>
                <input type="text" name="search" id="header__search-bar" placeholder="Search Products, categories ..." />
                <img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/ic-actions-search_31-UBomEM.png?updatedAt=1639053399269" className="header__ic-search" alt=" " />
            </div>
            <div className="header__personal">
                <PrivateLink to="/account/profile" className="header__account"><img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/ic-actions-user_z25xdW8DD.svg?updatedAt=1639053392893" alt="" /></PrivateLink>
                <button className="header__cart" onClick={cartClickHandle}><img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/ic-ecommerce-basket_-nk-fAHgL.svg?updatedAt=1639053395004" alt="" />
                    {/* global   */}
                    <p className="header__number-items">{amountCart}</p> 
                </button>
            </div>
            {/* Cart here  */}
           {cart && <InlineCart active={cart} amountSet={amountSet} onClose ={onCloseHandle}></InlineCart>} 
        </div>
    )
}

export default HeaderMiddle
