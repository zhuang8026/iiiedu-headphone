import React, { useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

function CartCrumb(props) {
  return (
    <>
      <div className="cart-crumb">
        <div></div>
        <Link to="/">首頁</Link> / <Link to="/YfangCart">購物車</Link>
      </div>
    </>
  )
}
export default withRouter(CartCrumb)
