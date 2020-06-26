// 函式元件
import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'

function CartDone(props) {
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
              <i className="iconfont icon-wancheng"></i>
            </div>
            <p>配送方式</p>
          </li>
          <li>
            <div className="line done"></div>
          </li>
          <li className="cart-step-active">
            <div className="icon-box">
              <i className="iconfont icon-wancheng"></i>
            </div>
            <p>付款方式</p>
          </li>
          <li>
            <div className="line done"></div>
          </li>
          <li className="cart-step-active">
            <div className="icon-box">
              <i className="iconfont icon-gift"></i>
            </div>
            <p>訂單完成</p>
          </li>
        </ul>
        {/* 購買完成顯示 */}
        <table className="cartDone-table">
          <tbody>
            <tr>
              <td>謝謝。您的訂單已收到。</td>
              <td></td>
            </tr>
            <tr>
              <td>訂單號:</td>
              <td>9527</td>
            </tr>
            <tr>
              <td>日期：</td>
              <td>2020年7月10日</td>
            </tr>
            <tr>
              <td>付款方式：</td>
              <td>信用卡</td>
            </tr>
            <tr>
              <td>合計:</td>
              <td>$ 5200</td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td>
                <button type="button"><Link to="/">回首頁</Link></button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  )
}
export default withRouter(CartDone)
