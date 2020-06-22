// 函式元件
import React, { Fragment, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
  NavLink,
  withRouter,
} from 'react-router-dom'

//cart
import MyCartEmpty from './MyCartEmpty' //購物車空的時候
import MyCart from './MyCart' //購物車商品清單
import CheckoutInfo from './CheckoutInfo' //訂單個人資料填寫
import CheckoutDelivery from './CheckoutDelivery' //選擇配送方式
import CheckoutPayment from './CheckoutPayment' //選擇付款方式
import OrderComplete from './OrderComplete' //購買完成頁

function YfangCart(props) {
  return (
    <Route>
      <>
        <main>          
          <MyCart />
        </main>
      </>
    </Route>
  )
}
export default withRouter(YfangCart)
