import React from 'react'

function BlogHead(props) {
    const {data} = props;
    return (
        <div className="blog__cover">
        <img src="/static/img/pattern.svg" alt="" className="blog__cover-img" />
        <div className="blog__cover-tag">Dinner tips</div>
        <div className="blog__cover-content">
          <h3 className="blog__cover-title">Our chef tips for a great and tasty dinner ready in 20 minutes</h3>
          <div className="blog__cover-author">
            <img src="/static/img/auhtorava.png" alt="" className="blog__cover-authorava" />
            <h6 className="blog__cover-authorname">Author</h6>
            <p className="blog__cover-date">17.6.2020</p>
          </div>
        </div>
      </div>
    )
}

export default BlogHead
