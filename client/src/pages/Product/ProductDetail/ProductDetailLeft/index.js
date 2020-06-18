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
// scss
import '../../../../assets/scss/Product_Detail.scss'
import WHH8101 from '../../../../assets/items_img/WH-H810-01.png'
function ProductDetailLeft() {
  return (
    <>
      <div className="YyDetailleft">
        <div className="DetailImg">
          <img src={WHH8101} />
        </div>
        <div className="DetailSmallPic">
          <img src={WHH8101} />
          <img src={WHH8101} />
          <img src={WHH8101} />
          <img src={WHH8101} />
        </div>
      </div>
    </>
  )
}
export default withRouter(ProductDetailLeft)
