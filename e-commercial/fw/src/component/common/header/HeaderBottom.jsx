import React from 'react'
import { category } from '../../../mockup/category'
import CatalogueSelect from '../CatalogueSelect/CatalogueSelect'
function HeaderBottom() {
    return (
        <section className="header__catalogue">
            {category.map((ele,i)=> <CatalogueSelect data={ele} key={i}></CatalogueSelect>)}
        </section>

    )
}

export default HeaderBottom
