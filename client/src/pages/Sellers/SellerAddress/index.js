import React, { Fragment } from 'react'
import { withRouter, BrowserRouter as Router } from 'react-router-dom'

//import components
import MyNavBar from '../../../components/Navbar'
import MyMenu from '../../../components/NavbarMenu'
import MyFooter from '../../../components/Footer'
import LeftNav from '../Leftnav'

//import css
// import '../../../assets/css/AliceSeller/address.css'

//import image - 20200617 - william
// import { ReactComponent as SellerAccountProfileImg } from '../../../assets/img/seller/seller-profile/selleremail.svg'
// import { ReactComponent as SellerProfileImg } from '../../../assets/img/seller/index/profile-photo.jpg'
// import { ReactComponent as SellerPhoneImg } from '../../../assets/img/seller/seller-profile/sellerphone.svg'
// import { ReactComponent as SellerEmailImg } from '../../../assets/img/seller/seller-profile/selleremail.svg'
// import { ReactComponent as SellerPwdImg } from '../../../assets/img/seller/seller-profile/sellerpassword.svg'

// import SellerAccountProfileImg from '../../../assets/img/seller-profile/selleruser.svg'
// import SellerProfileImg from '../../../assets/img/seller/index/profile-photo.jpg'
// import SellerPhoneImg from '../../../assets/img/seller-profile/sellerphone.svg'
// import SellerEmailImg from '../../../assets/img/seller-profile/selleremail.svg'
// import SellerPwdImg from '../../../assets/img/seller-profile/sellerpassword.svg'

function SellerAddress(props) {
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
              <div className="seller-myaddress">
                <div className="w-90">
                  <div class="address-head">
                    <div class="headtitle">
                      <h1>我的地址</h1>
                      <p>管理你的配送及快遞取件地址</p>
                    </div>
                    <button class="add-address">新增地址</button>
                  </div>
                  <div class="form-wrapper d-flex">
                    <htmlForm
                      action=""
                      method="post"
                      class="seller-address-form"
                    >
                      <div class="seller-profile-container">
                        <img
                          class="icon-size"
                          src="./asset/img/seller-profile/place.svg"
                          alt=""
                        />
                        <span class="seller-address-margin-left">
                          姓名/公司名稱
                        </span>
                        <div class="seller-infowrapper">
                          <div class="seller-infobar">
                            <img
                              class="icon-size seller-round"
                              src="./asset/img/index/profile-photo.jpg"
                              alt=""
                            />
                            <span>Silvia0706</span>
                          </div>
                        </div>
                      </div>
                      <div class="seller-profile-container">
                        <span class="seller-address-margin-left">電話號碼</span>
                        <div class="seller-infowrapper">
                          <div class="seller-infobar">0921145687</div>
                        </div>
                      </div>
                      <div class="seller-profile-container">
                        <span class="seller-address-margin-left">收件地址</span>
                        <div class="seller-infowrapper">
                          <div class="seller-infobar">
                            台北市大安區復興南路一段392號
                          </div>
                        </div>
                      </div>
                    </htmlForm>
                    <div class="btnarrange">
                      <button class="seller-btn adreditbtn">編輯</button>
                      <button class="seller-btn adrdelbtn">刪除</button>
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

export default withRouter(SellerAddress)
