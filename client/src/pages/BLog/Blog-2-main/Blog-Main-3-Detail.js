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

import '../../../assets/css/YongBlog/Yong-blog-detail.css'

// components

// 引入Main-inside
import BlogMainDetailArticles from '../Blog-3-Main-inside/Blog-Main-Detail-1-Articles'
import BlogMainDetailLike from '../Blog-3-Main-inside/Blog-Main-Detail-2-Like'
import BlogMainDetailComments from '../Blog-3-Main-inside/Blog-Main-Detail-3-Comments'

// imgs

// scss
// import './_menu.scss'

function BlogMainDetail(props) {
  return (
    <>
      <BlogMainDetailArticles />
      <BlogMainDetailLike />
      <BlogMainDetailComments />
    </>
  )
}
export default withRouter(BlogMainDetail)
