// 函式元件
import React, { useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

function CartCrumb(props) {
  return (
    <>
      <div className="cart-crumb">
        <div></div>
        {/* <Link to="/KMembers">首頁</Link> /<Link to="/YfangCart">購物車</Link> */}
        <a href="../">首頁</a> / <a href="#">購物車</a>
      </div>
    </>
  )
}
export default withRouter(CartCrumb)
