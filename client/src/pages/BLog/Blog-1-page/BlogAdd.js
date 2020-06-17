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
import '../../../assets/css/YongBlog/Yong-blog-add.css'

import BlogMainAdd from '../Blog-2-main/Blog-Main-4-Add'

// components
import MyNavBar from '../../../components/Navbar'
import MyMenu from '../../../components/NavbarMenu'
import MyFooter from '../../../components/Footer'

// 引入Main

// 引入Aside
import BlogAsidePhoto from '../Blog-2-Aside/Blog-Aside-1-Photo'
import BlogAsideCommunity from '../Blog-2-Aside/Blog-Aside-2-Community'

// imgs

// scss
// import './_menu.scss'

function BlogAdd(props) {
  return (
    <>
      <header>
        <MyNavBar />
        <MyMenu />
      </header>
      <div className="blog-add-spacing"></div>
      <div class="wrap-top">
        <div class="breadcrumbs">
          <h5>首頁 / 部落格 / 新增文章</h5>
        </div>
      </div>
      <div class="wrap-mid">
        <div class="blog-add d-flex">
          <div class="blog-add-main">
            <BlogMainAdd />
          </div>
          <div class="blog-add-aside">
            <BlogAsidePhoto />
            <BlogAsideCommunity />
          </div>
        </div>
      </div>
      <div className="blog-add-spacing"></div>
      <MyFooter />
    </>
  )
}
export default withRouter(BlogAdd)
