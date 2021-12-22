import React from 'react'
import SortByRadio from './component/SortByRadio'
import {options} from "../../../../mockup/select_type_option"
import SelectType from './component/SelectType'
import "./topfilter.scss"
function TopFilter(props) {
    const {onTypeChange,onOrderbyChange} =props
    return (
        <section className="product-filter">
            <SortByRadio onTypeChange={onTypeChange} />
            <SelectType onOrderbyChange={onOrderbyChange} data = {options}/>
        </section>
    )
}

export default TopFilter
