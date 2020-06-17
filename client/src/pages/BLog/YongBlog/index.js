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

// components
import MyNavBar from '../../../components/Navbar'
import MyMenu from '../../../components/NavbarMenu'
import MyFooter from '../../../components/Footer'

//blog
import BlogStandard from '../Blog-1-page/BlogStandard'

// scss
// import './_menu.scss'

function YongBlog(props) {
  return (
    <Router>
      <Fragment>
        <header>
          <MyNavBar />
          <MyMenu />
        </header>

        <main>
          <BlogStandard />
        </main>

        <MyFooter />
      </Fragment>
    </Router>
  )
}
export default withRouter(YongBlog)
