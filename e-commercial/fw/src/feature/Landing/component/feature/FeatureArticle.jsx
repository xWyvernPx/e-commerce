import React from 'react'

function FeatureArticle(props) {
    const {data} = props;
    return (
        <article className="feature__item">
            <h6 className="feature__subtitle">Banner subfocus</h6>
            <h3 className="feature__title">Space for heading</h3>
            <button className="feature__more">
                Read recepies
                <img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/ic-chevron-right_qkWANlH4l.svg?updatedAt=1639053393863" alt="" className="feature__arrow" />
            </button>
        </article>
    )
}

export default FeatureArticle
