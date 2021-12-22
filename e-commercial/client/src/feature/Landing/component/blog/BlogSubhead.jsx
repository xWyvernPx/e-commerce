import React from 'react'

function BlogSubhead() {
    return (
        <div className="blog__subcover">
      <img src="https://ik.imagekit.io/flamefoxeswyvernp/Project/UI_challenge/e-commecial/pattern_EPCiastAuKf.svg?updatedAt=1639053398342" alt="" className="blog__subcover-img" />
      <div className="blog__subcover-tag">Dinner tips</div>
      <div className="blog__subcover-content">
        <h3 className="blog__subcover-title">Which vegetable your family will love and want’s eat each day</h3>
        <div className="blog__subcover-author">
          {/* <img src="/static/img/auhtorava.png" alt="" class="blog__subcover-authorava"> */}
          <h6 className="blog__subcover-authorname">Author</h6>
          <p className="blog__subcover-date">17.6.2020</p>
        </div>
      </div>
    </div>
    )
}

export default BlogSubhead
