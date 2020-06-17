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
import BlogUser from '../Blog-1-page/BlogUser'

// scss
// import './_menu.scss'

function YongMyBlog(props) {
  return (
    <Router>
      <Fragment>
        <header>
          <MyNavBar />
          <MyMenu />
        </header>

        <main>
          <BlogUser />
        </main>

        <MyFooter />
      </Fragment>
    </Router>
  )
}
export default withRouter(YongMyBlog)
