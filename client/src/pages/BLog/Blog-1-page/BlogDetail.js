// 函式元件
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link, NavLink, withRouter } from "react-router-dom"
import '../../../assets/css/YongBlog/Yong-blog-detail.css'


// components
import MyNavBar from '../../../components/Navbar'
import MyMenu from '../../../components/NavbarMenu'
import MyFooter from '../../../components/Footer'


import DetailSample1 from '../../../assets/img/blog-img/blog-detail/blog-detail-sample-1.jpg'
import DetailSample2 from '../../../assets/img/blog-img/blog-detail/blog-detail-sample-2.jpg'
import CaretDown from '../../../assets/img/blog-img/blog-detail/caret-down-solid.svg'
import WorldMap from '../../../assets/img/blog-img/blog-standard/world-map.png'
import NextPageHover from '../../../assets/img/blog-img/blog-standard/next-page-hover.svg'


// scss
// import './_menu.scss'

function BlogDetail(props) {
    return (
        <>
            <header>
                <MyNavBar />
                <MyMenu />
            </header>
            <div className="spacing"></div>
            <div class="wrap-top">
                <div class="breadcrumbs">
                    <h5>首頁 / 部落格 / 會員A / 文章C</h5>
                </div>
            </div>
            <div class="wrap-mid">
                <div class="blog-detail d-flex">
                    <div class="art-main">
                        


                        
                    </div>
                    <div class="art-aside">
                        <div class="post-map">
                            <button>我要發文</button>
                            <figure>
                                <img src={WorldMap} alt="" />
                            </figure>

                        </div>
                        <div class="user-icon">
                            <h2>關於我</h2>
                            <figure class="user-icon-fig">
                                <img src="" alt="" />
                            </figure>
                            <h2>乖乖</h2>
                            <div class="link-btns d-flex">
                                <div class="link-one-btn">
                                    <div class="linkFB"></div>
                                    <h2>FACEBOOK</h2>
                                </div>
                                <div class="link-one-btn">
                                    <div class="linkIG"></div>
                                    <h2>INSTAGRAM</h2>
                                </div>
                                <div class="link-one-btn">
                                    <div class="linkLINE"></div>
                                    <h2>LINE</h2>
                                </div>
                            </div>
                        </div>
                        <div class="link-subscribe">
                            <div class="link-subscribe-border">
                                <h5>訂閱</h5>
                                <div class="link-subscribe-in d-flex justify-content-between">
                                    <input type="text" placeholder="Email address" />
                                    <button>
                                        <img src={NextPageHover} alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="recent-post">
                            <div class="recent-post-in">
                                <h2>相關文章</h2>
                                <div class="recent-post-in-one d-flex">
                                    <div class="recent-post-in-one-img">
                                    </div>
                                    <div class="recent-post-in-one-txt">
                                        <h4>文章標題文章標題</h4>
                                        <h5>日期日期日期日期</h5>
                                    </div>
                                </div>
                                <div class="recent-post-in-one d-flex">
                                    <div class="recent-post-in-one-img">
                                    </div>
                                    <div class="recent-post-in-one-txt">
                                        <h4>文章標題文章標題</h4>
                                        <h5>日期日期日期日期</h5>
                                    </div>
                                </div>
                                <div class="recent-post-in-one d-flex">
                                    <div class="recent-post-in-one-img">
                                    </div>
                                    <div class="recent-post-in-one-txt">
                                        <h4>文章標題文章標題</h4>
                                        <h5>日期日期日期日期</h5>
                                    </div>
                                </div>
                                <div class="recent-post-in-one d-flex">
                                    <div class="recent-post-in-one-img">
                                    </div>
                                    <div class="recent-post-in-one-txt">
                                        <h4>文章標題文章標題</h4>
                                        <h5>日期日期日期日期</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spacing"></div>
            <MyFooter />
        </>
    )

}
export default withRouter(BlogDetail);