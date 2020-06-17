//製作不跳轉頁面
import React, { Fragment, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Navigation,
  HashRouter,
} from 'react-router-dom'
function SellerApp() {
  return (
    <HashRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/profile" />
          <Profile />
          <Route path="/order" />
          <Order />
          <Route path="/product" />
          <Product />
          <Route path="/marketing" />
          <Marketing />
          <Route path="/online-shop" />
          <OnlineShop />
        </Switch>
      </div>
    </HashRouter>
  )
}

export default SellerApp
