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
import MyNavBar from '../../../components/Navbar'
import MyMenu from '../../../components/NavbarMenu'
import MyFooter from '../../../components/Footer'
//blog
import BlogStandard from '../Blog-1-main-components/BlogStandard'

// -------------------- scss --------------------

// -------------------- imgs --------------------

// -------------------- func --------------------

function YongBlog(props) {

  const { userdata, setUserdata } = props


  return (
    <Route>
      <Fragment>
        <main>
          <BlogStandard />
        </main>
      </Fragment>
    </Route>
  )
}
export default withRouter(YongBlog)
