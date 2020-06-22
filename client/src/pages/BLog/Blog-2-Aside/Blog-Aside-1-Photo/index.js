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
import WorldMap from '../../../../assets/img/blog-img/blog-standard/world-map.png'

// -------------------- func --------------------

function BlogAsidePhoto(props) {
  return (
    <>
      <div className="post-map">
        <button className="i-want-post" onClick={() => props.history.push('/Blog/BlogAdd')}>我要發文</button>
        <figure>
          <img src={WorldMap} alt="" />
        </figure>
      </div>
    </>
  )
}
export default withRouter(BlogAsidePhoto)
