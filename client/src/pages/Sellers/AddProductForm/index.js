// 函式元件
import React, { useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { message } from 'antd'
import './addproductform.css'

function SellerAddProduct(props) {
  const { userdata, setUserdata, name, setName } = props.allprops
  const {
    itemName,
    setItemName,
    itemImg,
    setItemImg,
    colorid,
    setColorId,
    itemsbrand,
    setItemsBrand,
    itemstype,
    setItemstype,
    itemPrice,
    setItemPrice,
    itemQty,
    setItemQty,
    itemsales,
    setItemsales,
    itemscontent,
    setItemscontent,
    itemsweight,
    setItemsweight,
    itemsdrive,
    setItemsDrive,
    itemsfrequency,
    setitemsfrequency,
    itemsSensitivity,
    setItemsSensitivity,
    itemsconnect,
    setItemsconnect,
    itemsmains,
    setItemsmains,
    itemsEndurance,
    setItemsEndurance,
    itemswatertight,
    setItemswatertight,
    itemsfeature,
    setItemsFeature,
  } = props

  
  const addFormServer = () => {
    fetch('http://localhost:3009/sellers/add-product', {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        id: userdata.id,
        itemName: itemName,
        itemImg: itemImg,
        colorid: colorid,
        itemsbrand: itemsbrand,
        itemstype: itemstype,
        itemPrice: itemPrice,
        itemQty: itemQty,
        itemsales: itemsales,
        itemscontent: itemscontent,
        itemsweight: itemsweight,
        itemsdrive: itemsdrive,
        itemsfrequency: itemsfrequency,
        itemsSensitivity: itemsSensitivity,
        itemsconnect: itemsconnect,
        itemsmains: itemsmains,
        itemsEndurance: itemsEndurance,
        itemswatertight: itemswatertight,
        itemsfeature: itemsfeature,
      })
    })
      .then((result) => result.json())
      .then((obj) => {
        console.log(obj)
        // localStorage.setItem('memberData', JSON.stringify(obj));
        message.success(`新增成功！`)
        setTimeout(() => {
          // props.history.goBack()
          props.history.push('/AliceSellers/add-product')
        }, 2000)
        // if(obj.success){
        //   if(obj.password === password){
        //     localStorage.setItem('memberData', JSON.stringify(obj));
        //     message.success(`Hello!`);
        //     setTimeout(()=>{
        //       // props.history.goBack()
        //       props.history.push('/');
        //     },2000)
        //   } else {
        //     message.error(`密碼不正確`);
        //     localStorage.removeItem('memberData');
        //   }
        // } else {
        //   message.error(`登入失敗`);
        //   localStorage.removeItem('memberData');
        // }
      })
  }

