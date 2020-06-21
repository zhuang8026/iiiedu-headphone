// 函式元件
import React from 'react'
import {Link, withRouter} from 'react-router-dom'

import { message } from 'antd';

function MembersRegister(props) {
  const { name,
          setName,
          username,
          setUsername,
          password,
          setPassword,
          RegisterProcess} = props.allprops;
  // console.log(name, username, password)
  
//   async function addFromServer() {
//     const request = new Request('http://localhost:3009/membersRegister/add', {
//         method: 'POST',
//         body:JSON.stringify({
//           name: name,
//           username: username,
//           pwd: password
//         }),
//         headers: new Headers({
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         }),
//     })
//     const response = await fetch(request)
//     const data = await response.json()
//     // console.log(data)
//     // const todoData = [...todos, data]
//     console.log('伺服器回傳的json資料', data)
//     // setTodos(todoData)
// }

const addFromServer = () =>{
  fetch('http://localhost:3009/membersRegister/add', {
      method: 'post',
      body:JSON.stringify({
          name: name,
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
        console.log(obj)
        // localStorage.setItem('memberData', JSON.stringify(obj));
        message.success(`註冊成功！`);
        setTimeout(()=>{
          // props.history.goBack()
          props.history.push('/');
        },2000)
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
              <Link to="/KMembers/MembersLogin">有帳號了?在此登入</Link>
            </p>
          </div>
          {/* form input */}
          <div className="form_all">
            <div className="login_form">
              <label htmlFor="registerNick" className="gray">用戶名暱稱 *</label>
              <input 
                required
                className="input01" 
                type="text" 
                placeholder="請輸入您的暱稱" 
                id="registerNick" 
                onChange={e => setName(e.target.value)}
              />
              <p className="login_err"></p>

              <label htmlFor="registerEmail" className="gray">郵箱地址 *</label>
              <input 
                required
                className="input01" 
                type="email" 
                placeholder="請輸入您的郵箱" 
                id="registerEmail"
                onChange={e => setUsername(e.target.value)}
              />
              <p className="login_err"></p>

              <label htmlFor="registerPwa" className="gray">密碼 *</label>
              <input 
                required
                className="input01" 
                type="password" 
                placeholder="請輸入六位數密碼" 
                id="registerPwa"
                onChange={e => setPassword(e.target.value)}
              />
              <p className="login_err"></p>

              <div className="login_form_pwa">
                <input type="checkbox" id="registerForget"/>
                <label htmlFor="registerForget">記住帳號</label>
                <p><a href="">忘記密碼?</a></p>
              </div>

              <button 
                type="submit" 
                className="login_btn register_btn"
                onClick={ ()=>{RegisterProcess(addFromServer)} }>註冊</button>
            </div>
          </div>
        </div>
      </main>
  )
}
export default withRouter(MembersRegister)
