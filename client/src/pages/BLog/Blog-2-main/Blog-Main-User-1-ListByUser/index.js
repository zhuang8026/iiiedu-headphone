// 函式元件
import React, { Fragment, useEffect, useState } from 'react'


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
import BlogCard from '../../../../assets/img/blog-img/blog-standard/Blog-card.png'
import IconSearch from '../../../../assets/img/blog-img/blog-standard/icon-search.svg'
import NextPage from '../../../../assets/img/blog-img/blog-standard/next-page.svg'
import PrevPage from '../../../../assets/img/blog-img/blog-standard/prev-page.svg'
import Pan from '../../../../assets/img/blog-img/blog-standard/pan.svg'
import TrashBarrel from '../../../../assets/img/blog-img/blog-standard/trashBarrel.svg'
import NextPageHover from '../../../../assets/img/blog-img/blog-standard/next-page-hover.svg'
import PrevPageHover from '../../../../assets/img/blog-img/blog-standard/prev-page-hover.svg'

// -------------------- func --------------------

function BlogMainUserListByUser(props) {

  const [listUserBlogdata, setlistUserBlogdata] = useState([])

  useEffect(() => {
    fetch('http://localhost:3009/blog/listUserBlog/2/1', {
      method: 'get',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }),
    })
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        console.log(response.rows)
        setlistUserBlogdata(response.rows)
      })
  }, [])


  return (
    <>
      <div className="blog-btns blog-d-flex blog-justify-content-between">
        <div className="blog-btns-left">
          <button className="blog-btns-left-Link" onClick={() => props.history.push('/Blog/YongBlog')}>
            全部文章
          </button>

          <button className="blog-btns-left-Link" onClick={() => props.history.push('/Blog/YongMyBlog')}>
            個人文章
          </button>
        </div>
        <div className="blog-btns-right blog-d-flex blog-justify-content-between">

          <select name="" id="">
            <option value="0">依最新發文</option>
            <option value="1">依最舊發文</option>
            <option value="2">依最新修改</option>
            <option value="3">依最新回覆</option>
          </select>
          <figure className="blog-cover">
            <img src={IconSearch} alt="" />
          </figure>
        </div>
      </div>
      <div className="blog-list blog-d-flex">
        {listUserBlogdata.map((data, index) => {
          console.log(data)
          return (
            <div className="blog-card">
              <div className="blog-card-in">


                <figure className="blog-card-fig">
                  <img className="blog-cover" src={BlogCard} alt="" />
                </figure>
                <div className="blog-card-btns blog-d-flex blog-justify-content-between">
                  <figure>
                    <img src={Pan}></img>
                  </figure>
                  <figure>
                    <img src={TrashBarrel}></img>
                  </figure>

                </div>
                <div className="blog-card-title">{data.blogTitle}</div>
                <div className="blog-card-content">{data.blogContent01}</div>
                <div className="blog-card-calendar">
                  <div className="blog-card-calendar-in">
                    <h2>01</h2>
                    <h5>6月</h5>
                  </div>
                </div>
                <div className="read-more">
                  <button className="read-more-btn">閱讀文章</button>
                </div>


              </div>

            </div>
          )
        })}









      </div>
      <div className="blog-standard-pages blog-d-flex">
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
    </>
  )
}
export default withRouter(BlogMainUserListByUser)
