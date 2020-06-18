// 函式元件
import React, { Fragment, useEffect, useState } from 'react'
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

import '../../../../assets/scss/Product_DetailRight.scss'
function ProductDetailRight() {
  const [total, setTotal] = useState(0)
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
        <div className="Yybuttoninner">
          <div className="pro_color">
            <div className="pro_a"></div>
            <div className="pro_b"></div>
            <div className="pro_c"></div>
          </div>
          <div className="Yyinputgroup">
            <div className="Yybtnout">
              <button
                className="Yybtn1"
                onClick={() => {
                  setTotal(total + 1)
                }}
              >
                +
              </button>
              <span>{total}</span>
              <button
                className="Yybtn2"
                onClick={() => {
                  setTotal(total - 1)
                }}
              >
                -
              </button>
            </div>
            <div className="Yycart">
              <button className="addto">加入比較</button>
              <button className="addto">加入最愛</button>
              <button className="addto">加入購物車</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default withRouter(ProductDetailRight)
