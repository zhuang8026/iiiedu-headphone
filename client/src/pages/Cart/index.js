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
import CartCrumb from './CartCrumb' //麵包屑
import CartEmpty from './CartEmpty' //購物車空的時候
import CartTable from './CartTable' //購物車商品清單
import CartBuyerInfo from './CartBuyerInfo' //訂單個人資料填寫
import CartDelivery from './CartDelivery' //選擇配送方式
import CartPayment from './CartPayment' //選擇付款方式
import CartDone from './CartDone' //購買完成頁

function YfangCart(props) {
  return (
    <Route>
      <>
        <main>
          <CartCrumb />
          <CartTable />
        </main>
      </>
    </Route>
  )
}
export default withRouter(YfangCart)
