import React from 'react'
import SortByRadio from './component/SortByRadio'
import {options} from "../../../../mockup/select_type_option"
import SelectType from './component/SelectType'
import "./topfilter.scss"
function TopFilter() {
    return (
        <section className="product-filter">
            <SortByRadio/>
            <SelectType data = {options}/>
        </section>
    )
}

export default TopFilter
