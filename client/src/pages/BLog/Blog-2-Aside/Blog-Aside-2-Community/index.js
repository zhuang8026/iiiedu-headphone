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
import iconFb from '../../../../assets/img/blog-img/blog-aside/iconFb.png'
import iconFb_h from '../../../../assets/img/blog-img/blog-aside/iconFb_h.png'
import iconIg from '../../../../assets/img/blog-img/blog-aside/iconIg.png'
import iconIg_h from '../../../../assets/img/blog-img/blog-aside/iconIg_h.png'
import iconLine from '../../../../assets/img/blog-img/blog-aside/iconLine.png'
import iconLine_h from '../../../../assets/img/blog-img/blog-aside/iconLine_h.png'

// -------------------- func --------------------

function BlogAsideCommunity(props) {
  const {userdata} = props;
  console.log(userdata)
  return (
    <>
      <div className="user-icon">
        <h2>關於我們</h2>
        <figure className="user-icon-fig">
          <img src={`/user_img/${userdata.userlogo}`} alt="" />
        </figure>
        <div className="link-btns blog-d-flex">
          <div className="link-one-btn">            
            <figure className="linkFB">
              {/* <img src={`/blog-aside/${iconFb.png}`}></img> */}
              <img className="linkFB_h blog-cover" src={iconFb}></img>
            </figure>
            <h2>FACEBOOK</h2>
          </div>
          <div className="link-one-btn">            
            <figure className="linkIG">
              <img className="linkIG_h blog-cover" src={iconIg}></img>
            </figure>
            <h2>INSTAGRAM</h2>
          </div>
          <div className="link-one-btn">            
            <figure className="linkLINE">
              <img className="linkLINE_h blog-cover" src={iconLine}></img>
            </figure>
            <h2>LINE</h2>
          </div>
        </div>
      </div>
    </>
  )
}
export default withRouter(BlogAsideCommunity)
