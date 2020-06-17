// 函式元件
import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link, NavLink, withRouter} from 'react-router-dom'

 // components
import MyNavBar from '../../../components/Navbar'
import MyMenu from '../../../components/NavbarMenu'
import MyFooter from '../../../components/Footer'

import MembersLeft from '../ComponentMembersLeft'

// 測試圖片
import visa from '../../../assets/img/visa.png';

function MembersBank() {
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
                                <h1>我的信用卡</h1>
                                <p>管理你的檔案以保護你的帳戶</p>
                            </div>
                            {/* 主要內容 */}
                            <div className="members_pwa_r_bottom">
                                <ul className="members_pwa_r_inner">
                                    <li>
                                        <div className="members_card">
                                            <img src={visa}/>
                                            <h3>VISA</h3>
                                            <span>1111-2222-3333-4444</span>
                                            <span>PIN : 876</span>
                                        </div>
                                        <div className="members_card_button">
                                            <button className="members_update men_btn_style">修改</button>
                                            <button className="members_del men_btn_style">刪除</button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="members_card">
                                            <img src={visa}/>
                                            <h3>VISA</h3>
                                            <span>1111-2222-3333-4444</span>
                                            <span>PIN : 876</span>
                                        </div>
                                        <div className="members_card_button">
                                            <button className="members_update men_btn_style">修改</button>
                                            <button className="members_del men_btn_style">刪除</button>
                                        </div>
                                    </li>
                                </ul>
                                <button className="members_add">新增</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <MyFooter />
        </Fragment>
    )

}
export default withRouter(MembersBank);