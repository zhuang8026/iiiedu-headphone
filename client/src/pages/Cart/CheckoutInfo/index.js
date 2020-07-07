// 函式元件
import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

//antd
import { message } from 'antd'

function CheckoutInfo(props) {
  const {
    userdata,
    setUserdata,
    orderName,
    setOrderName,
    orderAddress,
    setOrderAddress,
    orderTel,
    setOrderTel,
    orderRemarks,
    setOrderRemarks,
  } = props.allprops

  // useEffect(() => {
  // }, [])

  useEffect(() => {
    setOrderName(userdata.name)
    setOrderAddress(userdata.address)
    setOrderTel(userdata.phoneNumber)
  }, [userdata])

  return (
    <>
      <div className="cart-crumb">
        <div></div>
        <Link to="/">首頁</Link> / <Link to="/MyCart">返回 購物車</Link>
      </div>
      <div className="cart-container">
        {/* 購物車步驟圖 */}
        <ul className="cart-step-ul">
          <li className="cart-step-active">
            <div className="icon-box">
              <i className="iconfont icon-address"></i>
            </div>
            <p>配送資料</p>
          </li>
          <li>
            <div className="line"></div>
          </li>
          <li>
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
        {/* 購買個人資訊填寫 */}
        <div action="" className="cart-buyerInfo-form">
          <div>
            <div>
              <div>
                <label htmlFor="name">姓名*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={orderName}
                  onChange={(event) => {
                    const v = event.target.value
                    setOrderName(v)
                  }}
                  onBlur={(event) => {
                    const v = event.target.value
                    setOrderName(v)
                  }}
                />
                {orderName ? (
                  <></>
                ) : (
                  <div className="error">必填*</div>
                )}
              </div>
              <div>
                <label htmlFor="address">地址*</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  // value={orderAddress ? orderAddress : userdata.address}
                  value={orderAddress}
                  onChange={(event) => {
                    const v = event.target.value
                    setOrderAddress(v)
                  }}
                  onBlur={(event) => {
                    const v = event.target.value
                    setOrderAddress(v)
                  }}
                />
                {orderAddress ? (
                  <></>
                ) : (
                  <div className="error">必填*</div>
                )}
              </div>
              <div>
                <label htmlFor="tel">電話*</label>
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  pattern="[0-9]{2}[0-9]{8}"
                  maxLength="10"
                  value={orderTel}
                  onChange={(event) => {
                    const v = event.target.value
                    setOrderTel(v)
                  }}
                  onBlur={(event) => {
                    const v = event.target.value
                    setOrderTel(v)
                  }}
                />
                {orderTel ? (
                  <></>
                ) : (
                  <div className="error">必填*</div>
                )}
              </div>
            </div>
            <div className="buyer-detail">
              <div>
                <label htmlFor="remark">備註</label>
                <textarea
                  name="remark"
                  id="remark"
                  cols="30"
                  rows="10"
                  value={orderRemarks}
                  onChange={(event) => {
                    const v = event.target.value
                    setOrderRemarks(v)
                  }}
                  onBlur={(event) => {
                    const v = event.target.value
                    setOrderRemarks(v)
                  }}
                ></textarea>
              </div>
            </div>
          </div>
          <div>
            <button type="button">
              <Link to="/ConfirmOrder">上一頁</Link>
            </button>
            {orderName && orderAddress && orderTel ? (
              <button type="button">
                <Link to="/CheckoutDelivery">填寫配送方式</Link>
              </button>
            ) : (
              <button
                type="button"
                className="btn_warning"
                onClick={() => {
                  message.warning('尚有資料必填!!!')
                }}
              >
                尚有資料必填!!!
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
export default withRouter(CheckoutInfo)
