import React, { Fragment } from 'react'
import { withRouter, BrowserRouter as Router } from 'react-router-dom'

//import components
import MyNavBar from '../../../components/Navbar'
import MyMenu from '../../../components/NavbarMenu'
import MyFooter from '../../../components/Footer'
import LeftNav from '../../Sellers/Leftnav'

//import css
import '../../../assets/css/AliceSeller/refund.css'

//import image
import searchImg from '../../../assets/img/seller/my-sale/search.svg'

function Refund(props) {
  return (
    <Router>
      <Fragment>
        <header>
          <MyNavBar />
          <MyMenu />
        </header>

        <div>
          <div className="h-100"></div>
          <span className="breadcrumb">
            首頁 &nbsp;/ 訂單管理/ &nbsp;我的訂單
          </span>
          <div className="seller-container">
            <LeftNav />
            <div className="seller-main">
              <div className="seller-refund">
                <div className="w-90">
                  <div class="seller-toggle">
                    <div>全部</div>
                    <div>尚未付款</div>
                    <div>待出貨</div>
                    <div>運送中</div>
                    <div>已完成</div>
                    <div>已取消</div>
                    <div>退貨/退款</div>
                  </div>
                  <htmlForm action="" method="post">
                    <div class="seller-wrapper">
                      <div class="seller-search">
                        <input
                          class="seller-search-bar"
                          type="text"
                          name="search"
                          placeholder="搜尋訂單"
                        />
                        <img
                          class="seller-search-img icon-size"
                          src={searchImg}
                          alt=""
                        />
                      </div>
                      <div class="order-createdate">
                        <label>訂單成立時間</label>
                        <input type="date" id="startdate" />
                        &nbsp;-&nbsp;
                        <input type="date" id="enddate" />
                        <button class="seller-exportbtn">匯出</button>
                      </div>
                    </div>
                  </htmlForm>
                  <div class="seller-toggle-down">
                    <div>全部</div>
                    <div>待處理</div>
                    <div>已處理</div>
                  </div>
                  <div class="seller-wrapper">
                    <h1>訂單</h1>
                    <div class="refund-createdate">
                      <label for="createdate">訂單類型</label>
                      <select id="orderType">
                        <option value="">全部訂單</option>
                      </select>
                      <label for="">排序</label>
                      <select type="date" id="orderOrder">
                        <option value="">訂單確認時間</option>
                      </select>
                      <button id="sendOrderBtn">出貨</button>
                    </div>
                  </div>
                  <table>
                    <thead>
                      <tr>
                        <th>商品</th>
                        <th>退款金額</th>
                        <th>狀態 出貨時間</th>
                        <th>調整</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MyFooter />
      </Fragment>
    </Router>
  )
}

export default withRouter(Refund)
