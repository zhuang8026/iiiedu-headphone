// 函式元件
import React from 'react'
import {Link,withRouter} from 'react-router-dom'


function MembersRegister() {
  return (
      <main>
        <div className="login_container">
          {/* 登入 */}
          <div className="login_Breadcrumb">
            <a href="#">首頁</a> / <a href="#">註冊</a>
          </div>
          <div className="login_inner">
            <h1 className="login_inner_p1">註冊</h1>
            <p className="login_inner_p2">
              <a href="/KMembers/MembersLogin">沒有帳號了?在此註冊</a>
            </p>
          </div>
          {/* form input */}
          <form action="#">
            <div className="login_form">
              <label htmlFor="registerNick" className="gray">用戶名暱稱 *</label>
              <input className="input01" type="email" placeholder="請輸入您的暱稱" id="registerNick"/>
              <p className="login_err">用戶名暱稱 錯誤</p>

              <label htmlFor="registerEmail" className="gray">用戶名或郵箱地址 *</label>
              <input className="input01" type="email" placeholder="請輸入您的郵箱" id="registerEmail"/>
              <p className="login_err">郵箱地址 錯誤</p>

              <label htmlFor="registerPwa" className="gray">密碼 *</label>
              <input className="input01" type="password" placeholder="請輸入六位數密碼" id="registerPwa"/>
              <p className="login_err">密碼格式 錯誤</p>

              <div className="login_form_pwa">
                <input type="checkbox" id="registerForget"/>
                <label htmlFor="registerForget">記住帳號</label>
                <p><a href="">忘記密碼?</a></p>
              </div>

              <button type="submit" className="login_btn register_btn">註冊</button>
            </div>
          </form>
        </div>
      </main>
  )
}
export default withRouter(MembersRegister)
