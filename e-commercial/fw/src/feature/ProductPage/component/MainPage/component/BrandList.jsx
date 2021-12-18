import React from 'react'
import "./brandlist.scss"
function BrandList() {
    return (
        <>  
            <h4 className="brandlist__title">Brands</h4>
            <div className='sidebar__brandlist'>
                <div className="sidebar__branditem">
                    <input type="checkbox" name="" id="sidebar__branditem-input" className='sidebar__branditem-input' />
                    <label htmlFor="" htmlFor="sidebar__branditem-input">Filtre by brand item</label>
                </div>
                <div className="sidebar__branditem">
                    <input type="checkbox" name="" id="sidebar__branditem-input" className='sidebar__branditem-input' />
                    <label htmlFor="" htmlFor="sidebar__branditem-input">Filtre by brand item</label>
                </div>
                <div className="sidebar__branditem">
                    <input type="checkbox" name="" id="sidebar__branditem-input" className='sidebar__branditem-input' />
                    <label htmlFor="" htmlFor="sidebar__branditem-input">Filtre by brand item</label>
                </div>
                <div className="sidebar__branditem">
                    <input type="checkbox" name="" id="sidebar__branditem-input" className='sidebar__branditem-input' />
                    <label htmlFor="" htmlFor="sidebar__branditem-input">Filtre by brand item</label>
                </div>
            </div>
        </>
    )
}

export default BrandList 
