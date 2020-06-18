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

// imgs
import DetailSample1 from '../../../assets/img/blog-img/blog-detail/blog-detail-sample-1.jpg'
import DetailSample2 from '../../../assets/img/blog-img/blog-detail/blog-detail-sample-2.jpg'

// scss
// import './_menu.scss'

function BlogMainDetailArticles(props) {
  return (
    <>
      <div className="articles">
        <div className="article-first">
          <h2>文章標題</h2>
          <h5>06/01,2020 建立</h5>
          <figure>
            <img className="blog-cover" src={DetailSample1} alt="" />
          </figure>
          <p>
            文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容
          </p>
        </div>
        <div className="article-second">
          <figure>
            <img className="blog-cover" src={DetailSample1} alt="" />
          </figure>
          <figure>
            <img className="blog-cover" src={DetailSample2} alt="" />
          </figure>
          <p>
            文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容
          </p>
          <h6>最後修改 06/01,2020</h6>
        </div>
      </div>
    </>
  )
}
export default withRouter(BlogMainDetailArticles)
