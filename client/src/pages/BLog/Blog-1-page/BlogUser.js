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
import '../../../assets/css/YongBlog/Yong-blog-user.css'

import BlogMainListByUser from '../Blog-2-main/Blog-Main-2-ListByUser'

// scss
// import './_menu.scss'

//imgs
import BlogCard from '../../../assets/img/blog_img/blog-standard/Blog-card.png'
import IconSearch from '../../../assets/img/blog_img/blog-standard/icon-search.svg'
import NextPage from '../../../assets/img/blog-img/blog-standard/next-page.svg'
import NextPageHover from '../../../assets/img/blog-img/blog-standard/next-page-hover.svg'
import Points from '../../../assets/img/blog-img/blog-standard/points.png'
import PrevPage from '../../../assets/img/blog-img/blog-standard/prev-page.svg'
import PrevPageHover from '../../../assets/img/blog-img/blog-standard/prev-page-hover.svg'
import slide from '../../../assets/img/blog-img/blog-standard/slide.png'
import top from '../../../assets/img/blog-img/blog-standard/top.png'
import WorldMap from '../../../assets/img/blog-img/blog-standard/world-map.png'

function BlogUser(props) {
  return (
    <>
      <div className="spacing"></div>
      <div className="wrap-top">
        <div className="breadcrumbs">
          <h5>首頁 / 部落格 / 主頁</h5>
        </div>
      </div>

      <div className="wrap-mid">
        <div className="blog d-flex">
          <div className="blog-main">
            <div className="blog-wellcome">
              <h2>歡迎來到Otis'耳機專門站部落格</h2>
              <p>
                這裡是Otis'耳機專門站為各位耳機使用者建立的部落格空間，以提供使用者交流之用，如使用心得、測試報告、時尚穿搭以及各種交流文章。這裡是Otis'耳機專門站為各位耳機使用者建立的部落格空間，以提供使用者交流之用，如使用心得、測試報告、時尚穿搭以及各種交流文章。這裡是Otis'耳機專門站為各位耳機使用者建立的部落格空間，以提供使用者交流之用，如使用心得、測試報告、時尚穿搭以及各種交流文章。這裡是Otis'耳機專門站為各位耳機使用者建立的部落格空間，以提供使用者交流之用，如使用心得、測試報告、時尚穿搭以及各種交流文章。
              </p>
            </div>
            <BlogMainListByUser />
          </div>
          <div className="blog-aside">
            <div className="post-map">
              <button>我要發文</button>
              <figure>
                <img src={WorldMap} alt="" />
              </figure>
            </div>
            <div className="user-icon">
              <h2>關於我們</h2>
              <figure className="user-icon-fig">
                <img src="" alt="" />
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
                  <div className="recent-post-in-one-img"></div>
                  <div className="recent-post-in-one-txt">
                    <h4>文章標題文章標題</h4>
                    <h5>日期日期日期日期</h5>
                  </div>
                </div>
                <div className="recent-post-in-one d-flex">
                  <div className="recent-post-in-one-img"></div>
                  <div className="recent-post-in-one-txt">
                    <h4>文章標題文章標題</h4>
                    <h5>日期日期日期日期</h5>
                  </div>
                </div>
                <div className="recent-post-in-one d-flex">
                  <div className="recent-post-in-one-img"></div>
                  <div className="recent-post-in-one-txt">
                    <h4>文章標題文章標題</h4>
                    <h5>日期日期日期日期</h5>
                  </div>
                </div>
                <div className="recent-post-in-one d-flex">
                  <div className="recent-post-in-one-img"></div>
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
export default withRouter(BlogUser)
