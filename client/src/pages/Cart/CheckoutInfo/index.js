// 函式元件
import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

function CheckoutInfo(props) {
  const { userdata, setUserdata } = props
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [tel, setTel] = useState('')
  const [remarks, setRemarks] = useState('')
  const updateCheckoutInfoToLocalStorage = (value) => {
    const currentCheckoutInfo =
      JSON.parse(localStorage.getItem('checkoutInfo')) || []
    const newCheckoutInfo = [...currentCheckoutInfo, value]
    localStorage.setItem('checkoutInfo', JSON.stringify(newCheckoutInfo))
  }
  
  useEffect(() => {
    localStorage.removeItem('checkoutInfo')
  }, [])

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
              <i className="iconfont icon-address"></i>
            </div>
            <p>個人資料</p>
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
        <form action="" className="cart-buyerInfo-form">
          <div>
            <div>
              <div>
                <label htmlFor="name">姓名*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  defaultValue={userdata.name}
                  onChange={(event) => {
                    setName(event.target.value)
                  }}
                />
                <div className="error">姓名必填*</div>
              </div>
              <div>
                <label htmlFor="address">地址*</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  defaultValue={userdata.address}
                  onChange={(event) => {
                    setAddress(event.target.value)
                  }}
                />
                <div className="error">地址必填*</div>
              </div>
              <div>
                <label htmlFor="tel">電話*</label>
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  defaultValue={userdata.phoneNumber}
                  onChange={(event) => {
                    setTel(event.target.value)
                  }}
                />
                <div className="error">電話必填*</div>
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
                  onChange={(event) => {
                    setRemarks(event.target.value)
                  }}
                ></textarea>
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                updateCheckoutInfoToLocalStorage({
                  name: `${name ? name : userdata.name}`,
                  address: `${address ? address : userdata.address}`,
                  tel: `${tel ? tel : userdata.phoneNumber}`,
                  remarks: `${remarks}`,
                })
              }}
            >
              <Link to="/CheckoutDelivery">下一步</Link>
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
export default withRouter(CheckoutInfo)
