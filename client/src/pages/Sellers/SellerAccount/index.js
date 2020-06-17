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
import SellerAccountProfileImg from '../../../assets/img/seller-profile/selleruser.svg'
import SellerProfileImg from '../../../assets/img/seller/index/profile-photo.jpg'
import SellerPhoneImg from '../../../assets/img/seller-profile/sellerphone.svg'
import SellerEmailImg from '../../../assets/img/seller-profile/selleremail.svg'
import SellerPwdImg from '../../../assets/img/seller-profile/sellerpassword.svg'

function SellerAccount(props) {
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
              <div className="seller-myaccount">
                <div className="w-90">
                  <h1>帳戶</h1>
                  <p>更新您的基本帳戶資訊</p>
                  <form action="" method="post">
                    <div className="seller-profile-container">
                      <img
                        className="icon-size"
                        src={SellerAccountProfileImg}
                        alt=""
                      />
                      <span>我的檔案</span>
                      <div className="seller-infowrapper">
                        <div className="seller-infobar">
                          <img
                            className="icon-size seller-round"
                            src={SellerProfileImg}
                            alt=""
                          />
                          <span>Silvia0706</span>
                        </div>
                        <button className="seller-editbtn">編輯</button>
                      </div>
                    </div>
                    <div className="seller-profile-container">
                      <img className="icon-size" src={SellerPhoneImg} alt="" />
                      <span>電話</span>
                      <div className="seller-infowrapper">
                        <div className="seller-infobar">0921145687</div>
                        <button className="seller-editbtn">編輯</button>
                      </div>
                    </div>
                    <div className="seller-profile-container">
                      <img className="icon-size" src={SellerEmailImg} alt="" />
                      <span>Email</span>
                      <div className="seller-infowrapper">
                        <div className="seller-infobar">
                          Silvia0706@gmail.com
                        </div>
                        <button className="seller-editbtn">編輯</button>
                      </div>
                    </div>
                    <div className="seller-profile-container">
                      <img className="icon-size" src={SellerPwdImg} alt="" />
                      <span>登入密碼</span>
                      <div className="seller-infowrapper">
                        <div className="seller-infobar">
                          我們建議您定期更新您的密碼來加強安全性
                        </div>
                        <button className="seller-editbtn">更新</button>
                      </div>
                    </div>
                  </form>
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

export default withRouter(SellerAccount)
