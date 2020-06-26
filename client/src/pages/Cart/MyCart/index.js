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
  const { userdata, setUserdata } = props
  const [mycart, setMycart] = useState([])
  const [mycartDisplay, setMycartDisplay] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  // 模擬componentDidMount
  useEffect(() => {
    // 開啟指示(spinner)
    setDataLoading(true)

    // console.log("localStorage.getItem('cart'):", localStorage.getItem('cart'))

    // 得到值(字串) !!重要
    const initCart = localStorage.getItem('cart') || '[]'
    // 設定到mycart，轉為真正的陣列 !!重要
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
      <table className="cart-table">
        <thead>
          <tr>
            <th>刪除</th>
            <th>商品圖片</th>
            <th>商品名稱</th>
            <th>單價</th>
            <th>數量</th>
            <th>小計</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {mycartDisplay.map((value, index) => {
            return (
              <tr>
                <td>
                  <i>X</i>
                </td>
                <td>
                  <img src={`/items_img/${value.itemImg}`} alt="icon" />
                </td>
                <td>{value.itemName}</td>
                <td>{value.itemPrice}</td>
                <td className="td-qut">{value.amount}</td>
                <td>{value.amount * value.itemPrice}</td>
                <td className="td-function">
                  <button className="btn_wish btn_width">加入願望</button>
                  <button className="btn_booking btn_width">加入比較</button>
                </td>
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <input type="text" placeholder=" 請輸入優惠碼" />
              <button>去取得優惠卷</button>
            </td>
          </tr>
          <tr>
            <td>
              <span>總計</span>
               {/* 判斷mycartDisplay是否在初次render的階段 */}
      {mycartDisplay.length > 0 ? <span>{sum(mycartDisplay)}</span> : ''}
            </td>
          </tr>
          <tr>
            <td>
              <button type="button">
                <Link to="/CheckoutInfo">去結帳</Link>
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
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
