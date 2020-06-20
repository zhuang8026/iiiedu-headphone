// 函式元件
import React from 'react'
import {Link, withRouter} from 'react-router-dom'

import { message } from 'antd';

function MembersLogin(props) {
  const { username,
          setUsername,
          password,
          setPassword,
          loginProcess} = props.allprops;
  const loginSuccessCallback = () => {

    fetch('http://localhost:3009/members/login', {
      method: 'post',
      body:JSON.stringify({
        username: username,
        pwd: password
      }),
      headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      })
    })
      .then(result=>result.json())
      .then(obj=>{
        if(obj.success){
          if(obj.password === password){
            localStorage.setItem('memberData', JSON.stringify(obj));
            message.success(`Hello!${obj.name}`);
            setTimeout(()=>{
              // props.history.goBack()
              props.history.push('/');
            },2000)
          } else {
            message.error(`密碼不正確`);
            localStorage.removeItem('memberData');
          }
        } else {
          message.error(`登入失敗`);
          localStorage.removeItem('memberData');
        }
    })

  }


  return (
      <main>
        
        <div className="login_container">
          {/* 登入 */}
          <div className="login_Breadcrumb">
            <a href="#">首頁</a> / <a href="#">登入</a>
          </div>
          <div className="login_inner">
            <h1 className="login_inner_p1">登入</h1>
            <p className="login_inner_p2">
              <Link to="/KMembers/MembersRegister">沒有帳號了?在此註冊</Link>
            </p>
          </div>
          {/* form input */}
          <form action="#">
            <div className="login_form">
              <label htmlFor="" className="gray">用戶名或郵箱地址 *</label>
              <input className="input01" type="text" placeholder="請輸入帳號" onChange={e => setUsername(e.target.value)}/>
              {/* <p className="login_err">用戶名或郵箱地址 錯誤</p> */}
              <p className="login_err"></p>

              <label htmlFor="" className="gray">密碼 *</label>
              <input className="input01" type="password" placeholder="請輸入密碼" onChange={e => setPassword(e.target.value)}/>
              <p className="login_err"></p>

              <div className="login_form_pwa">
                <input type="checkbox" id="login_form_pwa" />
                <label htmlFor="login_form_pwa">記住帳號</label>
                <p>
                  <a href="#">忘記密碼?</a>
                </p>
              </div>
              <button type="button" className="login_btn" onClick={()=> loginProcess(loginSuccessCallback)}> 登入 </button>
            </div>
          </form>
        </div>
      </main>
  )
}
export default withRouter(MembersLogin)
