// 函式元件
// william - 20200706 - 全部重寫
import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

//antd
import { message } from 'antd'

function MyCart(props) {
  const {
    mycart,
    setMycart,
    mycartDisplay,
    setMycartDisplay,
    orderTotal,
    setOrderTotal,
  } = props.allprops
  const CartInner = JSON.parse(localStorage.getItem('cart')) || ''

  // william - 20200705 - 數量加減
  const changeQuantity = (id, amount, PQty) => {
    const mycartdata = [...mycart]
    mycartdata.forEach((el) => {
      if (el.id === id) {
        el.amount = amount
        // 購物車商品數量不得小於1
        if (el.amount < 1) {
          el.amount = 1
          alert('el.amount < 1')
          message.warning('數量不能小於1')
        }
        // 購物車商品數量不得大於庫存
        if (el.amount > PQty) {
          el.amount = PQty
          message.warning(`商品數量:${PQty}`)
        }
      }
    })

    localStorage.setItem('cart', JSON.stringify(mycartdata))
    setMycart(mycartdata)
  }

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

  // useEffect(() => {
  //   console.log('mycart', mycart)
  // }, [mycart])

  return (
    <>
      <div className="cart-crumb">
        <div></div>
        <Link to="/">首頁</Link> / <Link to="/MyCart">購物車</Link>
      </div>

      <div className="cart-container">
        {mycart.length > 0 ? (
          <>
            <ul className="cart-table">
              <li>
                <ul className="wi-ul">
                  <li>刪除</li>
                  <li>圖片</li>
                  <li>品名</li>
                  <li>單價</li>
                  <li>數量</li>
                  <li className="li-prices">小計</li>
                  <li>功能</li>
                </ul>
              </li>
              <li>
                {mycart.map((data, index) => {
                  return (
                    <ul key={index}>
                      <li
                        id={data.itemId}
                        data-id={index}
                        onClick={() => {
                          const cartList = [...mycart]
                          cartList.splice(index, 1)
                          setMycart(cartList)
                          localStorage.setItem('cart', JSON.stringify(cartList))
                        }}
                      >
                        <i className="iconfont icon-error"></i>
                      </li>
                      <li>
                        <img src={`/items_img/${data.itemImg}`} alt="icon" />
                      </li>
                      <li>{data.itemName}</li>
                      <li>{data.itemPrice}</li>

                      {/* 數量加減 - williams */}
                      <li>
                        <div className="willCart">
                          <button
                            className="DetailBtnEdit"
                            onClick={() => {
                              data.amount--
                              changeQuantity(data.id, data.amount, data.itemQty)
                            }}
                          >
                            <i className="iconfont icon-reduce_1"></i>
                          </button>
                          <span>{data.amount}</span>
                          <button
                            className="DetailBtnAdd"
                            onClick={() => {
                              data.amount++
                              changeQuantity(data.id, data.amount, data.itemQty)
                            }}
                          >
                            <i className="iconfont icon-add_1"></i>
                          </button>
                        </div>
                      </li>

                      <li className="li-prices">
                        {data.itemPrice * data.amount}
                      </li>
                      <li className="li-function">
                        <button type="button" className="btn_booking btn_width">
                          <i className="iconfont icon-like mobileIcon"></i>
                        </button>
                        <button type="button" className="btn_wish btn_width">
                          <i className="iconfont icon-binding"></i>
                        </button>
                      </li>
                    </ul>
                  )
                })}
              </li>
              <li className="cart-footer">
                <input
                  className="codeInput"
                  type="text"
                  placeholder="請輸入優惠碼"
                />
                <button className="codebutton" type="button">
                  送出
                </button>
              </li>
              <li className="cart-footer wi-num">
                <h2>商品總計: </h2>
                {mycart.length > 0 ? (
                  <span> $ {sum(mycart)}</span>
                ) : (
                  <span>0</span>
                )}
              </li>
              <li className="cart-footer wi-footer">
                <button
                  className="wi-footer-cart"
                  type="button"
                  onClick={() => {
                    localStorage.removeItem('cart')
                    props.history.go(0)
                  }}
                >
                  清空購物車
                </button>
                <button
                  className="wi-footer-set"
                  type="button"
                  onClick={setOrderTotal(sum(mycart))}
                >
                  <Link to="/ConfirmOrder">去結帳</Link>
                </button>
              </li>
            </ul>
          </>
        ) : (
          <ul className="cart-empty">
            <li>目前購物車是空的!</li>
            <li className="border-top">
              <button type="button">
                <Link to="/YyProduct">去商店</Link>
              </button>
            </li>
          </ul>
        )}
      </div>
    </>
  )
}
export default withRouter(MyCart)
