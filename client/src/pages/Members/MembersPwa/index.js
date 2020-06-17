// 函式元件
import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link, NavLink, withRouter} from 'react-router-dom'

 // components
import MyNavBar from '../../../components/Navbar'
import MyMenu from '../../../components/NavbarMenu'
import MyFooter from '../../../components/Footer'

import MembersLeft from '../ComponentMembersLeft'


function MembersPwa() {
    return (
        <Fragment>
            <header>
                <MyNavBar />
                <MyMenu />
            </header>
            <main>
                <div className="members_all">
                    <MembersLeft/>
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
                                                <input type="password" id="memDel_pwa" className="mem_input" placeholder="請輸入密碼"/>
                                            </div>
                                            <span className="memDel_click">密碼輸入錯誤，請重新輸入</span>
                                        </li>
                                        <li>
                                            <div className="r_bottom_del">
                                                <label htmlFor="memDel_pwa">新的密碼</label>
                                                <span className="iconfont icon-lock"></span>
                                                <input type="password" id="memDel_pwa" className="mem_input" placeholder="請輸入密碼"/>
                                            </div>
                                            <span className="memDel_click">輸入密碼不一樣，請重新輸入</span>
                                        </li>
                                        <li>
                                            <div className="r_bottom_del">
                                                <label htmlFor="memDel_pwa">確認密碼</label>
                                                <span className="iconfont icon-lock"></span>
                                                <input type="password" id="memDel_pwa" className="mem_input" placeholder="請輸入密碼"/>
                                            </div>
                                            <span className="memDel_click">輸入密碼不一樣，請重新輸入</span>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <MyFooter />
        </Fragment>
    )

}
export default withRouter(MembersPwa);