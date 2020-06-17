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

import BlogMainDetail from '../Blog-2-main/Blog-Main-3-Detail'

// components
import MyNavBar from '../../../components/Navbar'
import MyMenu from '../../../components/NavbarMenu'
import MyFooter from '../../../components/Footer'

// 引入Main

// 引入Aside
import BlogAsidePhoto from '../Blog-2-Aside/Blog-Aside-1-Photo'
import BlogAsideCommunity from '../Blog-2-Aside/Blog-Aside-2-Community'
import BlogAsideSubscribe from '../Blog-2-Aside/Blog-Aside-3-Subscribe'
import BlogAsideRecent from '../Blog-2-Aside/Blog-Aside-4-Recent'

// imgs

// scss
// import './_menu.scss'

function BlogDetail(props) {
  return (
    <>
      <header>
        <MyNavBar />
        <MyMenu />
      </header>
      <div className="blog-detail-spacing"></div>
      <div class="wrap-top">
        <div class="breadcrumbs">
          <h5>首頁 / 部落格 / 會員A / 文章C</h5>
        </div>
      </div>
      <div class="wrap-mid">
        <div class="blog-detail d-flex">
          <div class="blog-detail-main">
            <BlogMainDetail />
          </div>
          <div class="blog-detail-aside">
            <BlogAsidePhoto />
            <BlogAsideCommunity />
            <BlogAsideSubscribe />
            <BlogAsideRecent />
          </div>
        </div>
      </div>
      <div className="spacing"></div>
      <MyFooter />
    </>
  )
}
export default withRouter(BlogDetail)
