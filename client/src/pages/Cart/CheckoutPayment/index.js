// 函式元件
import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'
import { message } from 'antd'
function CartPayment(props) {
  const {
    userdata,
    mycartDisplay,
    mycart,
    setMycart,
    orderTotal,
    orderName,
    setOrderName,
    orderAddress,
    orderTel,
    orderRemarks,
    orderDelivery,
    orderPayment,
    setOrderPayment,
    orderCard,
    setOrderCard,
    setcartchange,
  } = props.allprops
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolders, setCardHolders] = useState('')
  const [cardMonth, setCardMonth] = useState('')
  const [cardYear, setCardYear] = useState('')
  const [cardCSC, setCardCSC] = useState('')

  //新增訂單&訂單明細到資料庫
  // const addOrderDetailsAsync = async (addOrderFormData, callback) => {
  const addOrderDetailsAsync = async () => {
    const request = new Request('http://localhost:3009/order/addOrderDetails', {
      method: 'POST',
      body: JSON.stringify({
        // mycartDisplay,
        mycart,
        userId: userdata.id,
        orderRemark: orderRemarks,
        delivery: orderDelivery,
        payment: orderPayment,
        total: orderTotal,
      }),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    // console.log('data:', data)
    // await setOrderId(data.row[0][0].orderId)
  }

  //Submit
  const handleSubmit = async (event) => {
    // const addOrderFormData = new FormData()
    // addOrderFormData.append('userId', userdata.id)
    // addOrderFormData.append('total', orderTotal)
    // addOrderFormData.append('orderRemark', orderRemarks)
    // addOrderFormData.append('delivery', orderDelivery)
    // addOrderFormData.append('payment', orderPayment)

    await addOrderDetailsAsync()

    // 移除值 移除localStorage的購物車
    let cartdata = localStorage.removeItem('cart')
    setcartchange(cartdata)
  }

  useEffect(() => {
    // setOrderName(userdata.name)
    setCardNumber(userdata.card)
    setCardHolders(userdata.name)
  }, [userdata])

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
              <i className="iconfont icon-wancheng"></i>
            </div>
            <p>配送方式</p>
          </li>
          <li>
            <div className="line done"></div>
          </li>
          <li className="cart-step-active">
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
        <div className="payment-form">
          <div>請選擇付款方式:</div>
          <select
            value={orderPayment}
            onChange={(event) => {
              // const v = e.target.selectedIndex
              const v = event.target.value
              setOrderPayment(v)
            }}
          >
            <option value="1">貨到付款</option>
            <option value="2">ATM付款</option>
            <option value="3">信用卡付款</option>
          </select>

          {/* 選擇性顯示區塊  大於等於3個選項時 */}
          {orderPayment === '1' && (
            <>
              <ul>
                <li>
                  <h1>貨到付款服務說明</h1>
                </li>
                <li>涵蓋台灣本島及離島，國外暫不提供本項服務</li>
                <li>
                  運送商品須妥善包裝完整密封，並於外箱上黏貼透明袋，妥善摺疊。
                </li>
                <li>
                  重量：國內快捷每件限重20公斤，外島之澎湖、金門亦同，惟馬祖限重仍為5公斤。
                </li>

                <li>
                  宅配人員將商品送達時，宅配人會與您電話連絡,屆時支付現金給宅急便人員即可。
                </li>
                <li></li>
              </ul>
              <div>
                <button type="button">
                  <Link to="/CheckoutDelivery">上一頁</Link>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    handleSubmit()
                  }}
                >
                  <Link to="/OrderComplete">確定結帳</Link>
                </button>
              </div>
            </>
          )}
          {orderPayment === '2' && (
            <>
              <ul>
                <li>
                  <h1>自動提款機(ATM)轉帳付款的流程</h1>
                </li>
                <li>
                  若您選擇使用ATM自動提款機轉帳，則系統會依據您線上申請的訂單自動核發一組虛擬網路帳號，並且自動偵測是否已收到該虛擬帳號的帳款，您無須傳真收據，收到您的帳款後系統自動會顯示您的付款狀態已付款。
                </li>
                <li>自動提款機(ATM)轉帳操作說明如下：</li>
                <li>1.請插入你的金融卡。</li>
                <li>
                  2.輸入您的晶片金融卡密碼 (6碼~12碼)；或磁條金融卡密碼 (4碼)。
                </li>
                <li>3.選擇「轉帳」交易功能。</li>
                <li>4.輸入您要轉入帳的「銀行代碼」</li>
                <li>
                  5.輸入「轉帳的帳號」：請務必根據您線上訂購的訂單轉帳帳號(13或16碼)。
                </li>
                <li>
                  6.輸入您您購買產品的「金額」：請務必根據您線上訂購的訂單應收金額(不包含跨行轉帳手續費)。
                </li>
                <li>7.確認您所輸入的資料是否正確。 (請仔細核對！)</li>
                <li>8.確認後即完成轉帳交易。</li>
                <li>注意事項：</li>
                <li>
                  若使用郵局帳戶轉帳，郵局有限定轉帳需由本人於郵局申請「轉帳」功能，煩請與郵局確認。
                </li>
                <li>
                  各家銀行之自動櫃員機轉帳交易流程不盡相同，上述說明為大多數之轉帳流程！
                </li>
                <li>
                  建議列印交易明細表留存並確認交易明細表的交易訊息欄顯示OK！
                </li>
                <li>
                  轉帳金額與轉帳帳號需輸入正確，轉帳金額並不包含銀行例行收取的跨行轉帳手續費(15元)，所以當轉帳完成，銀行會自動將該手續費由您銀行帳戶中扣除。
                </li>
                <li>
                  配合銀行相關作業，轉帳完成後估計約需二至三個工作天(不含例假日)，待我們確認收到您的款項後，立即啟動您的加值付費服務。
                </li>
              </ul>
              <div>
                <button type="button">
                  <Link to="/CheckoutDelivery">上一頁</Link>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    handleSubmit()
                  }}
                >
                  <Link to="/OrderComplete">確定結帳</Link>
                </button>
              </div>
            </>
          )}
          {orderPayment === '3' && (
            <>
              <div className="payment-form-flex">
                <div>
                  <ul>
                    <li>信用卡資料:</li>
                    <li>
                      <label htmlFor="creditCardNum">卡號</label>
                    </li>
                    <li>
                      <input
                        type="text"
                        name="creditCardNum"
                        id="creditCardNum"
                        maxLength="19"
                        value={cardNumber}
                        onChange={(event) => {
                          const v = event.target.value
                          setCardNumber(v)
                        }}
                      />
                    </li>
                    {cardNumber ? <></> : <li className="error">必填*</li>}
                    <li>
                      <label htmlFor="Name">姓名</label>
                    </li>
                    <li>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={cardHolders}
                        onChange={(event) => {
                          const v = event.target.value
                          setCardHolders(v)
                        }}
                      />
                    </li>
                    {cardHolders ? <></> : <li className="error">必填*</li>}
                    <li>
                      <label>有效時間</label>
                    </li>
                    <li>
                      <input
                        type="text"
                        name="cardMonth"
                        id="cardMonth"
                        maxLength="2"
                        value={cardMonth}
                        onChange={(event) => {
                          const v = event.target.value
                          setCardMonth(v)
                        }}
                      />
                      <label htmlFor="cardMonth">月</label>
                      <input
                        type="text"
                        name="cardYear"
                        id="cardYearr"
                        maxLength="2"
                        value={cardYear}
                        onChange={(event) => {
                          const v = event.target.value
                          setCardYear(v)
                        }}
                      />
                      <label htmlFor="cardYear">年</label>
                    </li>
                    {cardMonth && cardYear ? (
                      <></>
                    ) : (
                      <li className="error">必填*</li>
                    )}
                    <li>
                      <label htmlFor="cardPin">背面末三碼</label>
                    </li>
                    <li>
                      <input
                        type="text"
                        name="cardPin"
                        id="cardPin"
                        maxLength="3"
                        value={cardCSC}
                        onChange={(event) => {
                          const v = event.target.value
                          setCardCSC(v)
                        }}
                      />
                    </li>
                    {cardCSC ? <></> : <li className="error">必填*</li>}
                    <li></li>
                  </ul>
                </div>
              </div>
              <div>
                <button type="button">
                  <Link to="/CheckoutDelivery">上一頁</Link>
                </button>
                {cardNumber &&
                cardHolders &&
                cardMonth &&
                cardYear &&
                cardCSC ? (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault()
                        handleSubmit()
                      }}
                    >
                      <Link to="/OrderComplete">確定結帳</Link>
                    </button>
                  </>
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
export default withRouter(CartPayment)
