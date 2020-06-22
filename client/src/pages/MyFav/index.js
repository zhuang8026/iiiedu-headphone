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



// components

import { Pagination } from 'antd';


// 測試圖片
import visa from '../../assets/img/IG_4.png';



function MyFav(props) {
  return (
    <Router>
      <Fragment>
        <main>
          <div className="MyFav_container">
            <div className="MyFav_select">
              <div className="MyFav_Crumb">
              {/* 麵包屑 */}
              <a href="../">首頁</a> / <a href="#">我的最愛</a>
              </div>
              <div>
                <select >
                  <option>按價格排序-由低到高</option>
                  <option>按價格排序-由高到低</option>
                </select>
              </div>
            </div>
          
            <div className="MyFav_list">
              <ul className="MyFav_pwa_r_inner">
                  <li>
                      <div className="MyFav_card">
                          <div className="MyFav_item">
                            <span className="iconfont icon-error"></span>
                            <img src={visa}/>
                            <h3>GS2000e</h3>
                            <h3>GRADO</h3>
                          </div>
                      </div>
                      <div><h4>$8,700</h4></div>
                      <div className="MyFav_card_button">
                          <button className="MyFav_update MyFav_btn_style">前往細節頁</button>
                          <button className="MyFav_del MyFav_btn_style">加入購物車</button>
                      </div>
                  </li>
          
                </ul>
                <div className="page"><Pagination defaultCurrent={1} total={50} /></div>
            </div>
          </div>
        </main>
      </Fragment>
    </Router>
  )
}
export default withRouter(MyFav)
