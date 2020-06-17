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

import WorldMap from '../../../assets/img/blog-img/blog-standard/world-map.png'

// components

// scss
// import './_menu.scss'

function BlogAsidePhoto(props) {
  return (
    <>
      <div className="post-map">
        <button>我要發文</button>
        <figure>
          <img src={WorldMap} alt="" />
        </figure>
      </div>
    </>
  )
}
export default withRouter(BlogAsidePhoto)
