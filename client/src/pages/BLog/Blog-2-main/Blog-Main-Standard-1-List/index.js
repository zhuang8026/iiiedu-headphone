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
// import '../../../assets/scss/blog_standard.scss'

// -------------------- imgs --------------------
import BlogCard from '../../../../assets/img/blog-img/blog-standard/Blog-card.png'
import IconSearch from '../../../../assets/img/blog-img/blog-standard/icon-search.svg'
import NextPage from '../../../../assets/img/blog-img/blog-standard/next-page.svg'
import PrevPage from '../../../../assets/img/blog-img/blog-standard/prev-page.svg'
import NextPageHover from '../../../../assets/img/blog-img/blog-standard/next-page-hover.svg'
import PrevPageHover from '../../../../assets/img/blog-img/blog-standard/prev-page-hover.svg'

// -------------------- func --------------------



function BlogMainStandardList(props) {

  const [listAllBlogdata, setlistAllBlogdata] = useState([])

  useEffect(() => {
    fetch('http://localhost:3009/blog/listAllBlog/1', {
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
        setlistAllBlogdata(response.rows)
      })
  }, [])


  return (
    <>
      <div className="blog-btns blog-d-flex blog-justify-content-between">
        <div className="blog-btns-left">
          <button className="blog-btns-left-Link" onClick={() => props.history.push('/Blog/YongBlog')}>
            全部文章
          </button>
          {/* <Link to="../BlogStandard" className="blog-btns-left-Link">
            全部文章
          </Link> */}
          <button className="blog-btns-left-Link" onClick={() => props.history.push('/Blog/YongMyBlog')}>
            個人文章
          </button>
          {/* <Link to="/Blog/YongMyBlog" className="blog-btns-left-Link">個人文章</Link> */}

        </div>
        <div className="blog-btns-right blog-d-flex blog-justify-content-between">
          <select className="s1" name="" id="">
            <option value="0">ASC</option>
            <option value="1">DESC</option>
          </select>
          <select className="s2" name="" id="">
            <option value="0">依發文日期</option>
            <option value="1">依修改日期</option>
            <option value="2">依回覆日期</option>
          </select>
          <figure className="blog-cover">
            <img src={IconSearch} alt="" />
          </figure>
        </div>
      </div>
      <div className="blog-list blog-d-flex">

        {listAllBlogdata.map((data, index) => {
          {/* console.log(data) */ }
          return (
            <div className="blog-card">
              <div className="blog-card-in">

                <figure className="blog-card-fig">
                  <img className="blog-cover" src={BlogCard} alt="" />
                </figure>
                <div className="blog-card-btns"></div>
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

        {/* <div className="Yyaside_pro">
                  <div className="item_image">
                    <img className="item_images" src={`/items_img/${data.itemImg}`} />
                    <div className="item_imagebtnout">
                      <buttun className="item_imagebtn btn">加入購物車</buttun>
                      <buttun className="item_imagebtn2 btn">立即查看</buttun>
                    </div>
                  </div>
                  <div className="item_cover"></div>
                  <ul className="itemul">
                    <li className="pro_name">
                      <p>{data.itemName}</p>
                      <div className="pro_new">NEW</div>
                    </li>

                    <li>
                      <div className="pro_c"></div>
                    </li>
                  </ul>
                  <p> {data.itemsbrand} </p>
                  <p>{data.itemPrice}</p>
                </div>
         */}







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
export default withRouter(BlogMainStandardList)
