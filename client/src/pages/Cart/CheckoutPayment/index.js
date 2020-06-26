// 函式元件
import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'
import creditCardImg from '../../../assets/img/cart/16e924c936e000006ebf.png'

function CartPayment(props) {
  const { userdata, setUserdata } = props
  const [payment, setPayment] = useState('1')
  const [name, setName] = useState('')

  const updateCheckoutPaymentToLocalStorage = (value) => {
    const currentCheckoutPayment =
      JSON.parse(localStorage.getItem('CheckoutPayment')) || []
    const newCheckoutPayment = [...currentCheckoutPayment, value]
    localStorage.setItem('CheckoutInfo', JSON.stringify(newCheckoutPayment))
  }
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
              <i className="iconfont icon-wancheng"></i>
            </div>
            <p>配送方式</p>
          </li>
          <li>
            <div className="line done"></div>
          </li>
          <li className="cart-step-active">
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
        <form className="payment-form">
          <div>請選擇付款方式:</div>
          <select
            value={payment}
            onChange={(event) => {
              // const v = e.target.selectedIndex
              const v = event.target.value
              setPayment(v)
            }}
          >
            <option value="1">貨到付款</option>
            <option value="2">信用卡</option>
          </select>
          {/* <div >除錯用:{payment}</div> */}
          {/* <div className="line"></div> */}
          {/* <div>信用卡資料:</div> */}
          <div className="payment-form-flex">
            <div>
              <img src={creditCardImg} alt="" />
            </div>
            <div>
              <ul>
                <li>信用卡資料:</li>
                <li>
                  <label htmlFor="creditCardNum">卡號</label>
                </li>
                <li>
                  <input
                    type="text"
                    name="creditCardNum"
                    id="creditCardNum"
                    defaultValue={userdata.card}
                    maxlength="18"
                  />
                </li>
                <li>
                  <label htmlFor="Name">姓名</label>
                </li>
                <li>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    defaultValue={userdata.name}
                    onChange={(event) => {
                      setName(event.target.value)
                    }}
                  />
                </li>
                <li>
                  <label>有效時間</label>
                </li>
                <li>
                  <input
                    type="text"
                    name="cardMonth"
                    id="cardMonth"
                    maxlength="2"
                  />
                  <label htmlFor="cardMonth">月</label>
                  <input
                    type="text"
                    name="cardYear"
                    id="cardYearr"
                    maxlength="2"
                  />
                  <label htmlFor="cardYear">年</label>
                </li>
                <li>
                  <label htmlFor="cardPin">背面末三碼</label>
                </li>
                <li>
                  <input
                    type="text"
                    name="cardPin"
                    id="cardPin"
                    maxlength="3"
                  />
                </li>
                <li></li>
              </ul>
            </div>
          </div>
          <div>
            <button type="button">
              <Link to="/OrderComplete">下一步</Link>
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
export default withRouter(CartPayment)
