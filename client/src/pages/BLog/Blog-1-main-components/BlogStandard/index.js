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

// -------------------- components --------------------
// 引入輪播牆
import BlogMainStandardSlide from '../BlogStandardSlide'
// 麵包削
import BlogCrumb from '../BlogCrumb'
// 引入Main
import BlogMainStandardList from '../../Blog-2-main/Blog-Main-Standard-1-List'
// 引入Aside
import BlogAsidePhoto from '../../Blog-2-Aside/Blog-Aside-1-Photo'
import BlogAsideCommunity from '../../Blog-2-Aside/Blog-Aside-2-Community'
import BlogAsideSubscribe from '../../Blog-2-Aside/Blog-Aside-3-subscribe'
import BlogAsideRecent from '../../Blog-2-Aside/Blog-Aside-4-Recent'

// -------------------- scss --------------------
// import './_menu.scss'
import '../../../../assets/scss/blog_standard.scss'

// -------------------- imgs --------------------

// -------------------- func --------------------

function BlogStandard(props) {
  const { userdata, setUserdata, name, setName } = props.allprops;
  return (
    <>
      <div className="blog-standard-spacing"></div>

      <div className="wrap-top">
        <BlogMainStandardSlide />
        <div className="blog-crumb">
          <Link to="../">首頁</Link>/<Link to="./YongBlog">部落格主頁</Link>
        </div>
      </div>

      <div className="wrap-mid">
        <div className="blog blog-d-flex">
          <div className="blog-main">
            <div className="blog-wellcome">
              <h2>歡迎來到Otis'耳機專門站部落格</h2>
              <p>
                這裡是Otis'耳機專門站為各位耳機使用者建立的部落格空間，以提供使用者交流之用，如使用心得、測試報告、時尚穿搭以及各種交流文章。這裡是Otis'耳機專門站為各位耳機使用者建立的部落格空間，以提供使用者交流之用，如使用心得、測試報告、時尚穿搭以及各種交流文章。這裡是Otis'耳機專門站為各位耳機使用者建立的部落格空間，以提供使用者交流之用，如使用心得、測試報告、時尚穿搭以及各種交流文章。這裡是Otis'耳機專門站為各位耳機使用者建立的部落格空間，以提供使用者交流之用，如使用心得、測試報告、時尚穿搭以及各種交流文章。
              </p>
            </div>
            <BlogMainStandardList
              allprops={{
                userdata,
                setUserdata,
                name,
                setName
              }}
            />
          </div>

          <div className="blog-aside">
            <BlogAsidePhoto />
            <BlogAsideCommunity />
            <BlogAsideSubscribe />
            <BlogAsideRecent />
          </div>
        </div>
      </div>
      <div className="blog-standard-spacing"></div>
    </>
  )
}
export default withRouter(BlogStandard)
