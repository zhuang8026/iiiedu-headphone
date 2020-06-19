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
import BlogMainEditInputs from '../../Blog-2-main/Blog-Main-Edit-1-Inputs'
// 引入Aside
import BlogAsidePhoto from '../../Blog-2-Aside/Blog-Aside-1-Photo'
import BlogAsideCommunity from '../../Blog-2-Aside/Blog-Aside-2-Community'

// -------------------- scss --------------------
import '../../../../assets/scss/blog_edit.scss'

// -------------------- imgs --------------------

// -------------------- func --------------------

function BlogEdit(props) {
  return (
    <>
      <div className="blog-edit-spacing"></div>
      <div class="wrap-top">
        <BlogCrumb />
      </div>
      <div class="wrap-mid">
        <div class="blog-edit blog-d-flex">
          <div class="blog-edit-main">
            <BlogMainEditInputs />
          </div>
          <div class="blog-edit-aside">
            <BlogAsidePhoto />
            <BlogAsideCommunity />
          </div>
        </div>
      </div>
      <div className="blog-edit-spacing"></div>
    </>
  )
}
export default withRouter(BlogEdit)
