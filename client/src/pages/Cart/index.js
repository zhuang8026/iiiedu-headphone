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
import MyNavBar from '../../components/Navbar'
import MyMenu from '../../components/NavbarMenu'
import MyFooter from '../../components/Footer'

//cart
import CartCrumb from './CartCrumb' //麵包屑
import CartTable from './CartTable' //購物車商品清單
import CartBuyerInfo from './CartBuyerInfo' //訂單個人資料填寫
import CartDelivery from './CartDelivery' //選擇配送方式

function YfangCart(props) {
  return (
    <Router>
      <Fragment>
        <header>
          <MyNavBar />
          <MyMenu />
        </header>
        <main>
          <CartCrumb />
          <CartBuyerInfo />
        </main>
        <MyFooter />
      </Fragment>
    </Router>
  )
}
export default withRouter(YfangCart)
