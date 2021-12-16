import React, { useEffect } from 'react'
import FeatureAticle from "./FeatureArticle"
import "./feature.scss"
import RandomList from '../common/RandomList'
import { loadRandom } from '../../landingSlice'
import { useDispatch } from 'react-redux'
function Feature() {
   const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadRandom())
    }, [])
    return (
        <section className="feature">
            <div className="feature__menu">
                <h4 className="feature__menu-title">Category menu</h4>
                <RandomList/>
                <a href="#!" className="feature__menu-more">More categories <img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/ic-chevron-right-black_bO3AYENdwMv.png?updatedAt=1639053394173" alt="" /></a>
            </div>
            <div className="feature__display">
                <FeatureAticle/>
                <FeatureAticle/>
                <FeatureAticle/>
            </div>
        </section>
    )
}

export default Feature
