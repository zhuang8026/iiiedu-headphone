// 函式元件
import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link, NavLink, withRouter} from 'react-router-dom'

 // components
import MyNavBar from '../../../components/Navbar'
import MyMenu from '../../../components/NavbarMenu'
import MyFooter from '../../../components/Footer'

import MembersLeft from '../ComponentMembersLeft'

function MembersAdress() {
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
                                <h1>我的地址</h1>
                                <p>管理你的檔案以保護你的帳戶</p>
                            </div>
                            {/* 主要內容 */}
                            <div className="members_address_r_bottom">
                                <div className="r_bottom_left">
                                    <ul>
                                        <li>
                                            <div className="r_bottom_nodel">
                                                <label htmlFor="use">姓名</label>
                                                <span className="iconfont icon-user_2"></span>
                                                <input id="use" className="mem_input" placeholder="莊杰翰" value={'莊杰翰'}/>
                                            </div>
                                            <span className="r_bottom_err">賬號不可修改</span>
                                        </li>
                                        <li>
                                            <div className="r_bottom_del">
                                                <label htmlFor="name">手機</label>
                                                <span className="iconfont icon-user_2"></span>
                                                <input id="name" className="mem_input" placeholder="0988220903"/>
                                            </div>
                                            <span className="r_bottom_err">姓名不符合格式</span>
                                        </li>
                                        <li>
                                            <div className="r_bottom_del">
                                                <label htmlFor="email">地址</label>
                                                <span className="iconfont icon-user_2"></span>
                                                <input id="email" className="mem_input" placeholder="新北市火星區地球路一段413號１樓 全家火星噴火店"/>
                                            </div>
                                            <span className="r_bottom_err">email格式做錯</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <MyFooter />
        </Fragment>
    )

}
export default withRouter(MembersAdress);