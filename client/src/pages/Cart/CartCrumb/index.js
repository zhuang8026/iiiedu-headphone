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
// import '../../../assets/css/Cart/CartCrumb.css'

// scss
// import './_menu.scss'

function CartCrumb(props) {
  return (
    <>
      <div className="cart-crumb">
        <div></div>
        {/* <Link to="/KMembers">首頁</Link> /<Link to="/YfangCart">購物車</Link> */}
        <a href="../">首頁</a> / <a href="#">購物車</a>
      </div>
    </>
  )
}
export default withRouter(CartCrumb)
