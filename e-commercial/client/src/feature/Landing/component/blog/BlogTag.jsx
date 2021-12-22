import React from 'react'

function BlogTag(props) {
    const {data} = props;
    return (
        <div className="blog__tag">
        <div className="blog__tag-content">
          <h5 className="blog__tag-title">Salat is kinda good start to your morning routines</h5>
          <div className="blog__tag-author">
            <h6 className="blog__tag-authorname">Author</h6>
            <p className="blog__tag-date">14.1.2020</p>
          </div>
        </div>
        <img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/pattern_EPCiastAuKf.svg?updatedAt=1639053398342" alt="" className="blog__tag-img" />
      </div>
    )
}

export default BlogTag
