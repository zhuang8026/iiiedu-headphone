// 函式元件
import React, { Fragment, useEffect, useState } from 'react'
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
// import MyNavBar from '../../../../components/Navbar'
// import MyMenu from '../../../../components/NavbarMenu'
// import MyFooter from '../../../../components/Footer'
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
  const[blogTitle, setBlogTitle] = useState('');
  const[blogContent01, setBlogContent01] = useState('');
  const[blogContent02, setBlogContent02] = useState('');

  // const {
  //   blogTitle,
  //   setBlogTitle,
  //   blogContent01,
  //   setBlogContent01,
  //   blogContent02,
  //   setBlogContent02,
  //    } = props;

  return (
    <>
      <div className="blog-add-spacing"></div>
      <div class="wrap-top">
        <BlogCrumb />
      </div>
      <div class="wrap-mid">
        <div class="blog-add blog-d-flex">
          <div class="blog-add-main">
            <BlogMainAddInputs 
              blogTitle = {blogTitle}
              setBlogTitle ={setBlogTitle}
              blogContent01 = {blogContent01}
              setBlogContent01 ={setBlogContent01}
              blogContent02 ={blogContent02}
              setBlogContent02 ={setBlogContent02}
            />
          </div>
          <div class="blog-add-aside">
            <BlogAsidePhoto />
            <BlogAsideCommunity />
          </div>
        </div>
      </div>
      <div className="blog-add-spacing"></div>
    </>
  )
}
export default withRouter(BlogAdd)
