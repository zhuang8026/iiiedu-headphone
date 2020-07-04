// 函式元件
import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
  NavLink,
  withRouter,
} from 'react-router-dom'

function MyCart(props) {
  const {
    mycart,
    setMycart,
    mycartDisplay,
    setMycartDisplay,
    orderTotal,
    setOrderTotal,
  } = props.allprops
  const [dataLoading, setDataLoading] = useState(false)
  // 模擬componentDidMount
  useEffect(() => {
    // 開啟指示(spinner)
    setDataLoading(true)

    // 得到值(字串) !!重要
    const initCart = localStorage.getItem('cart') || '[]'
    setMycart(JSON.parse(initCart))

    // 1000ms(一秒後)關閉指示(spinner)
    setTimeout(() => {
      setDataLoading(false)
    }, 1000)
  }, [])

  // 模擬componentDidUpdate
  useEffect(() => {
    //console.log(mycart)
    let newMycartDisplay = []

    //console.log('mycartDisplay', mycartDisplay)
    console.log('mycart', mycart)

    //尋找mycartDisplay
    for (let i = 0; i < mycart.length; i++) {
      //尋找mycartDisplay中有沒有此mycart[i].id
      //有找到會返回陣列成員的索引值
      //沒找到會返回-1
      const index = newMycartDisplay.findIndex(
        (value) => value.id === mycart[i].id
      )

      //有的話就數量+1
      if (index !== -1) {
        //console.log('findindex', index)
        //每次只有加1個數量
        //newMycartDisplay[index].amount++
        //假設是加數量的
        newMycartDisplay[index].amount += mycart[i].amount
      } else {
        //沒有的話就把項目加入，數量為1
        const newItem = { ...mycart[i] }
        newMycartDisplay = [...newMycartDisplay, newItem]
      }
    }

    console.log('newMycartDisplay', newMycartDisplay)
    setMycartDisplay(newMycartDisplay)
  }, [mycart])

  // 計算總價用的函式
  function sum(items) {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].itemPrice
    }
    return total
  }

  const spinner = <></>
  const display = (
    <>
      {mycartDisplay.length === 0 && (
        <ul className="cart-table">
          <li>目前購物車是空的!</li>
          <li className="cart-footer">
            <button type="button">
              <Link to="/YyProduct">去商店</Link>
            </button>
          </li>
        </ul>
      )}
      {mycartDisplay.length !== 0 && (
        <ul className="cart-table">
          <li>
            <ul>
              <li></li>
              <li>圖片</li>
              <li>品名</li>
              <li>單價</li>
              <li>數量</li>
              <li className="li-prices">小計</li>
              <li></li>
            </ul>
          </li>
          <li>
            {mycartDisplay.map((value, index) => {
              return (
                <ul key={value.id}>
                  <li>
                    <i className="iconfont icon-error"></i>
                  </li>
                  <li>
                    <img src={`/items_img/${value.itemImg}`} alt="icon" />
                  </li>
                  <li>{value.itemName}</li>
                  <li>{value.itemPrice}</li>
                  <li>{value.amount}</li>
                  <li className="li-prices">
                    {value.itemPrice * value.amount}
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
            <input type="text" placeholder=" 請輸入優惠碼" />
            <button type="button">去取得優惠卷</button>
          </li>
          <li className="cart-footer">
            <span>總計</span>
            {/* 判斷mycartDisplay是否在初次render的階段 */}
            {mycartDisplay.length > 0 ? <span>{sum(mycartDisplay)}</span> : ''}
          </li>
          <li className="cart-footer">
            <button
              type="button"
              onClick={() => {
                localStorage.removeItem('cart')
                props.history.go(0)
              }}
            >
              清空購物車
            </button>
            <button type="button" onClick={setOrderTotal(sum(mycartDisplay))}>
              <Link to="/ConfirmOrder">去結帳</Link>
            </button>
          </li>
        </ul>
      )}
    </>
  )

  return (
    <>
      <div className="cart-crumb">
        <div></div>
        <Link to="/">首頁</Link> / <Link to="/MyCart">購物車</Link>
      </div>
      <div className="cart-container">{dataLoading ? spinner : display}</div>
    </>
  )
}
export default withRouter(MyCart)
