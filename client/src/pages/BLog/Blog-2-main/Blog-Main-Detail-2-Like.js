// 函式元件
import React, { Fragment, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
  NavLink,
  withRouter,
} from 'react-router-dom'

import '../../../assets/css/YongBlog/Yong-blog-edit.css'

// components

// scss
// import './_menu.scss'

function BlogMainDetailLike(props) {
  return (
    <>
      <div className="you-may-like">
        <h2>你可能也喜歡</h2>
        <div className="line"></div>
        <div className="you-may-like-cards d-flex">
          <div className="blog-detail-card">
            <figure>
              <img src="" alt="" />
            </figure>
            <div className="blog-detail-txt">
              <h5>文章內容文章內容</h5>
            </div>
          </div>
          <div className="blog-detail-card">
            <figure>
              <img src="" alt="" />
            </figure>
            <div className="blog-detail-txt">
              <h5>文章內容文章內容</h5>
            </div>
          </div>
          <div className="blog-detail-card">
            <figure>
              <img src="" alt="" />
            </figure>
            <div className="blog-detail-txt">
              <h5>文章內容文章內容</h5>
            </div>
          </div>
          <div className="blog-detail-card">
            <figure>
              <img src="" alt="" />
            </figure>
            <div className="blog-detail-txt">
              <h5>文章內容文章內容</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default withRouter(BlogMainDetailLike)
