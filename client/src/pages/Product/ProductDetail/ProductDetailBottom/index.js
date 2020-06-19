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
//antd
import { Radio } from 'antd'
function ProductDetailBottom() {
  return (
    <>
        <div className="Yy_commission">
            <button>特點</button>
            <button>規格</button>
            <button>評論</button>
        </div>
    </>
  )
}
export default withRouter( ProductDetailBottom)