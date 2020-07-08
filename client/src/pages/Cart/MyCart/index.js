// 函式元件
// william - 20200706 - 全部重寫
import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

//antd
import { message } from 'antd'

function MyCart(props) {
  const key = 'updatable'
  const {
    mycart,
    setMycart,
    mycartDisplay,
    setMycartDisplay,
    orderTotal,
    setOrderTotal,
    lovechange,
    setlovechange,
    compareschange,
    setcompareschange,
    cartchange,
    setcartchange,
  } = props.allprops
  const CartInner = JSON.parse(localStorage.getItem('cart')) || ''
  const [discountCode, setDiscountCode] = useState('')

  // console.log(mycart)

  // william - 20200705 - 數量加減
  const changeQuantity = (id, amount, PQty) => {
    const mycartdata = [...mycart]
    mycartdata.forEach((el) => {
      if (el.id === id) {
        el.amount = amount
        // 購物車商品數量不得小於1
        if (el.amount < 1) {
          el.amount = 1
          alert('el.amount < 1')
          message.warning('數量不能小於1')
        }
        // 購物車商品數量不得大於庫存
        if (el.amount > PQty) {
          el.amount = PQty
          message.warning(`商品數量:${PQty}`)
        }
      }
    })

    localStorage.setItem('cart', JSON.stringify(mycartdata))
    setMycart(mycartdata)
  }

  // 加入最愛
  const currentLove = JSON.parse(localStorage.getItem('love')) || []
  const updateLoveToLocalStorage = (value) => {
    const newcLove = [...currentLove, value]
    localStorage.setItem('love', JSON.stringify(newcLove))

    currentLove.map((element) => {
      if (element.itemName === value.itemName) {
        window.localStorage.setItem('love', JSON.stringify(currentLove))
        message.warning(`商品"${element.itemName}"重複了`)
        return
      }
    })
  }

  //更新比較功能localstorage
  const updateCompareToLocalStorage = (value) => {
    const currentCompare = JSON.parse(localStorage.getItem('compare')) || []
    const newCompare = [...currentCompare, value]
    localStorage.setItem('compare', JSON.stringify(newCompare))

    currentCompare.map((element) => {
      if (element.itemName === value.itemName) {
        window.localStorage.setItem('compare', JSON.stringify(currentCompare))
        message.warning(`商品"${element.itemName}"重複了`)
        return
      }
    })
  }
  //更新nav數量
  const love = JSON.parse(localStorage.getItem('love'))
  const compares = JSON.parse(localStorage.getItem('compare'))
  const cart = JSON.parse(localStorage.getItem('cart'))

  // 計算總價用的函式
  const sum = (data) => {
    let total = 0
    for (let i = 0; i < mycart.length; i++) {
      total += mycart[i].amount * mycart[i].itemPrice
    }
    return total
  }

  // william - 20200709 - 優惠卷
  const setDiscountCodecallback = () => {
    // console.log(discountCode)

    if (discountCode === 'MFEE0706NICE') {
      message.loading({ content: 'Loading...', key })
      setTimeout(() => {
        message.success({ content: '修改成功!', key, duration: 2 })
      }, 1000)
      setOrderTotal(true)
    } else {
      message.warning('請輸入正確的優惠碼!')
    }
  }

  useEffect(() => {
    //實驗把設定總數放在這裡
    // setOrderTotal(sum(mycart))
    // setDiscountCodecallback()

    setMycart(CartInner)
    //更新nav數量
    setlovechange(love)
    setcompareschange(compares)
    setcartchange(cart)
  }, [])

  //更新nav數量
  useEffect(() => {
    setcartchange(cart)
  }, [mycart])

  // useEffect(() => {
  //   //更新nav數量
  //   // setlovechange(love)
  // }, [lovechange])

  return (
    <>
      <div className="cart-crumb">
        <div></div>
        <Link to="/">首頁</Link> / <Link to="/MyCart">購物車</Link>
      </div>

      <div className="cart-container">
        {mycart.length > 0 ? (
          <>
            <ul className="cart-table">
              <li>
                <ul className="wi-ul">
                  <li>刪除</li>
                  <li>圖片</li>
                  <li>品名</li>
                  <li>單價</li>
                  <li>數量</li>
                  <li className="li-prices">小計</li>
                  <li>功能</li>
                </ul>
              </li>
              <li>
                {mycart.map((data, index) => {
                  return (
                    <ul key={index}>
                      <li
                        id={data.itemId}
                        data-id={index}
                        onClick={() => {
                          const cartList = [...mycart]
                          cartList.splice(index, 1)
                          setMycart(cartList)
                          localStorage.setItem('cart', JSON.stringify(cartList))
                        }}
                      >
                        <i className="iconfont icon-error"></i>
                      </li>
                      <li>
                        <img src={`/items_img/${data.itemImg}`} alt="icon" />
                      </li>
                      <li>{data.itemName}</li>
                      <li>{data.itemPrice}</li>

                      {/* 數量加減 - williams */}
                      <li>
                        <div className="willCart">
                          <button
                            className="DetailBtnEdit"
                            onClick={() => {
                              data.amount--
                              changeQuantity(data.id, data.amount, data.itemQty)
                            }}
                          >
                            <i className="iconfont icon-reduce_1"></i>
                          </button>
                          <span>{data.amount}</span>
                          <button
                            className="DetailBtnAdd"
                            onClick={() => {
                              data.amount++
                              changeQuantity(data.id, data.amount, data.itemQty)
                            }}
                          >
                            <i className="iconfont icon-add_1"></i>
                          </button>
                        </div>
                      </li>

                      <li className="li-prices">
                        {data.itemPrice * data.amount}
                      </li>
                      <li className="li-function">
                        <button
                          type="button"
                          className="btn_booking btn_width"
                          onClick={() => {
                            updateLoveToLocalStorage({
                              itemid: data.itemId,
                              itemName: data.itemName,
                              itemBrand: data.itemsbrand,
                              itemImg: data.itemImg,
                              itemPrice: data.itemPrice,
                              created_at: data.created_at,
                              itemQty: data.itemQty,
                              itemsEndurance: data.itemsEndurance,
                              itemsSensitivity: data.itemsSensitivity,
                              itemsales: data.itemsales,
                              itemsconnect: data.itemsconnect,
                              itemscontent: data.itemscontent,
                              itemsdrive: data.itemsdrive,
                              itemsfeature: data.itemsfeature,
                              itemsfrequency: data.itemsfrequency,
                              itemsmains: data.itemsmains,
                              itemsstar: data.itemsstar,
                              itemstoreNumber: data.itemstoreNumber,
                              itemstype: data.itemstype,
                              itemswatertight: data.itemswatertight,
                              itemsweight: data.itemsweight,
                            })
                            setlovechange(love)
                            message.success(`商品"${data.itemName}"加入最愛`)
                          }}
                        >
                          <i className="iconfont icon-like mobileIcon"></i>
                        </button>
                        <button
                          type="button"
                          className="btn_wish btn_width"
                          onClick={() => {
                            updateCompareToLocalStorage({
                              itemid: data.itemId,
                              itemName: data.itemName,
                              itemBrand: data.itemsbrand,
                              itemImg: data.itemImg,
                              itemPrice: data.itemPrice,
                              created_at: data.created_at,
                              itemQty: data.itemQty,
                              itemsEndurance: data.itemsEndurance,
                              itemsSensitivity: data.itemsSensitivity,
                              itemsales: data.itemsales,
                              itemsconnect: data.itemsconnect,
                              itemscontent: data.itemscontent,
                              itemsdrive: data.itemsdrive,
                              itemsfeature: data.itemsfeature,
                              itemsfrequency: data.itemsfrequency,
                              itemsmains: data.itemsmains,
                              itemsstar: data.itemsstar,
                              itemstoreNumber: data.itemstoreNumber,
                              itemstype: data.itemstype,
                              itemswatertight: data.itemswatertight,
                              itemsweight: data.itemsweight,
                            })
                            setcompareschange(compares)
                            message.success(`商品"${data.itemName}"已加入比較`)
                          }}
                        >
                          <i className="iconfont icon-binding"></i>
                        </button>
                      </li>
                    </ul>
                  )
                })}
              </li>
              <li className="cart-footer">
                <input
                  className="codeInput"
                  type="text"
                  placeholder="請輸入優惠碼"
                  value={discountCode}
                  onChange={(event) => {
                    const Codevalue = event.target.value
                    setDiscountCode(Codevalue)
                  }}
                />
                <button
                  className="codebutton"
                  type="button"
                  onClick={() => {
                    setDiscountCodecallback()
                  }}
                >
                  送出
                </button>
                {/* {discountCode == 'MFEE0706NICE' ? (
                  <button
                    className="codebutton"
                    type="button"
                    onClick={() => {
                      setOrderTotal(orderTotal - 1000)
                      message.success('成功使用優惠碼!')
                    }}
                  >
                    送出
                  </button>
                ) : (
                  <button
                    className="codebutton"
                    type="button"
                    onClick={() => {
                      message.warning('請輸入正確的優惠碼!')
                    }}
                  >
                    送出
                  </button>
                )} */}
              </li>
              <li className="cart-footer wi-num">
                <h2>商品總計: </h2>
                {mycart.length > 0 ? (
                  <>
                  <span>
                      $
                      {discountCode === 'MFEE0706NICE'
                        ? (<> {parseInt(sum() * 0.9)} <span className="MFEE0706NICE">(10% OFF)</span> </>)
                        : parseInt(sum())}
                    </span>


                    {/* <span>
                      $
                      {discountCode === 'MFEE0706NICE'
                        ? (parseInt(sum() * 0.9))+`(10% OFF)`
                        : parseInt(sum())}
                    </span> */}
                  
                  </>
                ) : (
                  <span>0</span>
                )}
              </li>
              <li className="cart-footer wi-footer">
                <button
                  className="wi-footer-cart"
                  type="button"
                  onClick={() => {
                    localStorage.removeItem('cart')
                    props.history.go(0)
                  }}
                >
                  清空購物車
                </button>
                {/* <button
                  className="wi-footer-set"
                  type="button"
                  onClick={() => {
                    setOrderTotal(sum(mycart))
                  }}
                >
                  <Link to="/ConfirmOrder">去結帳</Link>
                </button> */}
                {/* <button
                  className="wi-footer-set"
                  type="button"
                  onClick={() => {
                    setOrderTotal(sum(mycart) * 0.9)
                  }}
                >
                  <Link to="/ConfirmOrder">實驗80%去結帳</Link>
                </button> */}
                {discountCode === 'MFEE0706NICE' ? (
                  <button
                    className="wi-footer-set"
                    type="button"
                    onClick={() => {
                      setOrderTotal(sum(mycart) * 0.9)
                    }}
                  >
                    <Link to="/ConfirmOrder">去結帳</Link>
                  </button>
                ) : (
                  <button
                    className="wi-footer-set"
                    type="button"
                    onClick={() => {
                      setOrderTotal(sum(mycart))
                    }}
                  >
                    <Link to="/ConfirmOrder">去結帳</Link>
                  </button>
                )}
              </li>
            </ul>
          </>
        ) : (
          <ul className="cart-empty">
            <li>目前購物車是空的!</li>
            <li className="border-top">
              <button type="button">
                <Link to="/YyProduct">去商店</Link>
              </button>
            </li>
          </ul>
        )}
      </div>
    </>
  )
}
export default withRouter(MyCart)
