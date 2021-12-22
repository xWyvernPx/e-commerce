import React from 'react'
import "./blog.scss";
import BlogSubhead from './BlogSubhead';
import BlogHead from './BlogHead';
import BlogTag from './BlogTag';
function Blog() {
    return (
        <section className="blog">
  <div className="customer__header">
    <h4 className="customer__title">Reading our blogs</h4>
    <button className="customer__more">Go to blog <img src="/static/img/ic-chevron-right.svg" alt="" /></button>
  </div>
  <div className="blog__display">
    <BlogHead/>
    <BlogSubhead/>
    <div className="blog__list">
      <BlogTag/>
      <BlogTag/>
      <BlogTag/>
    </div>
  </div>
</section>

    )
}

export default Blog
