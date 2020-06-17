// 函式元件
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link, NavLink, withRouter } from "react-router-dom"
import '../../../assets/css/YongBlog/Yong-blog-add.css'


// components
import MyNavBar from '../../../components/Navbar'
import MyMenu from '../../../components/NavbarMenu'
import MyFooter from '../../../components/Footer'


import WorldMap from '../../../assets/img/blog-img/blog-standard/world-map.png'
import NextPageHover from '../../../assets/img/blog-img/blog-standard/next-page-hover.svg'

// scss
// import './_menu.scss'

function BlogAdd(props) {
    return (
        <>
        <header>
                <MyNavBar />
                <MyMenu />
            </header>
<div className="add-spacing"></div>
            <div class="wrap-top">
                <div class="breadcrumbs">
                    <h5>首頁 / 部落格 / 新增文章</h5>
                </div>
            </div>
            <div class="wrap-mid">
                <div class="blog-add d-flex">
                    <div class="blog-add-main">

                        <figure class="add-top-img">
                            <h1>部落格新增頁</h1>
                        </figure>
                        <div class="blog-add-in">
                            <h1>撰寫部落格</h1>
                            <div class="underline-1"></div>
                            <h2 class="title-h2">文章標題</h2>
                            <input class="input-title" type="text" name="" id="" />
                            <h2 class="first-h2">第一篇文章</h2>
                            <textarea name="" id=""></textarea>
                            <div class="btn-and-info d-flex">
                                <input type="file" class="btn-and-info-input" name="" id="" />
                                <div class="blog-add-info"></div>
                                <div class="blog-add-info"></div>
                                <div class="blog-add-info"></div>
                            </div>
                            <div class="upload-imgs">
                                <figure>
                                    <img src="" alt="" />
                                </figure>
                                <figure>
                                    <img src="" alt="" />
                                </figure>
                            </div>
                            <h2 class="second-h2">第二篇文章</h2>
                            <textarea name="" id=""></textarea>
                            <div class="btn-and-info d-flex">
                                <input type="file" class="btn-and-info-input" name="" id="" />
                                <div class="blog-add-info"></div>
                                <div class="blog-add-info"></div>
                                <div class="blog-add-info"></div>
                            </div>
                            <div class="upload-imgs">
                                <figure>
                                    <img src="" alt="" />
                                </figure>
                                <figure>
                                    <img src="" alt="" />
                                </figure>
                            </div>
                            <button class="blog-add-submit">送出</button>
                        </div>


                    </div>
                    <div class="blog-add-aside">
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

                        </div>


                    </div>
                </div>
            </div>
            <div className="add-spacing"></div>
            <MyFooter />
        </>
    )

}
export default withRouter(BlogAdd);