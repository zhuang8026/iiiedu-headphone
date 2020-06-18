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
import MyNavBar from '../../components/Navbar'
import MyMenu from '../../components/NavbarMenu'
import MyFooter from '../../components/Footer'

import MembersLeft from './ComponentMembersLeft'
import MembersRight from './ComponentMembersRight'

function KMembers() {
  return (
    <Fragment>
      <header>
        <MyNavBar />
        <MyMenu />
      </header>
      <main>
        <div className="members_all">
          <MembersLeft />
          <MembersRight />
        </div>
      </main>
      <MyFooter />
    </Fragment>
  )
}
export default withRouter(KMembers)
