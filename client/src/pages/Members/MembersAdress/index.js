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
                                <div className="raddress_bottom_left">
                                    <ul className="raddress_bottom_left_ul">
                                        <li>
                                            <div className="address_bottom_nodel">
                                                <label htmlFor="use">姓名</label>
                                                <span className="iconfont icon-user_2"></span>
                                                <input type="text" id="use" className="address_input" placeholder="您的大名" defaultValue={'快來動起來'}/>
                                            </div>
                                            <span className="address_bottom_err">姓名不符合格式</span>
                                        </li>
                                        <li>
                                            <div className="address_bottom_nodel">
                                                <label htmlFor="name">手機</label>
                                                <span className="iconfont icon-phone"></span>
                                                <input type="tel" id="name" className="address_input" placeholder="0911223344" pattern="[0-9]{2}[0-9]{8}"/>
                                            </div>
                                            <span className="address_bottom_err">手機號碼不符合格式</span>
                                        </li>
                                        <li>
                                            <div className="address_bottom_nodel">
                                                <label htmlFor="email">地址</label>
                                                <span className="iconfont icon-address"></span>
                                                <input type="email" id="email" className="address_input" placeholder="新北市火星區地球路一段413號１樓 全家火星噴火店"/>
                                            </div>
                                            <span className="address_bottom_err">地址格式錯誤</span>
                                        </li>
                                    </ul>
                                    <div className="address_bottom_btn_inner">
                                        <button className="address_btn">修改</button>
                                        <button className="address_btn">删除</button>
                                    </div>
                                </div>
                                <button className="address_add_btn">新增</button>
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