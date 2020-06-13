import React, { Fragment, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import MyNavBar from './components/Navbar'
import MyMenu from './components/NavbarMenu'
import MyFooter from './components/Footer'
//賣家功能
import Seller_center from './pages/alice_seller/Seller_center'

function App() {
  return (
    <Router>
      <>
        <Switch>
        {/* 分頁切換router */}
          <Route path="/seller-center">
            <Seller_center />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
