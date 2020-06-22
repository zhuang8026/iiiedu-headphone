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
import SRH184001 from '../../../assets/items_img/SRH1840-01.png'

function CartTable(props) {
  return (
    <>
      <div className="cart-crumb">
        <div></div>
        <Link to="/">首頁</Link> / <Link to="/YfangCart">購物車</Link>
      </div>
      <div className="cart-container">
        <table className="cart-table">
          <thead>
            <tr>
              <th>刪除</th>
              <th>商品圖片</th>
              <th>商品名稱</th>
              <th>單價</th>
              <th>數量</th>
              <th>小計</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <i>X</i>
              </td>
              <td>
                <img src={SRH184001} alt="icon" />
              </td>
              <td>ATH-PDG1a</td>
              <td>2,000</td>
              <td className="td-qut">
                <button>-</button>
                <input type="text" name="qut" id="" readOnly />
                <button>+</button>
              </td>
              <td>6,000</td>
              <td className="td-function">
                <button className="btn_wish btn_width">加入願望</button>
                <button className="btn_booking btn_width">加入比較</button>
              </td>
            </tr>
            <tr>
              <td>
                <i>X</i>
              </td>
              <td>
                <img src={SRH184001} alt="icon" />
              </td>
              <td>ATH-PDG1a</td>
              <td>2,000</td>
              <td className="td-qut">
                <button>-</button>
                <input type="text" name="qut" id="" readOnly />
                <button>+</button>
              </td>
              <td>6,000</td>
              <td className="td-function">
                <button className="btn_wish btn_width">加入願望</button>
                <button className="btn_booking btn_width">加入比較</button>
              </td>
            </tr>
            <tr>
              <td>
                <i>X</i>
              </td>
              <td>
                <img src={SRH184001} alt="icon" />
              </td>
              <td>ATH-PDG1a</td>
              <td>2,000</td>
              <td className="td-qut">
                <button>-</button>
                <input type="text" name="qut" id="" readOnly />
                <button>+</button>
              </td>
              <td>6,000</td>
              <td className="td-function">
                <button className="btn_wish btn_width">加入願望</button>
                <button className="btn_booking btn_width">加入比較</button>
              </td>
            </tr>
            <tr>
              <td>
                <i>X</i>
              </td>
              <td>
                <img src={SRH184001} alt="icon" />
              </td>
              <td>ATH-PDG1a</td>
              <td>2,000</td>
              <td className="td-qut">
                <button>-</button>
                <input type="text" name="qut" id="" readOnly />
                <button>+</button>
              </td>
              <td>6,000</td>
              <td className="td-function">
                <button className="btn_wish btn_width">加入願望</button>
                <button className="btn_booking btn_width">加入比較</button>
              </td>
            </tr>
            <tr>
              <td>
                <i>X</i>
              </td>
              <td>
                <img src={SRH184001} alt="icon" />
              </td>
              <td>ATH-PDG1a</td>
              <td>2,000</td>
              <td className="td-qut">
                <button>-</button>
                <input type="text" name="qut" id="" readOnly />
                <button>+</button>
              </td>
              <td>6,000</td>
              <td className="td-function">
                <button className="btn_wish btn_width">加入願望</button>
                <button className="btn_booking btn_width">加入比較</button>
              </td>
            </tr>
            <tr>
              <td>
                <i>X</i>
              </td>
              <td>
                <img src={SRH184001} alt="icon" />
              </td>
              <td>ATH-PDG1a</td>
              <td>2,000</td>
              <td className="td-qut">
                <button>-</button>
                <input type="text" name="qut" id="" readOnly />
                <button>+</button>
              </td>
              <td>6,000</td>
              <td className="td-function">
                <button className="btn_wish btn_width">加入願望</button>
                <button className="btn_booking btn_width">加入比較</button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>
                <input type="text" placeholder=" 請輸入優惠碼" />
                <button>去取得優惠卷</button>
              </td>
            </tr>
            <tr>
              <td>
                <span>總計 </span>
                <span>24,000</span>
              </td>
            </tr>
            <tr>
              <td>
                <button type="button"><Link to="/CheckoutInfo">去結帳</Link></button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  )
}
export default withRouter(CartTable)
