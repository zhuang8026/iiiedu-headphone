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
                            <span className="iconfont icon-wodedingdan"></span>
                            <a className="men_a">訂單管理</a>
                        </div>
                        <ul className="men_u">
                            <li>
                                <span className="iconfont icon-reduce_1"></span>
                                <NavLink to="/SuperSeller">訂單出貨</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="men_title">
                        <div className="men_title_inner">
                            <span className="iconfont icon-cart"></span>
                            <a className="men_a">商品管理</a>
                        </div>
                        <ul className="men_u">
                            <li>
                                <span className="iconfont icon-reduce_1"></span>
                                <NavLink to="/SuperSeller/SuperSellerItems">我的商品</NavLink>
                            </li>
                            <li>
                                <span className="iconfont icon-reduce_1"></span>
                                <NavLink to="/SuperSeller/SuperSellerAddItems">新增商品</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="men_title">
                        <div className="men_title_inner">
                            <span className="iconfont icon-shouye"></span>
                            <a className="men_a">財務管理</a>
                        </div>
                        <ul className="men_u">
                            <li>
                                <span className="iconfont icon-reduce_1"></span>
                                <NavLink to="/SuperSeller/SuperSellerWallet">我的錢包</NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="men_title">
                        <div className="men_title_inner">
                            <span className="iconfont icon-date"></span>
                            <NavLink to="/KMembers/MembersCartList" className="men_a">賣場商品</NavLink>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default withRouter(MembersLeft);