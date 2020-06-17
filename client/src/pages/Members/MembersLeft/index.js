// 函式元件
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link, NavLink, withRouter} from 'react-router-dom'

// antd
import { DatePicker  } from 'antd';

// 測試圖片
import logo from '../../../assets/img/tw.jpg';

const { RangePicker } = DatePicker;

function MembersLeft() {
    return (
        <div className="members_left">
            <div className="members_header">
                <div className="mem_top_inner">
                    <img src={logo}/>
                    <div className="men_text">
                        <h2>Hello !</h2>
                        <p>親愛的 <strong>快樂動起來</strong></p>
                    </div>
                </div>
                <div className="mem_bottom_inner">
                    <div className="men_title">
                        <div className="men_title_inner">
                            <span className="iconfont icon-Personal"></span>
                            <a className="men_a">我的帳戶</a>
                        </div>
                        <ul className="men_u">
                            <li>
                                <span className="iconfont icon-reduce_1"></span>
                                <a>個人檔案</a>
                            </li>
                            <li>
                                <span className="iconfont icon-reduce_1"></span>
                                <a>更改密碼</a>
                            </li>
                            <li>
                                <span className="iconfont icon-reduce_1"></span>
                                <a>銀行帳戶</a>
                            </li>
                            <li>
                                <span className="iconfont icon-reduce_1"></span>
                                <a>地址</a>
                            </li>
                        </ul>
                    </div>
                    <div className="men_title">
                        <div className="men_title_inner">
                            <span className="iconfont icon-date"></span>
                            <a className="men_a">購買清單</a>
                        </div>
                    </div>
                    <div className="men_title">
                        <div className="men_title_inner">
                            <span className="iconfont icon-safety"></span>
                            <a className="men_a">我的保固卡</a>
                        </div>
                    </div>
                    <div className="men_title">
                        <div className="men_title_inner">
                            <span className="iconfont icon-blog"></span>
                            <a className="men_a">我的BLOG</a>
                            </div>
                        <ul className="men_u">
                            <li>
                                <span className="iconfont icon-reduce_1"></span>
                                <a>全部 BLOG</a>
                            </li>
                            <li>
                                <span className="iconfont icon-reduce_1"></span>
                                <a>個人 BLOG</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(MembersLeft);