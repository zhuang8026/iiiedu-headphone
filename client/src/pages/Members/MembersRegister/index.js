// 函式元件
import React from 'react'
import {Link,withRouter} from 'react-router-dom'


function MembersRegister() {
  return (
      <main>
        <div className="login_container">
          {/* 登入 */}
          <a href="../">首頁</a> / <a href="#">登入</a>
          <div className="login_inner">
            <h1 className="login_inner_p1">MembersRegister</h1>
            <p className="login_inner_p2">
              <a href="#">沒有帳號了?在此註冊</a>
            </p>
          </div>
          {/* form input */}
          <form action="#">
            <div className="login_form">
              <label htmlFor="" className="gray">
                用戶名或郵箱地址 *
              </label>
              <input className="input01" type="email" placeholder="Email" />
              <p className="login_err">用戶名或郵箱地址 錯誤</p>

              <label htmlFor="" className="gray">
                密碼 *
              </label>
              <input
                className="input01"
                type="password"
                placeholder="Password"
              />
              <p className="login_err">密碼錯誤</p>

              <div className="login_form_pwa">
                <input type="checkbox" id="a" />
                <label htmlFor="a">記住帳號</label>
                <p>
                  <a href="">忘記密碼?</a>
                </p>
              </div>
              <button type="submit" className="login_btn">
                登入
              </button>
            </div>
          </form>
        </div>
      </main>
  )
}
export default withRouter(MembersRegister)
