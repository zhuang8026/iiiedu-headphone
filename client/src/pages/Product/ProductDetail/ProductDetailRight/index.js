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
function ProductDetailRight() {
  return (
    <>
      <div className="YyDetailRight">
        <div className="YyContent">
          <div className="YyName">GAMEONE</div>
          <p className="Yyitemprice">$6900</p>
          <p className="Yycontentin">
            CX 350BT 無線耳機是旅途中提供絕佳環繞音效的理想音樂夥伴。 透過藍牙
            5.0、AAC 和 AptX™ Low Latency 低延遲等最新藍牙技術的支援， CX 350BT
            提供您絕佳聆聽體驗。 Sennheiser Smart Control
            app應用程式中的提供EQ自訂功能， 同時也提供軟體更新和 podcast 模式。.
          </p>
        </div>
      </div>
    </>
  )
}
export default withRouter(ProductDetailRight)
