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

// -------------------- scss --------------------

// -------------------- imgs --------------------

// -------------------- func --------------------

function BlogAsideCommunity(props) {
  return (
    <>
      <div className="user-icon">
        <h2>關於我們</h2>
        <figure className="user-icon-fig">
          <img src="" alt="" />
        </figure>
        <div className="link-btns blog-d-flex">
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
    </>
  )
}
export default withRouter(BlogAsideCommunity)
