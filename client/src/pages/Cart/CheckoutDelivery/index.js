// 函式元件
import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'

//antd
import { message } from 'antd'

import HDHCT from '../../../assets/img/cart/新竹物流.png'
import HDTPE from '../../../assets/img/cart/台灣宅配通.jpg'
import HDTCat from '../../../assets/img/cart/黑貓宅急便.jpg'
import HDKerry from '../../../assets/img/cart/嘉里大榮物流公司.png'

import STS711 from '../../../assets/img/cart/711.png' //7-11圖
import STSFamilyMart from '../../../assets/img/cart/FamilyMart.jpg' //全家圖
import STSHiLife from '../../../assets/img/cart/Hi-Life.png' //萊爾富圖
import STSOK from '../../../assets/img/cart/OKmart.jpg' //OK圖

function CheckoutDelivery(props) {
  // const [orderDelivery, setOrderDelivery] = useState('1')
  const {
    userdata,
    setUserdata,
    orderDelivery,
    setOrderDelivery,
  } = props.allprops
  const [deliveryHD, setDeliveryHD] = useState('')
  const [deliverySTS, setDeliverySTS] = useState('')

  return (
    <>
      <div className="cart-crumb">
        <div></div>
        <Link to="/">首頁</Link> / <Link to="/MyCart">返回 購物車</Link>
      </div>
      <div className="cart-container">
        {/* 購物車步驟圖 */}
        <ul className="cart-step-ul">
          <li className="cart-step-active">
            <div className="icon-box">
              <i className="iconfont icon-wancheng"></i>
            </div>
            <p>配送資料</p>
          </li>
          <li>
            <div className="line done"></div>
          </li>
          <li className="cart-step-active">
            <div className="icon-box">
              <i className="iconfont icon-wuliu"></i>
            </div>
            <p>配送方式</p>
          </li>
          <li>
            <div className="line"></div>
          </li>
          <li>
            <div className="icon-box">
              <i className="iconfont icon-card"></i>
            </div>
            <p>付款方式</p>
          </li>
          <li>
            <div className="line"></div>
          </li>
          <li>
            <div className="icon-box">
              <i className="iconfont icon-gift"></i>
            </div>
            <p>訂單完成</p>
          </li>
        </ul>
        {/* 選擇配送方式表單 */}
        <div className="delivery-form">
          <div>選擇配送方式:</div>
          <select
            className="delivery"
            // defaultValue="1"
            value={orderDelivery}
            onChange={(event) => {
              // const v = e.target.selectedIndex
              const v = event.target.value
              setOrderDelivery(v)
            }}
          >
            <option value="1">宅配</option>
            <option value="2">店到店</option>
          </select>
          {/* 選擇性顯示區塊  大於等於3個選項時 */}
          {orderDelivery === '1' && (
            <>
              <ul>
                {/* <li>
                  <h1>宅配需知</h1>
                </li> */}
                <li>
                  <label htmlFor="HCT">
                    <input
                      type="radio"
                      name="HD"
                      id="HCT"
                      value="HCT"
                      onClick={(event) => {
                        const v = event.target.value
                        setDeliveryHD(v)
                      }}
                    />
                    新竹物流
                    <img src={HDHCT} />
                  </label>
                </li>
                <li>
                  <label htmlFor="TPE">
                    <input
                      type="radio"
                      name="HD"
                      id="TPE"
                      value="TPE"
                      onClick={(event) => {
                        const v = event.target.value
                        setDeliveryHD(v)
                      }}
                    />
                    台灣宅配通
                    <img src={HDTPE} />
                  </label>
                </li>
                <li>
                  <label htmlFor="TCat">
                    <input
                      type="radio"
                      name="HD"
                      id="TCat"
                      value="TCat"
                      onClick={(event) => {
                        const v = event.target.value
                        setDeliveryHD(v)
                      }}
                    />
                    黑貓宅急便
                    <img src={HDTCat} />
                  </label>
                </li>
                <li>
                  <label htmlFor="Kerry">
                    <input
                      type="radio"
                      name="HD"
                      id="Kerry"
                      value="Kerry"
                      onClick={(event) => {
                        const v = event.target.value
                        setDeliveryHD(v)
                      }}
                    />
                    嘉里大榮物流公司
                    <img src={HDKerry} />
                  </label>
                </li>

                <li>涵蓋台灣本島及離島，國外暫不提供本項服務</li>
                <li>
                  在消費者訂單下訂後，本公司需3-5個工作天處理方能配送到貴府上，若有不便之處敬請見諒。
                </li>
                <li>如遇颱風或不可抗拒之因素，則依官網公告為準。</li>
                <li>欲退貨請於貨到後7天(含例假日)內提出。</li>
                <li>退回商品須全新且包裝完整，退貨運費由店家負擔。</li>
                <li>
                  因商品、顏色、色差等個人主觀因素要求換貨，來回運費由買方負擔。
                </li>
                <li>退換貨請主動索取、保留退貨單據，避免影響權益。</li>
              </ul>
              <div>
                <button type="button">
                  <Link to="/CheckoutInfo">上一頁</Link>
                </button>
                {deliveryHD ? (
                  <button type="button">
                    <Link to="/CheckoutPayment">填寫付款方式</Link>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn_warning"
                    onClick={() => {
                      message.warning('尚有資料必填!!!')
                    }}
                  >
                    尚有資料必填!!!
                  </button>
                )}
              </div>
            </>
          )}
          {orderDelivery === '2' && (
            <>
              <ul>
                {/* <li>
                  <h1>店到店須知</h1>
                </li> */}
                <li>
                  <label htmlFor="711">
                    <input
                      type="radio"
                      name="shopToShop"
                      id="711"
                      value="711"
                      onClick={(event) => {
                        const v = event.target.value
                        setDeliverySTS(v)
                      }}
                    />
                    7-11
                    <img src={STS711} />
                  </label>
                </li>
                <li>
                  <label htmlFor="FamilyMart">
                    <input
                      type="radio"
                      name="shopToShop"
                      id="FamilyMart"
                      value="FamilyMart"
                      onClick={(event) => {
                        const v = event.target.value
                        setDeliverySTS(v)
                      }}
                    />
                    全家
                    <img src={STSFamilyMart} />
                  </label>
                </li>
                <li>
                  <label htmlFor="HiLife">
                    <input
                      type="radio"
                      name="shopToShop"
                      id="HiLife"
                      value="HiLife"
                      onClick={(event) => {
                        const v = event.target.value
                        setDeliverySTS(v)
                      }}
                    />
                    萊爾富
                    <img src={STSHiLife} />
                  </label>
                </li>
                <li>
                  <label htmlFor="OK">
                    <input
                      type="radio"
                      name="shopToShop"
                      id="OK"
                      value="OK"
                      onClick={(event) => {
                        const v = event.target.value
                        setDeliverySTS(v)
                      }}
                    />
                    OKmart
                    <img src={STSOK} />
                  </label>
                </li>
                <li>涵蓋台灣本島及離島，國外暫不提供本項服務</li>
                <li>本店寄貨，他店取貨</li>
                <li>如遇颱風或不可抗拒之因素，則依官網公告為準。</li>
                <li>欲退貨請於貨到後7天(含例假日)內提出。</li>
                <li>退回商品須全新且包裝完整，退貨運費由店家負擔。</li>
                <li>
                  因商品、顏色、色差等個人主觀因素要求換貨，來回運費由買方負擔。
                </li>
                <li>退換貨請主動索取、保留退貨單據，避免影響權益。</li>
              </ul>
              <div>
                <button type="button">
                  <Link to="/CheckoutInfo">上一頁</Link>
                </button>
                {deliverySTS ? (
                  <button type="button">
                    <Link to="/CheckoutPayment">填寫付款方式</Link>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn_warning"
                    onClick={() => {
                      message.warning('尚有資料必填!!!')
                    }}
                  >
                    尚有資料必填!!!
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
export default withRouter(CheckoutDelivery)
