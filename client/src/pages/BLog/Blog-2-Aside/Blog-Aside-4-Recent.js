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

// components

// scss
// import './_menu.scss'

function BlogAsideRecent(props) {
  return (
    <>
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
    </>
  )
}
export default withRouter(BlogAsideRecent)
