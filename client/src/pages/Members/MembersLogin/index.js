// 函式元件
import React, { Fragment, useState } from 'react'
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

function MembersLogin() {
  return (
    <Fragment>
      <header>
        <MyNavBar />
        <MyMenu />
      </header>
      <main>
        <div className="cart-crumb">
          <div></div>
          {/* <Link to="/KMembers">首頁</Link> /<Link to="/YfangCart">購物車</Link> */}
          <a href="../">首頁</a> / <a href="#">購物車</a>
        </div>
      </main>
      <MyFooter />
    </Fragment>
  )
}
export default withRouter(MembersLogin)
