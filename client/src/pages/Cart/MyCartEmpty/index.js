// 函式元件
import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'

function CartEmpty(props) {
  return (
    <>
      <div className="cart-crumb">
        <div></div>
        <Link to="/">首頁</Link> / <Link to="/YfangCart">購物車</Link>
      </div>
      <div className="cart-container">
        <ul class="cart-empty">
          <li>目前購物車是空的!</li>
          <li class="border-top">
            <button type="button"><Link to="/YyProduct">去商店</Link></button>
          </li>
        </ul>
      </div>
    </>
  )
}
export default withRouter(CartEmpty)
