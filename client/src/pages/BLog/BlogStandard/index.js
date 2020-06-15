// 函式元件
import React, { Fragment, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    Link,
    NavLink,
    withRouter,
} from 'react-router-dom'
import '../../../assets/css/YongBlog/Yong-blog-standard.css'

import Swiper from "swiper"
import SwiperAnimation from '@cycjimmy/swiper-animation';
import "animate.css/animate.min.css";


// scss
// import './_menu.scss'

//imgs
import BlogCard from '../../../assets/img/blog_img/blog-standard/Blog-card.png'
import IconSearch from '../../../assets/img/blog_img/blog-standard/icon-search.svg'
import NextPage from '../../../assets/img/blog_img/blog-standard/next-page.svg'
import NextPageHover from '../../../assets/img/blog_img/blog-standard/next-page-hover.svg'
import Points from '../../../assets/img/blog_img/blog-standard/points.png'
import PrevPage from '../../../assets/img/blog_img/blog-standard/prev-page.svg'
import PrevPageHover from '../../../assets/img/blog_img/blog-standard/prev-page-hover.svg'
import slide from '../../../assets/img/blog_img/blog-standard/slide.png'
import top from '../../../assets/img/blog_img/blog-standard/top.png'
import WorldMap from '../../../assets/img/blog_img/blog-standard/world-map.png'

