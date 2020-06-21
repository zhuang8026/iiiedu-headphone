// 函式元件
import React, { Fragment, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom'

// antd
import { Popover } from 'antd';
import { message } from 'antd';

// logo 
import OtisGif from "../../assets/img/Otis.gif";

// nav img 
import {NavItems} from './config';
import {NavIcon} from './config';
import {NavItemsAir} from './config';


function MyNavBar(props) {
    const memberData = JSON.parse(localStorage.getItem('memberData'))
    // console.log('localStorage', memberData)
    
    // 登出
    const logoutCallback = () => {
        fetch('http://localhost:3009/members/logout', {
            method: 'get',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            })
        })
            .then(result=>result.json())
            .then(obj=>{
                console.log(obj);
                message.success(`${obj['message']}`);
                localStorage.removeItem('memberData');
                props.history.push('/')
                // props.history.goBack()
            })
    }

    // 點擊跳轉到 賣家
    const goToStore =()=>{
        document.location.href='/AliceSellers'
        // props.history.push('/AliceSellers')
        console.log(props.history)
    }

    // const sellers = (
    //     <Fragment>
    //         <span className="IconP">賣家中心</span>
    //     </Fragment>
    // );
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
    const membersOutside = (
        <Fragment>
            <span className="IconP">會員登入</span>
        </Fragment>
    );
    const membersInside = (
        <Fragment>
            <p className="IconP">會員中心</p>
            <p className="IconP" onClick={goToStore}>我的賣場</p>
            {/* <link to='/AliceSellers'>我的賣場</link> */}
            <p className="IconP" onClick={logoutCallback}>登出</p>
        </Fragment>
    );
    useEffect(() => {
        // navbar
        let shop_btn = document.getElementById('shopping')
        let side_menu = document.getElementsByClassName('header-side-menu')[0]
        let page_cover = document.getElementsByClassName('nav-page-cover')[0]
        let menu_close = document.getElementsByClassName('side-menu-close')[0]
        shop_btn.addEventListener('click', () => {
            side_menu.classList.add('header-side-menu-active')
            page_cover.classList.add('nav-page-cover-active')
        })
        page_cover.addEventListener('click', () => {
            side_menu.classList.remove('header-side-menu-active')
            page_cover.classList.remove('nav-page-cover-active')
        })
        menu_close.addEventListener('click', () => {
            side_menu.classList.remove('header-side-menu-active')
            page_cover.classList.remove('nav-page-cover-active')
        })
    
        let nav_containers= document.getElementsByClassName('nav-containers')[0].classList,
            nav_right= document.getElementsByClassName('nav-right')[0].classList,
            menu_otis_menu= document.getElementsByClassName('menu-otis-menu')[0].classList,
        lastScrollY = 0;
        window.addEventListener('scroll', function(){
            var window_higth = this.scrollY;
            if( window_higth <= lastScrollY) {
                nav_containers.remove('hideUp');
                nav_right.remove('nav-add-width');
                menu_otis_menu.remove('menu_add_li');
            }else{
                nav_containers.add('hideUp');
                nav_right.add('nav-add-width');
                menu_otis_menu.add('menu_add_li');
            }
            // lastScrollY = window_higth;
            });
        }, [])


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
                                        <Link to="/" className="meaulist">
                                            <span>首頁</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/YyProduct" className="meaulist">
                                            <span>頭戴式耳機</span>
                                        </Link>
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
                                        <Link to="/YyProduct" className="meaulist">
                                            <span>耳戴式耳機</span>
                                        </Link>
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
                                        <Link to="/YyProduct" className="meaulist">
                                            <span>揚聲器</span>
                                        </Link>
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
                                        </div>
                                    </li>
                                    <li>
                                        <Link to="@" className="meaulist">
                                            <span>關於我們</span>
                                        </Link>
                                        <div className="inner hidden-meau">
                                        <ul>
                                            <li className="nav-menu-object">
                                                <i className="iconfont icon-gift"></i>
                                                <a href="/about/WiGift"><span>禮物卡</span></a>
                                            </li>
                                            <li className="nav-menu-object">
                                                <i className="iconfont icon-card"></i>
                                                <a href="/about/WiWarranty"><span>保固卡</span></a>
                                            </li>
                                            <li className="nav-menu-object">
                                                <i className="iconfont icon-user_2"></i>
                                                <a href="/about/WiAbout"><span>關於我們</span></a>
                                            </li>
                                            <li className="nav-menu-object">
                                                <i className="iconfont icon-message"></i>
                                                <a href="/about/WiConnect"><span>聯係我們</span></a>
                                            </li>
                                            <li className="nav-menu-object">
                                                <i className="iconfont icon-location"></i>
                                                <a href="/about/WiStore"><span>商店定位</span></a>
                                            </li>
                                            <li className="nav-menu-object">
                                                <i className="iconfont icon-warning"></i>
                                                <a href="/about/WiProblem"><span>常見問題</span></a>
                                            </li>
                                            <li className="nav-menu-object">
                                                <i className="iconfont icon-geren"></i>
                                                <a href="/about/WiOurClients"><span>我們的客戶</span></a>
                                            </li>
                                        </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <Link to="/Blog/YongBlog" className="meaulist">
                                            <span>BLOG</span>
                                        </Link>
                                        <div className="inner hidden-meau">
                                            <ul>
                                                <li className="nav-menu-object">
                                                    <i className="iconfont icon-blog"></i>
                                                    <Link to="/Blog/YongBlog" type="button"><span>所有 Blog</span></Link>
                                                </li>
                                                <li className="nav-menu-object">
                                                    <i className="iconfont icon-blog"></i>
                                                    <Link to="/Blog/YongMyBlog" type="button"><span>我的 Blog</span></Link>
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
                                    {/* <li>
                                        <div id="members" className="otis-members">
                                            <Link className="otis-login-opener" to="/AliceSellers">
                                                <Popover content={sellers} placement="bottom">
                                                    <span className="otis-login-text">
                                                        <i className="iconfont icon-geren"></i>
                                                    </span>
                                                </Popover>
                                            </Link>
                                        </div>
                                    </li> */}

                                    {/* 會員 */}
                                    <li>
                                        <div id="members" className="otis-members">
                                        { 
                                            memberData ? (<Fragment>
                                                                <Link className="otis-login-opener" to="/KMembers/">
                                                                    <Popover content={membersInside} placement="bottom">
                                                                        <span className="otis-login-text"><i className="iconfont icon-Personal"></i>{memberData.name}</span>
                                                                    </Popover>
                                                                </Link>
                                                            </Fragment>) : (<Link className="otis-login-opener" to="/KMembers/MembersLogin">
                                                                                <Popover content={membersOutside} placement="bottom">
                                                                                    <span className="otis-login-text"><i className="iconfont icon-Personal"></i></span>
                                                                                </Popover>
                                                                            </Link>) 
                                        }
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