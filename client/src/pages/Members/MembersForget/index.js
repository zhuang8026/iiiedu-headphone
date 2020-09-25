// 函式元件
import React from 'react';
import {withRouter} from 'react-router-dom';


function MembersForget() {
  return (
    <main>
      <div className="login_container">
        {/* 登入 */}
        <a href="/">首頁</a> / <a href="#">忘記密碼</a>
        <div className="login_inner">
          <h1 className="login_inner_p1">MembersForget</h1>
          <p className="login_inner_p2">
            <a href="/KMembers/MembersLogin">沒有帳號了?在此註冊</a>
          </p>
        </div>

        <div className="form_all">
          <div className="login_form">
            <label htmlFor="ForgetInputName" className="gray">
              用戶名稱 :
              <input id="ForgetInputName" className="ForgetInputName input01" type="text" placeholder="用戶名稱"/>
              <p className="ForgetInputName_err login_err"> * 用戶名</p>
            </label>
            <label htmlFor="ForgetInputEmail" className="gray">
              郵箱地址 :
              <input id="ForgetInputEmail" className="ForgetInputEmail input01" type="email" placeholder="郵箱地址"/>
              <p className="ForgetInputEmail_err login_err"> * 郵箱地址</p>
            </label>

            <button type="submit" className="Forget_btn login_btn"> 確認送出 </button>
          </div>
        </div>
      </div>
    </main>
  )
}
export default withRouter(MembersForget)
