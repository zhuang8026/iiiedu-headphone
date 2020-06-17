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

function CartDelivery(props) {
  return (
    <>
      <div className="cart-container">
        <ul className="cart-step-ul">
          <li className="doneColor">
            <i className="iconfont icon-geren"></i>
            <p>個人資料</p>
          </li>
          <li className="line done"></li>
          <li className="doneColor">
            <i className="iconfont icon-geren"></i>
            <p>配送方式</p>
          </li>
          <li className="line"></li>
          <li>
            <i className="iconfont icon-geren"></i>
            <p>付款方式</p>
          </li>
          <li className="line"></li>
          <li>
            <i className="iconfont icon-geren"></i>
            <p>訂單完成</p>
          </li>
        </ul>
        <form className="delivery-form">
          <div>請選擇配送方式:</div>
          <input
            type="radio"
            name="deliveryId"
            id="deliveryId1"
            value="黑貓宅急便"
          />
          <label htmlFor="deliveryId1"> 黑貓宅急便</label>
          <div className="line"></div>
          <input
            type="radio"
            name="deliveryId"
            id="deliveryId2"
            value="新竹物流"
          />
          <label htmlFor="deliveryId2"> 新竹物流</label>
          <div>
            <button>下一步</button>
          </div>
        </form>
      </div>
    </>
  )
}
export default withRouter(CartDelivery)
