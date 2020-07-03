// 函式元件
import React, { Fragment, useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom'

// antd Popover message
import { Popover } from 'antd';
import { message } from 'antd';

// logo 
import OtisGif from "../../assets/img/Otis.gif";
import OtisPng from "../../assets/img/OtisMobile.png";

// nav img 
import {NavItems} from './config';
import {NavIcon} from './config';
import {NavItemsAir} from './config';


function MyNavBar(props) {
    const {lovechange, setlovechange, compareschange, setcompareschange, cartchange, setcartchange, setItemsdata} = props;

    const memberData = JSON.parse(localStorage.getItem('memberData'))

    const love = JSON.parse(localStorage.getItem('love'))
    const compares = JSON.parse(localStorage.getItem('compare'))
    const cart = JSON.parse(localStorage.getItem('cart'))

    // console.log('love',love);
    // console.log('compare',compares);

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
                localStorage.removeItem('memberData');
                setTimeout(()=>{
                    message.success(`${obj['message']}`);
                    props.history.push('/')
                },1000)
                // props.history.goBack()
            })
    }

    // 模糊搜尋
    const fuzzySearch = ( data )=> {
        // console.log(data)
        var params = new URLSearchParams();
        params.append('keyword', data);
        // console.log(params.toString());
        // console.log(params.get('getname'));

        let keyword = params.get('keyword') || data
        fetch(`http://localhost:3009/products/search/${keyword}`, {
            method: 'get',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            })
        })
            .then((res)=>{
                return res.json()
            })
            .then((res)=>{
                // console.log(res)
                setItemsdata(res)
                props.history.push('/YyProduct/?keyword='+keyword)
                // props.history.push('/YyProduct/?keyword='+keyword,{keyword})
                // props.history.push('/YyProduct/')
            })
    }

    const loves = (
        <Fragment>
            <span className="IconP">我的最愛</span>
        </Fragment>
    );
    const compare = (
        <Fragment>
            <span className="IconP">商品比較</span>
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
            <Link className="otis-login-opener" to="/KMembers/">
                <p className="IconP">會員中心</p>
            </Link>
            <Link className="otis-login-opener" to="/SuperSeller">
                <p className="IconP">我的賣場</p>
            </Link>
            <p className="IconP" onClick={logoutCallback}>登出</p>
        </Fragment>
    );

    const mobileErrorcallback =(e)=>{
        document.getElementById('mobile_menu').classList.remove('mobile-menu-active');
        e.stopPropagation();  
    }

    const mobileMenucallback =()=>{
    
    }

    const mobileMenuClickcallback =()=>{
        setTimeout(()=>{document.getElementById('mobile_menu').classList.remove('mobile-menu-active');},1500)
    }

    useEffect(()=>{
        setlovechange(love)
        setcompareschange(compares)
        setcartchange(cart)
    },[])

    useEffect(() => {
        // navbar pc
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

        document.getElementsByClassName('mobile_iconInner_items')[0].addEventListener('click',()=>{
            document.getElementById('mobile_menu').classList.add('mobile-menu-active');
        })

        // navbar move
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
            {/* pc navbar */}
            <div className="nav-page-header">
                {/* 遮招層 */}
                <div className="nav-page-cover"></div>
                {/* nav body */}
                <div className="nav-containers">
                    <div className="nav-left">
                        <Link to="/">
                            <figure>
                                <img src={OtisGif} alt="logo" />
                            </figure>
                        </Link>
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
                                                <Link to="/about/WiGift"><span>禮物卡</span></Link>
                                            </li>
                                            <li className="nav-menu-object">
                                                <i className="iconfont icon-card"></i>
                                                <Link to="/about/WiWarranty"><span>保固卡</span></Link>
                                            </li>
                                            <li className="nav-menu-object">
                                                <i className="iconfont icon-user_2"></i>
                                                <Link to="/about/WiAbout"><span>關於我們</span></Link>
                                            </li>
                                            <li className="nav-menu-object">
                                                <i className="iconfont icon-message"></i>
                                                <Link to="/about/WiConnect"><span>聯係我們</span></Link>
                                            </li>
                                            <li className="nav-menu-object">
                                                <i className="iconfont icon-location"></i>
                                                <Link to="/about/WiStore"><span>商店定位</span></Link>
                                            </li>
                                            <li className="nav-menu-object">
                                                <i className="iconfont icon-warning"></i>
                                                <Link to="/about/WiProblem"><span>常見問題</span></Link>
                                            </li>
                                            <li className="nav-menu-object">
                                                <i className="iconfont icon-geren"></i>
                                                <Link to="/about/WiOurClients"><span>我們的客戶</span></Link>
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
                                            <div
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
                                                    name="homeNavSearch"
                                                    title="Search for:"
                                                    // onChange={ (event)=>{ fuzzySearch(event.target.value) } }
                                                    // onClick={ (event)=>{ fuzzySearch(event.target.value) } }
                                                    onKeyPress={ (event)=>{ 
                                                        if(event.which == 13 || event.keyCode == 13) {
                                                            event.preventDefault();
                                                            fuzzySearch(event.target.value)
                                                        }
                                                    } }
                                                />
                                                <button 
                                                    type="sumbit" 
                                                    className="otis-search-submit"
                                                >
                                                    <i className="iconfont icon-search"></i>
                                                </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    {/* 會員 */}
                                    <li>
                                        <div id="members" className="otis-members">
                                        { 
                                            memberData ? (
                                                <Fragment>
                                                    {/* <Link className="otis-login-opener" to="/KMembers/"> */}
                                                        <Popover content={membersInside} placement="bottom">
                                                            <span className="otis-login-text"><i className="iconfont icon-Personal"></i>{memberData.name}</span>
                                                        </Popover>
                                                    {/* </Link> */}
                                                </Fragment>
                                            ) : (
                                                <Link className="otis-login-opener" to="/KMembers/MembersLogin">
                                                    <Popover content={membersOutside} placement="bottom">
                                                        <span className="otis-login-text"><i className="iconfont icon-Personal"></i></span>
                                                    </Popover>
                                                </Link>
                                            ) 
                                        }
                                        </div>
                                    </li>
                                    
                                    {/* 我的最愛 */}
                                    <li>
                                        <div id="wishlist" className="otis-wishlist">
                                            <Link className="otis-wishlist-widget-link" to='/MyFav'>
                                                <Popover content={loves} placement="bottom">
                                                    <span className="otis-wishlist-widget-icon">
                                                        <i className="iconfont icon-like"></i>
                                                    </span>
                                                    <span className="otis-wishlist-widget-count"> {lovechange?lovechange.length: '0'} </span>
                                                </Popover>
                                            </Link>
                                        </div>
                                    </li>
                                    
                                    {/* 比較功能 */}
                                    <li>
                                        <div id="wishlist" className="otis-wishlist">
                                            <Link className="otis-wishlist-widget-link" to='/Compare'>
                                                <Popover content={compare} placement="bottom">
                                                    <span className="otis-wishlist-widget-icon">
                                                        <i className="iconfont icon-binding"></i>
                                                    </span>
                                                    <span className="otis-wishlist-widget-count"> {compareschange?compareschange.length: '0'} </span>
                                                </Popover>
                                            </Link>
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
                                                        <span className="otis-sc-opener-count"> {cartchange? cartchange.length: '0'} </span>
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
            
            {/* mobile navbar */}
            <div className="mobile_logo">
                <img src={OtisPng}/>
            </div>
            <div className="mobile_page_header">
                <div className="mobile_page_header_inner">
                    <div className="mobile_page_header_iconInner">
                        <ul className="mobile_iconInner_ul">
                            <li className="mobile_iconInner_li">
                                <Link to="/">
                                    <i className="iconfont icon-home mobileIcon"></i>
                                </Link>
                            </li>
                            <li className="mobile_iconInner_li mobile_iconInner_items">
                                <a>
                                    <i className="iconfont icon-date mobileIcon"></i>
                                </a>
                                {/* mobile_menu */}
                                <div className="mobile_menu" id="mobile_menu">
                                    <span 
                                        className="iconfont icon-error mobileError"
                                        onClick={(e)=>{ mobileErrorcallback(e) }}
                                    ></span>
                                    <ul className="mobile_menu_ul">
                                        <li>
                                            <div 
                                                className="mobile_menu_title"
                                                onClick={(e)=>{ mobileMenucallback(e) }}
                                            >
                                                <h2>頭戴式耳機</h2>
                                            </div>
                                            <div className="mobile_menu_Inner mobile_hide" onClick={()=>{ mobileMenuClickcallback() }}>
                                                { NavIcon.map((data, index)=>{
                                                    return (
                                                        <p key={index}><Link to={data.linkUrl}>{data.name}</Link></p>
                                                    )
                                                }) }
                                            </div>
                                        </li>
                                        <li>
                                            <div className="mobile_menu_title">
                                                <h2>入耳式耳機</h2>
                                            </div>
                                            <div className="mobile_menu_Inner">
                                                { NavIcon.map((data, index)=>{
                                                    return (
                                                        <p key={index}>
                                                            <Link to={data.linkUrl}>{data.name}</Link>
                                                        </p>
                                                    )
                                                }) }
                                            </div>
                                        </li>
                                        <li>
                                            <div className="mobile_menu_title">
                                                <h2>揚聲器</h2>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="mobile_iconInner_li">
                                <Link to="/MyCart">
                                    <i className="iconfont icon-cart mobileIcon"></i>
                                </Link>
                            </li>
                            <li className="mobile_iconInner_li">
                                <Link to="/Compare">
                                    <i className="iconfont icon-like mobileIcon"></i>
                                </Link>
                            </li>
                            <li className="mobile_iconInner_li">
                                <Link to="/KMembers/MembersLogin">
                                    <i className="iconfont icon-Personal mobileIcon"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default withRouter(MyNavBar);