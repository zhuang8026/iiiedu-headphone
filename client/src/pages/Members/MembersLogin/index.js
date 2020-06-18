// 函式元件
import React, { Fragment, useState } from 'react'
import {Link, withRouter} from 'react-router-dom'

// components
import MyNavBar from '../../../components/Navbar'
import MyMenu from '../../../components/NavbarMenu'
import MyFooter from '../../../components/Footer'

function MembersLogin(props) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [errorMessages, setErrorMessages] = useState([])

  const handleSubmit =()=>{
    console.log(username)
    console.log(password)
    let error = false
    let errorMessagestest = [];
    
    if (!username) {
      error = true
      errorMessagestest.push('帳號沒填')
    }

    if (!password) {
      error = true
      errorMessagestest.push('密碼沒填')
    }

    if (error) {
      setErrorMessages(errorMessagestest)
      console.log(errorMessages)
      return;
    }

    const userData = { username, password }
    const userLoginAsync = (userData, callback) => {
      console.log(userData)
    }

  }

  return (
    <Fragment>
      <header>
        <MyNavBar />
        <MyMenu />
      </header>
      <main>
        <div className="login_container">
          {/* 登入 */}
          <a href="../">首頁</a> / <a href="#">登入</a>
          <div className="login_inner">
            <h1 className="login_inner_p1">登入</h1>
            <p className="login_inner_p2">
              <Link to="/****">沒有帳號了?在此註冊</Link>
            </p>
          </div>
          {/* form input */}
          <form action="#" name="formLogin" method="post">
            <div className="login_form">
              <label htmlFor="" className="gray">用戶名或郵箱地址 *</label>
              <input className="input01" type="text" placeholder="請輸入帳號" onChange={e => setUsername(e.target.value)}/>
              {/* <p className="login_err">用戶名或郵箱地址 錯誤</p> */}
              <p className="login_err">{errorMessages[0]}</p>

              <label htmlFor="" className="gray">密碼 *</label>
              <input className="input01" type="password" placeholder="請輸入密碼" onChange={e => setPassword(e.target.value)}/>
              <p className="login_err">{errorMessages[1]}</p>

              <div className="login_form_pwa">
                <input type="checkbox" id="login_form_pwa" />
                <label htmlFor="login_form_pwa">記住帳號</label>
                <p>
                  <a href="#">忘記密碼?</a>
                </p>
              </div>
              <button type="submit" className="login_btn" onClick={()=> handleSubmit()}> 登入 </button>
            </div>
          </form>
        </div>
      </main>
      <MyFooter />
    </Fragment>
  )
}
export default withRouter(MembersLogin)
