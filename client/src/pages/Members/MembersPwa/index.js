// 函式元件
import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import MembersLeft from '../ComponentMembersLeft'

function MembersPwa(props) {
  const {userdata, setUserdata} = props;
  const [a, seta] = useState('');
  const [b, setb] = useState('');
  const [c, setc] = useState('');
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
                <form action="/" className="members_pwa_form">
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
                          onChange = {(e)=>{ seta(e.target.value) }}
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
                          onChange = {(e)=>{ setb(e.target.value) }}
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
                          onChange = {(e)=>{ setc(e.target.value) }}
                        />
                      </div>
                      <span className="memDel_click">
                        輸入密碼不一樣，請重新輸入
                      </span>
                    </li>
                  </ul>
                  <input type="submit" id="mem_submit" className="mem_submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}
export default withRouter(MembersPwa)
