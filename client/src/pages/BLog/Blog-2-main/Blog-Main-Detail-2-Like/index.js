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

// import '../../../../assets/css/YongBlog/Yong-blog-edit.css'

// -------------------- components --------------------

// -------------------- scss --------------------

// -------------------- imgs --------------------

// -------------------- func --------------------

function BlogMainDetailLike(props) {
  const { userdata, setUserdata, name, setName } = props.allprops;
  const [listLike, setListLike] = useState([])
  useEffect(() => {
    searchLike()
  }, [])
  useEffect(() => {
    searchLike()
  }, [userdata])

  // 搜尋方法
  const searchLike = () => {
    fetch('http://localhost:3009/blog/searchAllBlog/', {
      method: 'post',
      body: JSON.stringify({
        searchInput: '',
        searchOrder: 'DESC',
        searchSort: '依發文日期',
        perPage: 30,
        page: 1
      }),
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      })
    })
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        let temp = []
        for (let i = 11; i < 15; i++) {
          temp.push(response.rows[i])
        }
        setListLike(temp)        
      })
  }
  return (
    <>
      <div className="you-may-like">
        <h2>你可能也喜歡</h2>
        <div className="line"></div>
        <div className="you-may-like-cards blog-d-flex">
          {listLike.map((data, index) => {
            {/* console.log(data) */ }
            return (
              <a href={`/Blog/BlogDetail/${data.blogId}`} className="blog-detail-card" key={data.blogId}>
                <figure>
                  <img className="blog-cover" src={`http://localhost:3009/blogs_img/${data.blogContent01_img01}`} alt="" />
                </figure>
                <div className="blog-detail-txt">
                  <h5>{data.blogTitle}</h5>
                </div>
              </a>              
            )
          })}                  
        </div>
      </div>
    </>
  )
}
export default withRouter(BlogMainDetailLike)
