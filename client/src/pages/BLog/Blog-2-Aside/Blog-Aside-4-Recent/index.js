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
// react-moment
import Moment from 'react-moment';
import 'moment-timezone';
// -------------------- components --------------------

// -------------------- scss --------------------

// -------------------- imgs --------------------

// -------------------- func --------------------

function BlogAsideRecent(props) {
  const {userdata} = props;
  const [listRecent, setListRecent] = useState([])
  useEffect(() => {
    fetch('http://localhost:3009/blog/searchAllBlog/', {
      method: 'post',
      body: JSON.stringify({
        // id: userdata.id,
        // username: userdata.username,
        // blogId: userdata.blogId,
        searchOrder: 'DESC',
        searchSort: '依發文日期',
        perPage: 4,
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
        setListRecent(response.rows)
        // let pageArr = [];
        // for (let i = 1; i <= response.totalPages; i++) {
        //     pageArr.push(i);
        // }
        console.log('組成pageArr -> ', response.rows)
        // setListPage(pageArr)
        // setCurrentPage(response.page)
      })
  }, [])

  return (
    <>
      <div className="recent-post">
        <div className="recent-post-in">
          <h2>最新發文</h2>
          {listRecent.map((data, index) => {
            {/* console.log(data) */ }
            return (
              <a href={`/Blog/BlogDetail/${data.blogId}`} className="recent-post-in-one blog-d-flex" key={data.blogId}>
                <figure className="recent-post-in-one-img">
                  <img className="blog-cover"
                    src={`http://localhost:3009/blogs_img/${data.blogContent01_img01}`}
                    // onClick={() => {
                    //   props.history.push(`/Blog/BlogDetail/${data.blogId}`);
                    // }}
                  ></img>
                </figure>
                <div className="recent-post-in-one-txt">
                  <h4 className="recent-post-in-one-txt-title"
                  // onClick={() => {
                  //     props.history.push(`/Blog/BlogDetail/${data.blogId}`);
                  //   }}
                  >{data.blogTitle}</h4>
                  <h5 className="recent-post-in-one-txt-date"><Moment format="DD M月, YYYY">{data.blogPublishDate}</Moment></h5>
                </div>
              </a>
            )
          })}


        </div>
      </div>
      
    </>
  )
}
export default withRouter(BlogAsideRecent)
