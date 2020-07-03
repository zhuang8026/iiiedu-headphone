// 函式元件
import React from 'react';
import { NavLink, withRouter} from 'react-router-dom'

// http://localhost:3009/members/user/s001


function MembersLeft(props) {
    const {userdata} = props;

    return (
        <div className="members_left">
            <div className="members_header">
                <div className="mem_top_inner">
                    <img  src={`/user_img/${userdata.userlogo}`} alt="photo/icon"/>
                    <div className="men_text">
                        <h2>Hello !</h2>
                        <p>親愛的 <strong>{userdata.name}</strong></p>
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
                                <NavLink to="/KMembers">個人檔案</NavLink>
                            </li>
                            <li>
                                <span className="iconfont icon-reduce_1"></span>
                                <NavLink to="/KMembers/MembersPwa">更改密碼</NavLink>
                            </li>
                            <li>
                                <span className="iconfont icon-reduce_1"></span>
                                <NavLink to="/KMembers/MembersBank">銀行帳戶</NavLink>
                            </li>
                            <li>
                                <span className="iconfont icon-reduce_1"></span>
                                <NavLink to="/KMembers/MembersAdress">地址</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="men_title">
                        <div className="men_title_inner">
                            <span className="iconfont icon-date"></span>
                            <NavLink to="/KMembers/MembersCartList" className="men_a">購買清單</NavLink>
                        </div>
                    </div>
                    <div className="men_title">
                        <div className="men_title_inner">
                            <span className="iconfont icon-safety"></span>
                            <NavLink className="men_a" to="/SuperSeller">我的商場</NavLink>
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