function BlogStandard(props) {
    return (
        <>
            <div className="spacing"></div>
            <div className="wrap-top">

                <div className="carouselWall">
                    <div className="imageWall">
                        <figure className="blog-standard-fig wallFig cover">
                            <img src={top} alt="" />
                        </figure>
                    </div>
                    <div className="slideWall">
                        <div className="slides slider-container" id="sliderContainer">
                            <ul className="list-unstyled slider-images d-flex position-absolute" id="sliderImages">
                                <li>
                                    <img className="slide-images" src={slide} alt="" />
                                </li>
                                <li>
                                    <img src={slide} alt="" />
                                </li>
                                <li>
                                    <img src={slide} alt="" />
                                </li>
                                <li>
                                    <img src={slide} alt="" />
                                </li>
                                <li>
                                    <img src={slide} alt="" />
                                </li>
                            </ul>
                            <ul className="list-unstyled position-absolute slider-dots d-flex justify-content-center"
                                id="sliderDots">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <a role="button" id="goNext" className="dir-btn position-absolute dir-right">
                                <i className="fas fa-chevron-right"></i>
                            </a>
                            <a role="button" id="goPrev" className="dir-btn position-absolute dir-left">
                                <i className="fas fa-chevron-left"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="breadcrumbs">
                    <h5>首頁 / 部落格 / 主頁</h5>
                </div>
            </div>

            <div className="wrap-mid">
        <div className="blog d-flex">
            <div className="main">
                <div className="blog-wellcome">
                    <h2>歡迎來到Otis'耳機專門站部落格</h2>
                    <p>這裡是Otis'耳機專門站為各位耳機使用者建立的部落格空間，以提供使用者交流之用，如使用心得、測試報告、時尚穿搭以及各種交流文章。這裡是Otis'耳機專門站為各位耳機使用者建立的部落格空間，以提供使用者交流之用，如使用心得、測試報告、時尚穿搭以及各種交流文章。這裡是Otis'耳機專門站為各位耳機使用者建立的部落格空間，以提供使用者交流之用，如使用心得、測試報告、時尚穿搭以及各種交流文章。這裡是Otis'耳機專門站為各位耳機使用者建立的部落格空間，以提供使用者交流之用，如使用心得、測試報告、時尚穿搭以及各種交流文章。
                    </p>
                </div>
                <div className="blog-btns d-flex justify-content-between">
                    <div className="blog-btns-left">
                        <Link to="../BlogStandard">全部文章</Link>
                        <Link to="../BlogUser">個人文章</Link>
                    </div>
                    <div className="blog-btns-right d-flex justify-content-between">
                        <select name="" id="">
                            <option value="0">依順序</option>
                            <option value="1">依順序</option>
                        </select>
                        <select name="" id="">
                            <option value="0">依最新發文</option>
                            <option value="1">依最舊發文</option>
                            <option value="2">依最後修改</option>
                            <option value="3">依最後回覆</option>
                        </select>
                        <figure className="cover"><img src={IconSearch} alt="" /></figure>
                    </div>
                </div>
                <div className="blog-list d-flex">
                    <div className="card">
                        <figure className="card-fig">
                            <img className="cover" src={BlogCard} alt="" />
                        </figure>
                        <div className="card-btns"></div>
                        <div className="card-title">文章標題</div>
                        <div className="card-content">
                            兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字
                        </div>
                        <div className="card-calendar">

                            <div className="card-calendar-in">
                                <h2>01</h2>
                                <h5>6月</h5>
                            </div>

                        </div>
                        <div className="read-more"><button className="read-more-btn">閱讀文章</button></div>
                    </div>
                    <div className="card">
                        <figure className="card-fig">
                            <img className="cover" src={BlogCard} alt="" />
                        </figure>
                        <div className="card-btns"></div>
                        <div className="card-title">文章標題</div>
                        <div className="card-content">兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字</div>
                        <div className="card-calendar">
                            <div className="card-calendar-in">
                                <h2>01</h2>
                                <h5>6月</h5>
                            </div>
                        </div>
                        <div className="read-more"><button className="read-more-btn">閱讀文章</button></div>
                    </div>
                    <div className="card">
                        <figure className="card-fig">
                            <img className="cover" src={BlogCard} alt="" />
                        </figure>
                        <div className="card-btns"></div>
                        <div className="card-title">文章標題</div>
                        <div className="card-content">兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字</div>
                        <div className="card-calendar">
                            <div className="card-calendar-in">
                                <h2>01</h2>
                                <h5>6月</h5>
                            </div>
                        </div>
                        <div className="read-more"><button className="read-more-btn">閱讀文章</button></div>
                    </div>
                    <div className="card">
                        <figure className="card-fig">
                            <img className="cover" src={BlogCard} alt="" />
                        </figure>
                        <div className="card-btns"></div>
                        <div className="card-title">文章標題</div>
                        <div className="card-content">兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字</div>
                        <div className="card-calendar">
                            <div className="card-calendar-in">
                                <h2>01</h2>
                                <h5>6月</h5>
                            </div>
                        </div>
                        <div className="read-more"><button className="read-more-btn">閱讀文章</button></div>
                    </div>
                    <div className="card">
                        <figure className="card-fig">
                            <img className="cover" src={BlogCard} alt="" />
                        </figure>
                        <div className="card-btns"></div>
                        <div className="card-title">文章標題</div>
                        <div className="card-content">兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字</div>
                        <div className="card-calendar">
                            <div className="card-calendar-in">
                                <h2>01</h2>
                                <h5>6月</h5>
                            </div>
                        </div>
                        <div className="read-more"><button className="read-more-btn">閱讀文章</button></div>
                    </div>
                    <div className="card">
                        <figure className="card-fig">
                            <img className="cover" src={BlogCard} alt="" />
                        </figure>
                        <div className="card-btns"></div>
                        <div className="card-title">文章標題</div>
                        <div className="card-content">兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字</div>
                        <div className="card-calendar">
                            <div className="card-calendar-in">
                                <h2>01</h2>
                                <h5>6月</h5>
                            </div>
                        </div>
                        <div className="read-more"><button className="read-more-btn">閱讀文章</button></div>
                    </div>
                    <div className="card">
                        <figure className="card-fig">
                            <img className="cover" src={BlogCard} alt="" />
                        </figure>
                        <div className="card-btns"></div>
                        <div className="card-title">文章標題</div>
                        <div className="card-content">兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字</div>
                        <div className="card-calendar">
                            <div className="card-calendar-in">
                                <h2>01</h2>
                                <h5>6月</h5>
                            </div>
                        </div>
                        <div className="read-more"><button className="read-more-btn">閱讀文章</button></div>
                    </div>
                    <div className="card">
                        <figure className="card-fig">
                            <img className="cover" src={BlogCard} alt="" />
                        </figure>
                        <div className="card-btns"></div>
                        <div className="card-title">文章標題</div>
                        <div className="card-content">兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字</div>
                        <div className="card-calendar">
                            <div className="card-calendar-in">
                                <h2>01</h2>
                                <h5>6月</h5>
                            </div>
                        </div>
                        <div className="read-more"><button className="read-more-btn">閱讀文章</button></div>
                    </div>
                    <div className="card">
                        <figure className="card-fig">
                            <img className="cover" src={BlogCard} alt="" />
                        </figure>
                        <div className="card-btns"></div>
                        <div className="card-title">文章標題</div>
                        <div className="card-content">兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字</div>
                        <div className="card-calendar">
                            <div className="card-calendar-in">
                                <h2>01</h2>
                                <h5>6月</h5>
                            </div>
                        </div>
                        <div className="read-more"><button className="read-more-btn">閱讀文章</button></div>
                    </div>
                    <div className="card">
                        <figure className="card-fig">
                            <img className="cover" src={BlogCard} alt="" />
                        </figure>
                        <div className="card-btns"></div>
                        <div className="card-title">文章標題</div>
                        <div className="card-content">兩行內容文字兩行內容文字兩行內容文字兩行內容文字兩行內容文字</div>
                        <div className="card-calendar">
                            <div className="card-calendar-in">
                                <h2>01</h2>
                                <h5>6月</h5>
                            </div>
                        </div>
                        <div className="read-more"><button className="read-more-btn">閱讀文章</button></div>
                    </div>



                </div>
                <div className="blog-standard-pages d-flex">
                    <div className="prev-page">
                        <img src={PrevPage} alt="" />
                    </div>
                    <div className="current-page">1</div>
                    <div className="current-page">2</div>
                    <div className="current-page">3</div>
                    <div className="mores">...</div>
                    <div className="next-page">
                        <img src={NextPage} alt="" />
                    </div>

                </div>
            </div>
            <div className="aside">
                <div className="post-map">
                    <button>我要發文</button>
                    <figure>
                        <img src={WorldMap} alt="" />
                    </figure>

                </div>
                <div className="user-icon">
                    <h2>關於我們</h2>
                    <figure className="user-icon-fig">
                        <img src="" alt=""/>
                    </figure>
                    <div className="link-btns d-flex">
                        <div className="link-one-btn">
                            <div className="linkFB"></div>
                            <h2>FACEBOOK</h2>
                        </div>
                        <div className="link-one-btn">
                            <div className="linkIG"></div>
                            <h2>INSTAGRAM</h2>
                        </div>
                        <div className="link-one-btn">
                            <div className="linkLINE"></div>
                            <h2>LINE</h2>
                        </div>



                    </div>

                </div>
                <div className="link-subscribe">
                    <div className="link-subscribe-border">
                        <h5>訂閱</h5>
                        <div className="link-subscribe-in d-flex justify-content-between">
                            <input type="text" placeholder="Email address" />
                            <button>
                                <img src={NextPageHover} alt="" />
                            </button>
                        </div>
                    </div>

                </div>
                <div className="recent-post">
                    <div className="recent-post-in">
                        <h2>相關文章</h2>
                        <div className="recent-post-in-one d-flex">
                            <div className="recent-post-in-one-img">
                            </div>
                            <div className="recent-post-in-one-txt">
                                <h4>文章標題文章標題</h4>
                                <h5>日期日期日期日期</h5>
                            </div>
                        </div>
                        <div className="recent-post-in-one d-flex">
                            <div className="recent-post-in-one-img">
                            </div>
                            <div className="recent-post-in-one-txt">
                                <h4>文章標題文章標題</h4>
                                <h5>日期日期日期日期</h5>
                            </div>
                        </div>
                        <div className="recent-post-in-one d-flex">
                            <div className="recent-post-in-one-img">
                            </div>
                            <div className="recent-post-in-one-txt">
                                <h4>文章標題文章標題</h4>
                                <h5>日期日期日期日期</h5>
                            </div>
                        </div>
                        <div className="recent-post-in-one d-flex">
                            <div className="recent-post-in-one-img">
                            </div>
                            <div className="recent-post-in-one-txt">
                                <h4>文章標題文章標題</h4>
                                <h5>日期日期日期日期</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

        </>
    )
}
export default withRouter(BlogStandard)
