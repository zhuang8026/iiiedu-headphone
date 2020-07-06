// 函式元件
// william - 20200706 - 全部重寫
import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

//antd
import { message } from 'antd'

function ConfirmOrder(props) {
  const {
    userdata,
    mycart,
    setMycart,
    mycartDisplay,
    setMycartDisplay,
    orderTotal,
    setOrderTotal,
  } = props.allprops
  const CartInner = JSON.parse(localStorage.getItem('cart')) || ''
  // 計算總價用的函式
  const sum = (data) => {
    let total = 0
    for (let i = 0; i < data.length; i++) {
      total += data[i].amount * data[i].itemPrice
    }
    return total
  }

  useEffect(() => {
    setMycart(CartInner)
  }, [])

  return (
    <>
      <div className="cart-crumb">
        <div></div>
        <Link to="/">首頁</Link> / <Link to="/ConfirmOrder">確認訂單</Link>
      </div>

      <div className="cart-container">
        <>
          <ul className="cart-table">
            <li>
              <ul className="wi-ul">
                <li>圖片</li>
                <li>品名</li>
                <li>單價</li>
                <li>數量</li>
                <li className="li-prices">小計</li>
              </ul>
            </li>
            <li>
              {mycart.map((data, index) => {
                return (
                  <ul key={index}>
                    <li>
                      <img src={`/items_img/${data.itemImg}`} alt="icon" />
                    </li>
                    <li>{data.itemName}</li>
                    <li>{data.itemPrice}</li>
                    <li>{data.amount}</li>
                    <li className="li-prices">
                      {data.itemPrice * data.amount}
                    </li>
                  </ul>
                )
              })}
            </li>
            <li className="cart-footer wi-num">
              <h2>商品總計: </h2>
              {mycart.length > 0 ? (
                <span> $ {sum(mycart)}</span>
              ) : (
                <span>0</span>
              )}
            </li>
            <li className="cart-footer">
              <button type="button">
                <Link to="/MyCart">上一頁</Link>
              </button>
              {/* {三元判斷是否登入} */}
              {userdata.id ? (
                <button>
                  <Link to="/CheckoutInfo">填寫配送資料</Link>
                </button>
              ) : (
                <button type="button">
                  <Link to="/KMembers/MembersLogin">請登入</Link>
                </button>
              )}
            </li>
          </ul>
        </>
      </div>
    </>
  )
}
export default withRouter(ConfirmOrder)
