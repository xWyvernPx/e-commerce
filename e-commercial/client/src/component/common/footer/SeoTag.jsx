import React from 'react'

function SeoTag(props) {
    const {tagName} = props;
    return (
        <a href='true' className='footer__tag-item'>{tagName}</a>
    )
}

export default SeoTag;
