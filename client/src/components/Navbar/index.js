// 函式元件
import React, { Fragment, useEffect } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

// antd
import { Popover, Button } from 'antd';

// scss
// import './_nav.scss'

// logo 
import OtisGif from "../../assets/img/Otis.gif";

// nav img 
import {NavItems} from './config';
import {NavIcon} from './config';
import {NavItemsAir} from './config';


function MyNavBar(props) {
    const members = (
        <Fragment>
            <span className="IconP">會員中心</span>
        </Fragment>
    );
    const sellers = (
        <Fragment>
            <span className="IconP">賣家中心</span>
        </Fragment>
    );
    const loves = (
        <Fragment>
            <span className="IconP">我的最愛</span>
        </Fragment>
    );
    const carts = (
        <Fragment>
            <span className="IconP">購物車</span>
        </Fragment>
    );
    return (
        <Fragment>
            {/* navbar */}
            <div className="nav-page-header">
                {/* 遮招層 */}
                <div className="nav-page-cover"></div>
                {/* nav body */}
                <div className="nav-containers">
                    <div className="nav-left">
                        <figure>
                            <img src={OtisGif} alt="logo" />
                        </figure>
                    </div>
                    <div className="nav-right">
                        <div className="nav-inner-left">
                            <nav>
                                <ul className="menu-otis-menu">
                                    <li>
                                        <a href="/" className="meaulist">
                                            <span>首頁</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/YyProduct" className="meaulist">
                                            <span>頭戴式耳機</span>
                                        </a>
                                        <div className="inner hidden-meau">
                                            <ul>
                                            { NavIcon.map((data, index)=>{
                                                return (
                                                    <li className="nav-menu-object nav-menu-border" key={index}>
                                                        <img src={data.picUrl} alt="AKG" />
                                                        <a href={data.linkUrl}><span>{data.name}</span></a>
                                                    </li>
                                                )
                                            }) }
                                            </ul>
                                            <div className="meau_img">
                                                { NavItems.map((data, index)=>{
                                                    return (
                                                        <a href={data.linkUrl} key={index}>
                                                            <img src={data.picUrl} alt={data.name}/>
                                                            <span>{data.name}</span>
                                                        </a>
                                                    )
                                                }) }
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="/YyProduct" className="meaulist">
                                            <span>耳戴式耳機</span>
                                        </a>
                                        <div className="inner hidden-meau">
                                            <ul>
                                                { NavIcon.map((data, index)=>{
                                                    return (
                                                        <li className="nav-menu-object nav-menu-border" key={index}>
                                                            <img src={data.picUrl} alt="AKG" />
                                                            <a href={data.linkUrl}><span>{data.name}</span></a>
                                                        </li>
                                                    )
                                                }) }
                                            </ul>
                                            <div className="meau_img">
                                                { NavItemsAir.map((data, index)=>{
                                                    return (
                                                        <a href={data.linkUrl} key={index}>
                                                            <img src={data.picUrl} alt={data.name}/>
                                                            <span>{data.name}</span>
                                                        </a>
                                                    )
                                                }) }
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="/YyProduct" className="meaulist">
                                            <span>揚聲器</span>
                                        </a>
                                        <div className="inner hidden-meau">
                                            <ul>
                                                { NavIcon.map((data, index)=>{
                                                    return (
                                                        <li className="nav-menu-object nav-menu-border" key={index}>
                                                            <img src={data.picUrl} alt="AKG" />
                                                            <a href={data.linkUrl}><span>{data.name}</span></a>
                                                        </li>
                                                    )
                                                }) }
                                            </ul>
                                            {/* <div className="meau_img">
                                                <a href="#"><img src="./asset/items_img/Beoplay_E8-01.png" alt="Beoplay_E8-01"><span>Beoplay_E8-01</span></a>
                                                <a href="#"><img src="./asset/items_img/Beoplay_E8_3rd_Gen-02.png" alt="Beoplay_E8_3rd_Gen-02"><span>Beoplay_E8_3rd_Gen-02</span</a>
                                                <a href="#"><img src="./asset/items_img/Beoplay_E8_2.0-01.png" alt="Beoplay_E8_2.0-01"><span>Beoplay_E8_2.0-01</span</a>
                                                <a href="#"><img src="./asset/items_img/SE846-04.png" alt="SE846-04"><span>SE846-04</span</a>
                                                <a href="#"><img src="./asset/items_img/Beoplay_H3-03.png" alt="eoplay_H3-03"><span>eoplay_H3-03</span</a>
                                                <a href="#"><img src="./asset/items_img/Beoplay_E4-01.png" alt="Beoplay_E4-01"><span>Beoplay_E4-01</span</a>
                                            </div> */}
                                        </div>
                                    </li>
                                    <li>
                                        <a href="/WiAbout" className="meaulist">
                                            <span>關於我們</span>
                                        </a>
                                        <div className="inner hidden-meau">
                                        <ul>
                                            <li className="nav-menu-object">
                                                <i className="iconfont icon-gift"></i>
                                                <a href=""><span>禮物卡</span></a>
                                            </li>
                                            <li className="nav-menu-object">
                                                <i className="iconfont icon-card"></i>
                                                <a href=""><span>保固卡</span></a>
                                            </li>
                                            <li className="nav-menu-object">
                                                <i className="iconfont icon-user_2"></i>
                                                <a href=""><span>關於我們</span></a>
                                            </li>
                                            <li className="nav-menu-object">
                                                <i className="iconfont icon-message"></i>
                                                <a href=""><span>聯係我們</span></a>
                                            </li>
                                            <li className="nav-menu-object">
                                                <i className="iconfont icon-location"></i>
                                                <a href=""><span>商店定位</span></a>
                                            </li>
                                            <li className="nav-menu-object">
                                                <i className="iconfont icon-warning"></i>
                                                <a href=""><span>常見問題</span></a>
                                            </li>
                                            <li className="nav-menu-object">
                                                <i className="iconfont icon-geren"></i>
                                                <a href=""><span>我們的客戶</span></a>
                                            </li>
                                        </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <Link to="/YongBlog" className="meaulist">
                                            <span>BLOG</span>
                                        </Link>
                                        <div className="inner hidden-meau">
                                            <ul>
                                                <li className="nav-menu-object">
                                                    <i className="iconfont icon-blog"></i>
                                                    <Link to="/YongBlog" type="button"><span>所有 Blog</span></Link>
                                                </li>
                                                <li className="nav-menu-object">
                                                    <i className="iconfont icon-blog"></i>
                                                    <a href="#" type="button"><span>我的 Blog</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="nav-inner-right">
                            <nav>
                                <ul className="menu-otis-icon">
                                    {/* 搜索引擎 */}
                                    <li>
                                        <div id="search">
                                        <form
                                            method="get"
                                            id="searchform"
                                            className="searchform"
                                            action="#"
                                        >
                                            <label className="screen-reader-text">Search for:</label>
                                            <div className="input-holder clearfix">
                                            <input
                                                type="search"
                                                className="search-field"
                                                required=""
                                                // value=""
                                                name="s"
                                                title="Search for:"
                                            />
                                            <button type="submit" className="otis-search-submit">
                                                <i className="iconfont icon-search"></i>
                                            </button>
                                            </div>
                                        </form>
                                        </div>
                                    </li>
                                    
                                    {/* 賣家 */}
                                    <li>
                                        <div id="members" className="otis-members">
                                            <a className="otis-login-opener" href="/AliceSellers">
                                                <Popover content={sellers} placement="bottom">
                                                    <span className="otis-login-text">
                                                        <i className="iconfont icon-geren"></i>
                                                    </span>
                                                </Popover>
                                            </a>
                                        </div>
                                    </li>

                                    {/* 會員 */}
                                    <li>
                                        <div id="members" className="otis-members">
                                            <a className="otis-login-opener" href="/KMembers">
                                                <Popover content={members} placement="bottom">
                                                    <span className="otis-login-text">
                                                        <i className="iconfont icon-Personal"></i>
                                                    </span>
                                                </Popover>
                                            </a>
                                        </div>
                                    </li>

                                    {/* 我的最愛 */}
                                    <li>
                                        <div id="wishlist" className="otis-wishlist">
                                            <a className="otis-wishlist-widget-link">
                                                <Popover content={loves} placement="bottom">
                                                    <span className="otis-wishlist-widget-icon">
                                                        <i className="iconfont icon-like"></i>
                                                    </span>
                                                    <span className="otis-wishlist-widget-count"> 1 </span>
                                                </Popover>
                                            </a>
                                        </div>
                                    </li>

                                    {/* 購物車 */}
                                    <li>
                                        <div id="shopping" className="otis-shopping">
                                            <div className="otis-shopping-cart-inner">
                                                <a
                                                    itemProp="url"
                                                    className="qodef-header-cart"
                                                >
                                                    <Popover content={carts} placement="bottom">
                                                        <span className="otis-sc-opener-icon">
                                                            <i className="iconfont icon-cart"></i>
                                                        </span>
                                                        <span className="otis-sc-opener-count"> 5 </span>
                                                    </Popover>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    {/* <li>
                                        <a className="qodef-side-menu-button-opener qodef-icon-has-hover qodef-side-menu-button-opener-predefined">
                                            <span className="qodef-side-menu-icon">
                                                <span className="qodef-hm-lines">
                                                    <span className="qodef-hm-line qodef-line-1"></span>
                                                    <span className="qodef-hm-line qodef-line-2"></span>
                                                </span>
                                            </span>
                                        </a>
                                    </li> */}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
export default withRouter(MyNavBar);