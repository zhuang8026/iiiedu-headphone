import React, { Fragment } from 'react'
import { withRouter, BrowserRouter as Router } from 'react-router-dom'

//import components
import MyNavBar from '../../../components/Navbar'
import MyMenu from '../../../components/NavbarMenu'
import MyFooter from '../../../components/Footer'
import LeftNav from '../../Sellers/Leftnav'

//import css
// import '../../../assets/css/AliceSeller/order.css'

//import image
import LeftArrow from '../../../assets/img/seller/order/left-arrow.svg'
import RightArrow from '../../../assets/img/seller/order/right-arrow.svg'
import Order1 from '../../../assets/img/seller/order/order1.svg'
import Download from '../../../assets/img/seller/order/download.svg'
import Truck from '../../../assets/img/seller/order/order.svg'

function Order(props) {
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
            <div className="seller-w100-main">
              <div className="seller-card">
                <div className="w-90">
                  <h1>出貨</h1>
                  <p>同時申請、列印多筆訂單的配送標籤!</p>
                  <div class="seller-toggle">
                    <div class="order-order-out">
                      <img
                        class="seller-img-position icon-size"
                        src={Order1}
                        alt=""
                      />
                      <div class="seller-btntxt">待出貨</div>
                    </div>
                    <div class="order-order-doc">
                      <img
                        class="img-position icon-size"
                        src={Download}
                        alt=""
                      />
                      <div class="btntxt">出貨文件</div>
                    </div>
                  </div>
                  <div class="d-flex">
                    <div class="seller-order-list">
                      <div class="d-flex ">
                        <p>依照物流方式篩選訂單: </p>
                        <button class="seller-sendtype">黑貓宅急便</button>
                        <button class="seller-sendtype">7-11</button>
                        <button class="seller-sendtype">全家</button>
                        <button class="seller-sendtype">萊爾富</button>
                      </div>
                      <div class="seller-show-pages">
                        <div class="seller-wrapper">
                          <img
                            class="icon-size seller-left-arrow"
                            src={LeftArrow}
                            alt=""
                          />
                          <div> 1 / 0</div>
                          <img
                            class="icon-size seller-right-arrow"
                            src={RightArrow}
                            alt=""
                          />
                        </div>
                        <button class="seller-page">10 / 每頁</button>
                      </div>
                      <div class="order-createdate">
                        <label for="orderType">訂單類型</label>
                        <select id="order-orderType">
                          <option value="">全部訂單</option>
                        </select>
                        <label for="">排序</label>
                        <select type="date" id="order-orderOrder">
                          <option value="">訂單確認時間</option>
                        </select>
                      </div>
                      <table class="order-seller-table">
                        <thead>
                          <tr>
                            <th>商品</th>
                            <th>買家應付金額</th>
                            <th>付款狀態</th>
                            <th>運送方式</th>
                            <th>出貨狀態</th>
                            <th>調整</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="seller-get-order">
                      <p>批次安排取貨</p>
                      <p>已選取0 張訂單</p>
                      <button class="seller-arrangeorderbutton">
                        <img
                          class="icon-size seller-track"
                          src={Truck}
                          alt=""
                        />
                        <span class="seller-arrangeorderbutton-txt">
                          一次安排取件出貨
                        </span>
                      </button>
                    </div>
                  </div>
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

export default withRouter(Order)
