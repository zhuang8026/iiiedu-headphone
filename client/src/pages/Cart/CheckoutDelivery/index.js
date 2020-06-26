// 函式元件
import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'

function CheckoutDelivery(props) {
  const [delivery, setDelivery] = useState('1')
  return (
    <>
      <div className="cart-crumb">
        <div></div>
        <Link to="/">首頁</Link> / <Link to="/MyCart">購物車</Link>
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
          <div>選擇配送方式:</div>
          <select
            className="delivery"
            // defaultValue="1"
            value={delivery}
            onChange={(event) => {
              // const v = e.target.selectedIndex
              const v = event.target.value
              setDelivery(v)
            }}
          >           
            <option value="1">黑貓宅急便</option>
            <option value="2">7-11</option>
            <option value="3">全家</option>
            <option value="4">萊爾富</option>
          </select>
           {/* <div>除錯用:{delivery}</div> */}
          <div>
            <button 
            type="button"            
            >
              <Link to="/CheckoutPayment">下一步</Link>
            </button>
          </div>          
        </form>
      </div>
    </>
  )
}
export default withRouter(CheckoutDelivery)
