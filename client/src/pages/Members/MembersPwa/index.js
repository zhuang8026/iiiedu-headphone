// 函式元件
import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import { message } from 'antd';

import MembersLeft from '../ComponentMembersLeft'

function MembersPwa(props) {
  const key = 'updatable';
  const {userdata, setUserdata} = props;
  const [pwd, setpwd] = useState();
  const [oldpwd, setoldpwd] = useState();

  console.log('userdata', userdata);

  const newPasswordCallback = () => {
    fetch('http://localhost:3009/membersEdit/newpassword', {
        method: 'POST',
        body:JSON.stringify({
          pwd: pwd,
          id: userdata.id
      }),
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      })
    })
      .then((res)=>{
          return res.json() // json()	返回 Promise，resolves 是 JSON 物件
      })
      .then(obj=>{
          console.log('obj:', obj);
          setUserdata({
            ...userdata,
            pwd: pwd
          })
          if(obj.success) {
            localStorage.removeItem('memberData');
            message.loading({ content: 'Loading...', key });
            setTimeout(() => {
              localStorage.setItem('memberData', JSON.stringify(userdata));
              message.success({ content: '修改成功!', key, duration: 1 });
              // props.history.push('/KMembers/MembersAdress');
            }, 1000);
            
        } else {
            message.info(`資料無改變`)
        }
      })
  }

  useEffect(()=>{
    setpwd(pwd)
  },[pwd])

  return (
      <main>
        <div className="members_all">
          <MembersLeft 
            userdata= {userdata}
            setUserdata= {setUserdata}
          />
          <div className="members_right">
            <div className="members_right_inner">
              {/* title */}
              <div className="members_r_top_text">
                <h1>更改密碼</h1>
                <p>管理你的檔案以保護你的帳戶</p>
              </div>
              {/* 主要內容 */}
              <div className="members_pwa_r_bottom">
                <div action="/" className="members_pwa_form">
                  <ul className="members_pwa_ul">
                    <li>
                      <div className="r_bottom_del">
                        <label htmlFor="memDel_pwa">現在密碼</label>
                        <span className="iconfont icon-lock"></span>
                        <input
                          type="password"
                          id="memDel_pwa"
                          className="mem_input"
                          placeholder="請輸入密碼"
                          defaultValue={userdata.pwd}
                          // onChange = {(e)=>{ setoldpwd(e.target.value) }}
                        />
                      </div>
                      <span className="memDel_click">
                        密碼輸入錯誤，請重新輸入
                      </span>
                    </li>
                    <li>
                      <div className="r_bottom_del">
                        <label htmlFor="memDel_pwa">新的密碼</label>
                        <span className="iconfont icon-lock"></span>
                        <input
                          type="password"
                          id="memDel_pwa"
                          className="mem_input"
                          placeholder="請輸入密碼"
                          maxLength="6"
                          defaultValue={pwd}
                          onChange = {(e)=>{ 
                            setpwd(e.target.value) 
                            setUserdata({
                              ...userdata,
                              pwd: pwd
                            })
                          }}
                        />
                      </div>
                      <span className="memDel_click">
                        輸入密碼不一樣，請重新輸入
                      </span>
                    </li>
                    <li>
                      <div className="r_bottom_del">
                        <label htmlFor="memDel_pwa">確認密碼</label>
                        <span className="iconfont icon-lock"></span>
                        <input
                          type="password"
                          id="memDel_pwa"
                          className="mem_input"
                          placeholder="請輸入密碼"
                          maxLength="6"
                          defaultValue={pwd}
                          onChange = {(e)=>{ 
                            setpwd(e.target.value) 
                            setUserdata({
                              ...userdata,
                              pwd: pwd
                            })
                          }}
                        />
                      </div>
                      <span className="memDel_click">
                        輸入密碼不一樣，請重新輸入
                      </span>
                    </li>
                  </ul>
                  <input 
                    type="submit" 
                    id="mem_submit" 
                    className="mem_submit" 
                    onClick={()=> newPasswordCallback()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}
export default withRouter(MembersPwa)
