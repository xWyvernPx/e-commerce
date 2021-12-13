import React from 'react'

function SeoTag(props) {
    const {tagName} = props;
    return (
        <a  className='footer__tag-item'>{tagName}</a>
    )
}

export default SeoTag;