useEffect(() => {
  addFormServer()
  return () => {
    console.log('success')
  }
}, [])
  return (
    <main>
      <div className="login_container">
        {/* 登入 */}
        <div className="login_Breadcrumb">
          <a href="#">首頁</a> / <a href="#">註冊</a>
        </div>
        <div className="login_inner">
          <h1 className="login_inner_p1">註冊</h1>
          <p className="login_inner_p2"></p>
        </div>
        {/* form input */}
        <div className="form_all">
          <div className="login_form  seller-layout">
            <div className="seller-form-binding">
              <label htmlFor="registerNick" className="gray">
                itemName *
              </label>
              <input
                required
                className="input01 seller-input"
                type="text"
                placeholder="請輸入您的暱稱"
                id="registerNick"
                onChange={(e) => setItemName(e.target.value)}
              />
              <p className="login_err"></p>
            </div>

            <div className="seller-form-binding">
              <label htmlFor="registerNick" className="gray">
                圖片 ＊
              </label>
              <input
                required
                className="input01 seller-input"
                type="text"
                placeholder="請輸入您的暱稱"
                id="registerNick"
                onChange={(e) => setItemImg(e.target.value)}
              />
              <p className="login_err"></p>
            </div>

            <div className="seller-form-binding">
              <label htmlFor="registerEmail" className="gray">
                colorid *
              </label>
              <input
                required
                className="input01 seller-input"
                type="text"
                placeholder="請輸入您的郵箱"
                id="registerEmail"
                onChange={(e) => setColorId(e.target.value)}
              />
              <p className="login_err"></p>
            </div>

            <div className="seller-form-binding">
              <label htmlFor="registerPwa" className="gray">
                密碼 *
              </label>
              <input
                required
                className="input01 seller-input"
                type="text"
                placeholder="請輸入六位數密碼"
                id="registerPwa"
                onChange={(e) => setItemsBrand(e.target.value)}
              />
              <p className="login_err"></p>
            </div>

            <div className="seller-form-binding">
              <label htmlFor="registerPwa" className="gray">
                密碼 *
              </label>
              <input
                required
                className="input01 seller-input"
                type="text"
                placeholder="請輸入六位數密碼"
                id="registerPwa"
                onChange={(e) => setItemstype(e.target.value)}
              />
              <p className="login_err"></p>
            </div>

            <div className="seller-form-binding">
              <label htmlFor="registerPwa" className="gray">
                密碼 *
              </label>
              <input
                required
                className="input01 seller-input"
                type="text"
                placeholder="請輸入六位數密碼"
                id="registerPwa"
                onChange={(e) => setItemPrice(e.target.value)}
              />
              <p className="login_err"></p>
            </div>

            <div className="seller-form-binding">
              <label htmlFor="registerPwa" className="gray">
                密碼 *
              </label>
              <input
                required
                className="input01 seller-input"
                type="text"
                placeholder="請輸入六位數密碼"
                id="registerPwa"
                onChange={(e) => setItemQty(e.target.value)}
              />
              <p className="login_err"></p>
            </div>

            <div className="seller-form-binding">
              <label htmlFor="registerPwa" className="gray">
                密碼 *
              </label>
              <input
                required
                className="input01 seller-input"
                type="text"
                placeholder="請輸入六位數密碼"
                id="registerPwa"
                onChange={(e) => setItemsales(e.target.value)}
              />
              <p className="login_err"></p>
            </div>

            <div className="seller-form-binding">
              <label htmlFor="registerPwa" className="gray">
                密碼 *
              </label>
              <input
                required
                className="input01 seller-input"
                type="text"
                placeholder="請輸入六位數密碼"
                id="registerPwa"
                onChange={(e) => setItemscontent(e.target.value)}
              />
              <p className="login_err"></p>
            </div>

            <div className="seller-form-binding">
              <label htmlFor="registerPwa" className="gray">
                密碼 *
              </label>
              <input
                required
                className="input01 seller-input"
                type="text"
                placeholder="請輸入六位數密碼"
                id="registerPwa"
                onChange={(e) => setItemsweight(e.target.value)}
              />
              <p className="login_err"></p>
            </div>

            <div className="seller-form-binding">
              <label htmlFor="registerPwa" className="gray">
                密碼 *
              </label>
              <input
                required
                className="input01 seller-input"
                type="text"
                placeholder="請輸入六位數密碼"
                id="registerPwa"
                onChange={(e) => setItemsDrive(e.target.value)}
              />
              <p className="login_err"></p>
            </div>

            <div className="seller-form-binding">
              <label htmlFor="registerPwa" className="gray">
                密碼 *
              </label>
              <input
                required
                className="input01 seller-input"
                type="text"
                placeholder="請輸入六位數密碼"
                id="registerPwa"
                onChange={(e) => setitemsfrequency(e.target.value)}
              />
              <p className="login_err"></p>
            </div>

            <div className="seller-form-binding">
              <label htmlFor="registerPwa" className="gray">
                密碼 *
              </label>
              <input
                required
                className="input01 seller-input"
                type="text"
                placeholder="請輸入六位數密碼"
                id="registerPwa"
                onChange={(e) => setItemsSensitivity(e.target.value)}
              />
              <p className="login_err"></p>
            </div>

            <div className="seller-form-binding">
              <label htmlFor="registerPwa" className="gray">
                密碼 *
              </label>
              <input
                required
                className="input01 seller-input"
                type="text"
                placeholder="請輸入六位數密碼"
                id="registerPwa"
                onChange={(e) => setItemsconnect(e.target.value)}
              />
              <p className="login_err"></p>
            </div>

            <div className="seller-form-binding">
              <label htmlFor="registerPwa" className="gray">
                密碼 *
              </label>
              <input
                required
                className="input01 seller-input"
                type="text"
                placeholder="請輸入六位數密碼"
                id="registerPwa"
                onChange={(e) => setItemsmains(e.target.value)}
              />
              <p className="login_err"></p>
            </div>

            <div className="seller-form-binding">
              <label htmlFor="registerPwa" className="gray">
                密碼 *
              </label>
              <input
                required
                className="input01 seller-input"
                type="text"
                placeholder="請輸入六位數密碼"
                id="registerPwa"
                onChange={(e) => setItemsEndurance(e.target.value)}
              />
              <p className="login_err"></p>
            </div>

            <div className="seller-form-binding">
              <label htmlFor="registerPwa" className="gray">
                密碼 *
              </label>
              <input
                required
                className="input01 seller-input"
                type="text"
                placeholder="請輸入六位數密碼"
                id="registerPwa"
                onChange={(e) => setItemswatertight(e.target.value)}
              />
              <p className="login_err"></p>
            </div>

            <div className="seller-form-binding">
              <label htmlFor="registerPwa" className="gray">
                密碼 *
              </label>
              <input
                required
                className="input01 seller-input"
                type="text"
                placeholder="請輸入六位數密碼"
                id="registerPwa"
                onChange={(e) => setItemsFeature(e.target.value)}
              />
              <p className="login_err"></p>
            </div>

            <div className="login_form_pwa">
              <input type="checkbox" id="registerForget" />
              <label htmlFor="registerForget">記住帳號</label>
              <p>
                <a href="">忘記密碼?</a>
              </p>
            </div>

            <button
              type="submit"
              className="login_btn register_btn"
              onClick={() => {
                addFormServer()
              }}
            >
              註冊
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
export default withRouter(SellerAddProduct)
