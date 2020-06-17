import React, { Fragment } from 'react'
import { withRouter, BrowserRouter as Router } from 'react-router-dom'

//import components
import MyNavBar from '../../../components/Navbar'
import MyMenu from '../../../components/NavbarMenu'
import MyFooter from '../../../components/Footer'
import LeftNav from '../Leftnav'

//import css
import '../../../assets/css/AliceSeller/seller-product.css'
//import image
import searchImg from '../../../assets/img/seller/my-sale/search.svg'

function SellerProduct(props) {
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
              <div className="seller-myproduct">
                <div className="w-90">
                  <div className="seller-toggle">
                    <div>全部</div>
                    <div>架上商品</div>
                    <div>已售完</div>
                    <div>未上架</div>
                  </div>
                  <htmlForm className="seller-form" action="" method="post">
                    <div className="product-wrapper">
                      <div className="seller-search">
                        <input
                          className="seller-search-bar"
                          type="text"
                          name="search"
                          placeholder="搜尋訂單"
                          alt=""
                        />
                        <img
                          className="seller-search-img icon-size"
                          src={searchImg}
                          alt=""
                        />
                      </div>
                      <div className="product-createdate">
                        <label for="createdate">訂單成立時間</label>
                        <input type="date" id="startdate" />
                        &nbsp;-&nbsp;
                        <input type="date" id="enddate" />
                        <button className="seller-exportbtn">匯出</button>
                      </div>
                      <div className="seller-quantity">
                        <label>商品數量</label>
                        <input type="text" id="minquan" placeholder="請輸入" />
                        &nbsp;-&nbsp;
                        <input type="text" id="maxquan" placeholder="請輸入" />
                      </div>
                      <div className="seller-soldproduct">
                        <label>已售出</label>
                        <input
                          type="text"
                          id="soldminquan"
                          placeholder="請輸入"
                        />
                        &nbsp;-&nbsp;
                        <input
                          type="text"
                          id="soldmaxquan"
                          placeholder="請輸入"
                        />
                      </div>
                    </div>
                    <div className="seller-btnset">
                      <button className="seller-resetbtn">重置</button>
                      <button className="seller-searchbtn">搜尋</button>
                    </div>
                  </htmlForm>
                  <div className="product-wrapper">
                    <h1>0項商品</h1>
                    <div className="seller-btnset">
                      <button className="seller-addproduct">新增商品</button>
                      <button className="seller-addtool">批次工具</button>
                    </div>
                  </div>
                  <div className="product-table">
                    <table>
                      <thead>
                        <tr>
                          <th>
                            <input type="checkbox" name="selectAll" id="" />
                          </th>
                          <th>商品名稱</th>
                          <th>商品選項貨號</th>
                          <th>規格</th>
                          <th>價格</th>
                          <th>商品數量</th>
                          <th>已售出</th>
                          <th>操作</th>
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
        </div>
        <MyFooter />
      </Fragment>
    </Router>
  )
}

export default withRouter(SellerProduct)
