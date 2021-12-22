import React from 'react';
import { useSelector } from 'react-redux';
import { getData } from '../../../feature/Landing/landingSlice';
import CatalogueSelect from '../CatalogueSelect/CatalogueSelect';
function HeaderBottom() {
    const data= useSelector(getData);
    return (
        <section className="header__catalogue">
            {data.data && data.data.map((ele,i)=> <CatalogueSelect data={ele} key={i}></CatalogueSelect>)}
        </section>

    )
}

export default HeaderBottom
