import React from 'react'
import "./rating.scss"
function ProductRating() {
    return (
        <div id="half-stars-example">
            <div className="rating-group">
                <input className="rating__input rating__input--none" defaultChecked name="rating2" id="rating2-0" defaultValue={0} type="radio" />
                <label aria-label="0 stars" className="rating__label" htmlFor="rating2-0">&nbsp;</label>
                <label aria-label="0.5 stars" className="rating__label rating__label--half" htmlFor="rating2-05"><i className="rating__icon rating__icon--star fa fa-star-half" /></label>
                <input className="rating__input" name="rating2" id="rating2-05" defaultValue="0.5" type="radio" />
                <label aria-label="1 star" className="rating__label" htmlFor="rating2-10"><i className="rating__icon rating__icon--star fa fa-star" /></label>
                <input className="rating__input" name="rating2" id="rating2-10" defaultValue={1} type="radio" />
                <label aria-label="1.5 stars" className="rating__label rating__label--half" htmlFor="rating2-15"><i className="rating__icon rating__icon--star fa fa-star-half" /></label>
                <input className="rating__input" name="rating2" id="rating2-15" defaultValue="1.5" type="radio" />
                <label aria-label="2 stars" className="rating__label" htmlFor="rating2-20"><i className="rating__icon rating__icon--star fa fa-star" /></label>
                <input className="rating__input" name="rating2"  id="rating2-20" defaultValue={2} type="radio" />
                <label aria-label="2.5 stars" className="rating__label rating__label--half" htmlFor="rating2-25"><i className="rating__icon rating__icon--star fa fa-star-half" /></label>
                <input className="rating__input" name="rating2" id="rating2-25" defaultValue="2.5"  type="radio" />
                <label aria-label="3 stars" className="rating__label" htmlFor="rating2-30"><i className="rating__icon rating__icon--star fa fa-star" /></label>
                <input className="rating__input" name="rating2" id="rating2-30" defaultValue={3} type="radio" />
                <label aria-label="3.5 stars" className="rating__label rating__label--half" htmlFor="rating2-35"><i className="rating__icon rating__icon--star fa fa-star-half" /></label>
                <input className="rating__input" name="rating2" id="rating2-35" defaultValue="3.5"  type="radio" />
                <label aria-label="4 stars" className="rating__label" htmlFor="rating2-40"><i className="rating__icon rating__icon--star fa fa-star" /></label>
                <input className="rating__input" name="rating2" id="rating2-40" defaultValue={4} type="radio" />
                <label aria-label="4.5 stars" className="rating__label rating__label--half" htmlFor="rating2-45"><i className="rating__icon rating__icon--star fa fa-star-half" /></label>
                <input className="rating__input" name="rating2" id="rating2-45" defaultValue="4.5" type="radio" />
                <label aria-label="5 stars" className="rating__label" htmlFor="rating2-50"><i className="rating__icon rating__icon--star fa fa-star" /></label>
                <input className="rating__input" name="rating2" id="rating2-50" defaultValue={5} type="radio" />
            </div>
           
        </div>
    )
}

export default ProductRating
