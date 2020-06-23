import React from 'react'
import { withRouter } from 'react-router-dom'

//import 
import SellerTodoItem from '../SellerTodoItem'
// import Dashboard from '../DashBoard'

function IndexMain(props) {
  return (
    <>
      <div className="seller-main">
        <SellerTodoItem />
        <div className="seller-marketing">
          <h2>我的行銷活動</h2>
          <p>部落格文章管理</p>
          <div className="d-flex">
            <div className="seller-graph"></div>
            {/* <Dashboard /> */}
            <div className="seller-button">
              <div className="seller-card">
                <div className="d-flex">
                  <img
                    className="icon-size"
                    src="./asset/img/index/follower.png"
                  />
                  <p>追蹤人數</p>
                </div>
                <div className="text-align-center">+45</div>
              </div>

              <div className="seller-card">
                <div className="d-flex">
                  <img
                    className="icon-size"
                    src="./asset/img/index/blog-revenue.png"
                  />
                  <p>收益</p>
                </div>
                <div className="text-align-center">$16,888</div>
              </div>
            </div>
          </div>
        </div>

        <div className="seller-performance">
          <h2>我的表現</h2>
          <p>您的賣場表現總覽</p>
          <div className="seller-toggle">
            <div>訂單表現</div>
            <div>寄送方式</div>
            <div>顧客滿意度</div>
            <div>違反上架規範</div>
          </div>
          <table className="seller-table">
            <thead>
              <tr>
                <th>指標</th>
                <th>我的賣場</th>
                <th>目標</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>訂單未完成率</td>
                <td>-</td>
                <td>&lt;10%</td>
              </tr>
              <tr>
                <td>賣家取消率</td>
                <td>-</td>
                <td>&lt;5%</td>
              </tr>
              <tr>
                <td>退貨-退款率</td>
                <td>-</td>
                <td>&lt;5%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default withRouter(IndexMain)
