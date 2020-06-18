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

import '../../../assets/css/YongBlog/Yong-blog-edit.css'

// components

// scss
// import './_menu.scss'

function BlogMainEditInputs(props) {
  return (
    <>
      <figure class="blog-edit-top-img">
        <h1>部落格編輯頁</h1>
      </figure>
      <div class="blog-edit-in">
        <h1>編輯部落格</h1>
        <div class="underline-1"></div>
        <h2 class="title-h2">文章標題</h2>
        <input class="input-title" type="text" name="" id="" />
        <h2 class="first-h2">第一篇文章</h2>
        <textarea name="" id=""></textarea>
        <div class="btn-and-info d-flex">
          <input type="file" class="btn-and-info-input" name="" id="" />
          <div class="blog-edit-info"></div>
          <div class="blog-edit-info"></div>
          <div class="blog-edit-info"></div>
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
          <div class="blog-edit-info"></div>
          <div class="blog-edit-info"></div>
          <div class="blog-edit-info"></div>
        </div>
        <div class="upload-imgs">
          <figure>
            <img src="" alt="" />
          </figure>
          <figure>
            <img src="" alt="" />
          </figure>
        </div>
        <button class="blog-edit-submit">送出</button>
      </div>
    </>
  )
}
export default withRouter(BlogMainEditInputs)
