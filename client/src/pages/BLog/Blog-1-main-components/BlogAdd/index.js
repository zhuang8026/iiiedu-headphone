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

// -------------------- components --------------------
import MyNavBar from '../../../../components/Navbar'
import MyMenu from '../../../../components/NavbarMenu'
import MyFooter from '../../../../components/Footer'
// 麵包削
import BlogCrumb from '../BlogCrumb'
// 引入Main
import BlogMainAddInputs from '../../Blog-2-main/Blog-Main-Add-1-Inputs'
// 引入Aside
import BlogAsidePhoto from '../../Blog-2-Aside/Blog-Aside-1-Photo'
import BlogAsideCommunity from '../../Blog-2-Aside/Blog-Aside-2-Community'

// -------------------- scss --------------------
import '../../../../assets/scss/blog_add.scss'

// -------------------- imgs --------------------

// -------------------- func --------------------

function BlogAdd(props) {
  return (
    <>
      <header>
        <MyNavBar />
        <MyMenu />
      </header>
      <div className="blog-add-spacing"></div>
      <div class="wrap-top">
        <BlogCrumb />
      </div>
      <div class="wrap-mid">
        <div class="blog-add blog-d-flex">
          <div class="blog-add-main">
            <BlogMainAddInputs />
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
