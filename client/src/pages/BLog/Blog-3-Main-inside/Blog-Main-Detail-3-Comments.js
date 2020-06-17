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

//imgs
import CaretDown from '../../../assets/img/blog-img/blog-detail/caret-down-solid.svg'

// scss
// import './_menu.scss'

function BlogMainDetailComments(props) {
  return (
    <>
      <div className="comments">
        <h2>3篇 評論</h2>
        <div className="comment-one-list">
          <div className="comment-one">
            <div className="comment-one-in d-flex">
              <div className="user-post-icon">
                <figure className="user-post-fig"></figure>
                <button className="list-reply d-flex">
                  <figure className="user-list-reply-fig">
                    <img src={CaretDown} alt="" />
                  </figure>
                  <h5>回覆</h5>
                </button>
              </div>
              <div className="user-post-content">
                <h2 className="user-post-name">發文者暱稱</h2>
                <h5 className="user-post-date">發文日期</h5>
                <p>
                  發文內容發文內容發文內容發文內容
                  發文內容發文內容發文內容發文內容
                  發文內容發文內容發文內容發文內容
                  發文內容發文內容發文內容發文內容
                  發文內容發文內容發文內容發文內容
                  發文內容發文內容發文內容發文內容
                  發文內容發文內容發文內容發文內容
                  發文內容發文內容發文內容發文內容
                  發文內容發文內容發文內容發文內容
                  發文內容發文內容發文內容發文內容
                </p>

                <button className="post-reply">回覆</button>
              </div>
            </div>
          </div>
          <div className="comment-reply">
            <div className="comment-reply-in d-flex">
              <div className="user-reply-icon">
                <figure className="user-reply-fig"></figure>
              </div>
              <div className="user-reply-content">
                <h2 className="user-reply-name">回覆者暱稱</h2>
                <h5 className="user-reply-date">回覆日期</h5>
                <p>
                  回覆內容回覆內容回覆內容回覆內容
                  回覆內容回覆內容回覆內容回覆內容
                  回覆內容回覆內容回覆內容回覆內容
                  回覆內容回覆內容回覆內容回覆內容
                  回覆內容回覆內容回覆內容回覆內容
                  回覆內容回覆內容回覆內容回覆內容
                  回覆內容回覆內容回覆內容回覆內容
                  回覆內容回覆內容回覆內容回覆內容
                  回覆內容回覆內容回覆內容回覆內容
                  回覆內容回覆內容回覆內容回覆內容
                </p>
                <button className="reply-reply">回覆</button>
              </div>
            </div>
          </div>
        </div>
        <div className="comment-one-list">
          <div className="comment-one">
            <div className="comment-one-in d-flex">
              <div className="user-post-icon">
                <figure className="user-post-fig"></figure>
                <button className="list-reply d-flex">
                  <figure className="user-list-reply-fig">
                    <img src={CaretDown} alt="" />
                  </figure>
                  <h5>回覆</h5>
                </button>
              </div>
              <div className="user-post-content">
                <h2 className="user-post-name">發文者暱稱</h2>
                <h5 className="user-post-date">發文日期</h5>
                <p>
                  發文內容發文內容發文內容發文內容
                  發文內容發文內容發文內容發文內容
                  發文內容發文內容發文內容發文內容
                  發文內容發文內容發文內容發文內容
                  發文內容發文內容發文內容發文內容
                  發文內容發文內容發文內容發文內容
                  發文內容發文內容發文內容發文內容
                  發文內容發文內容發文內容發文內容
                  發文內容發文內容發文內容發文內容
                  發文內容發文內容發文內容發文內容
                </p>

                <button className="post-reply">回覆</button>
              </div>
            </div>
          </div>
          <div className="comment-reply">
            <div className="comment-reply-in d-flex">
              <div className="user-reply-icon">
                <figure className="user-reply-fig"></figure>
              </div>
              <div className="user-reply-content">
                <h2 className="user-reply-name">回覆者暱稱</h2>
                <h5 className="user-reply-date">回覆日期</h5>
                <p>
                  回覆內容回覆內容回覆內容回覆內容
                  回覆內容回覆內容回覆內容回覆內容
                  回覆內容回覆內容回覆內容回覆內容
                  回覆內容回覆內容回覆內容回覆內容
                  回覆內容回覆內容回覆內容回覆內容
                  回覆內容回覆內容回覆內容回覆內容
                  回覆內容回覆內容回覆內容回覆內容
                  回覆內容回覆內容回覆內容回覆內容
                  回覆內容回覆內容回覆內容回覆內容
                  回覆內容回覆內容回覆內容回覆內容
                </p>
                <button className="reply-reply">回覆</button>
              </div>
            </div>
          </div>
        </div>
        <div className="comment-one-list">
          <div className="comment-one">
            <div className="comment-one-in d-flex">
              <div className="user-post-icon">
                <figure className="user-post-fig"></figure>
                <button className="list-reply d-flex">
                  <figure className="user-list-reply-fig">
                    <img src={CaretDown} alt="" />
                  </figure>
                  <h5>回覆</h5>
                </button>
              </div>
              <div className="user-post-content">
                <h2 className="user-post-name">發文者暱稱</h2>
                <h5 className="user-post-date">發文日期</h5>
                <p>
                  發文內容發文內容發文內容發文內容
                  發文內容發文內容發文內容發文內容
                  發文內容發文內容發文內容發文內容
                  發文內容發文內容發文內容發文內容
                  發文內容發文內容發文內容發文內容
                  發文內容發文內容發文內容發文內容
                  發文內容發文內容發文內容發文內容
                  發文內容發文內容發文內容發文內容
                  發文內容發文內容發文內容發文內容
                  發文內容發文內容發文內容發文內容
                </p>

                <button className="post-reply">回覆</button>
              </div>
            </div>
          </div>
          <div className="comment-reply">
            <div className="comment-reply-in d-flex">
              <div className="user-reply-icon">
                <figure className="user-reply-fig"></figure>
              </div>
              <div className="user-reply-content">
                <h2 className="user-reply-name">回覆者暱稱</h2>
                <h5 className="user-reply-date">回覆日期</h5>
                <p>
                  回覆內容回覆內容回覆內容回覆內容
                  回覆內容回覆內容回覆內容回覆內容
                  回覆內容回覆內容回覆內容回覆內容
                  回覆內容回覆內容回覆內容回覆內容
                  回覆內容回覆內容回覆內容回覆內容
                  回覆內容回覆內容回覆內容回覆內容
                  回覆內容回覆內容回覆內容回覆內容
                  回覆內容回覆內容回覆內容回覆內容
                  回覆內容回覆內容回覆內容回覆內容
                  回覆內容回覆內容回覆內容回覆內容
                </p>
                <button className="reply-reply">回覆</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="spacing"></div>
      <div className="add-comment">
        <div className="add-comment-title d-flex">
          <h2>發表評論，從</h2>
          <figure>
            <img src="" alt="" />
          </figure>
          <h5>乖乖</h5>
        </div>
        <div className="add-comment-textarea">
          <textarea name="" id=""></textarea>
        </div>

        <div className="add-comment-btns d-flex justify-content-between">
          <button>發表評論</button>
          <button>登出</button>
        </div>
      </div>
    </>
  )
}
export default withRouter(BlogMainDetailComments)
