// 函式元件
import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'

function CartDelivery(props) {
  return (
    <>
      <div className="cart-crumb">
        <div></div>
        <Link to="/">首頁</Link> / <Link to="/YfangCart">購物車</Link>
      </div>
      <div className="cart-container">
        {/* 購物車步驟圖 */}
        <ul className="cart-step-ul">
          <li className="cart-step-active">
            <div className="icon-box">
              <i className="iconfont icon-wancheng"></i>
            </div>
            <p>個人資料</p>
          </li>
          <li>
            <div className="line done"></div>
          </li>
          <li className="cart-step-active">
            <div className="icon-box">
              <i className="iconfont icon-wuliu"></i>
            </div>
            <p>配送方式</p>
          </li>
          <li>
            <div className="line"></div>
          </li>
          <li>
            <div className="icon-box">
              <i className="iconfont icon-card"></i>
            </div>
            <p>付款方式</p>
          </li>
          <li>
            <div className="line"></div>
          </li>
          <li>
            <div className="icon-box">
              <i className="iconfont icon-gift"></i>
            </div>
            <p>訂單完成</p>
          </li>
        </ul>
        {/* 選擇配送方式表單 */}
        <form className="delivery-form">
          <div>請選擇配送方式:</div>
          <input
            type="radio"
            name="deliveryId"
            id="deliveryId1"
            value="黑貓宅急便"
            required
            checked
          />
          <label htmlFor="deliveryId1"> 黑貓宅急便</label>
          <div className="line">
            <div></div>
          </div>
          <input
            type="radio"
            name="deliveryId"
            id="deliveryId2"
            value="新竹物流"
            required
          />
          <label htmlFor="deliveryId2"> 新竹物流</label>
          <div>
            <button type="button"><Link to="/CheckoutPayment">下一步</Link></button>
          </div>
        </form>
      </div>
    </>
  )
}
export default withRouter(CartDelivery)
