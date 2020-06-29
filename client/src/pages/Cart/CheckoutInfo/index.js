// 函式元件
import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

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

  // const { userdata, setUserdata } = props
  // const { orderName, setOrderName } = props
  // const { orderAddress, setOrderAddress } = props
  // const { orderTel, setOrderTel } = props
  // const { orderRemarks, setOrderRemarks } = props

  // const [orderName, setName] = useState('')
  // const [address, setAddress] = useState('')
  // const [tel, setTel] = useState('')
  // const [remarks, setRemarks] = useState('')
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
                  value={orderName?orderName:userdata.name}
                  // defaultValue={userdata.name}
                  onChange={(event) => {
                    const v = event.target.value
                    setOrderName(v)
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
                  value={orderAddress?orderAddress:userdata.address}
                  // defaultValue={userdata.address}
                  onChange={(event) => {
                    const v = event.target.value
                    setOrderAddress(v)
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
                  maxLength="10"
                  value={orderTel?orderTel:userdata.phoneNumber}
                  // defaultValue={userdata.phoneNumber}
                  onChange={(event) => {
                    const v = event.target.value
                    setOrderTel(v)
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
                    const v = event.target.value
                    setOrderRemarks(v)
                  }}
                ></textarea>
              </div>
            </div>
          </div>
          <div>
            {/* <div>除錯用姓名:{orderName}</div>
            <div>除錯用地址:{orderAddress}</div>
            <div>除錯用電話:{orderTel}</div>
            <div>除錯用備註:{orderRemarks}</div> */}
            <button
              type="button"
              // onClick={() => {
              //   updateCheckoutInfoToLocalStorage({
              //     orderName: `${orderName ? orderName : userdata.name}`,
              //     orderAddress: `${
              //       orderAddress ? orderAddress : userdata.address
              //     }`,
              //     orderTel: `${orderTel ? orderTel : userdata.phoneNumber}`,
              //     orderRemarks: `${orderRemarks}`,
              //   })
              // }}
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
