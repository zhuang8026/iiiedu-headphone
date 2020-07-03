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
import iconFb from '../../../../assets/img/blog-img/blog-aside/iconFb.png'
import iconFb_h from '../../../../assets/img/blog-img/blog-aside/iconFb_h.png'
import iconIg from '../../../../assets/img/blog-img/blog-aside/iconIg.png'
import iconIg_h from '../../../../assets/img/blog-img/blog-aside/iconIg_h.png'
import iconLine from '../../../../assets/img/blog-img/blog-aside/iconLine.png'
import iconLine_h from '../../../../assets/img/blog-img/blog-aside/iconLine_h.png'

// -------------------- func --------------------

function BlogAsideCommunity_1(props) {
  // const {userdata} = props;
  // console.log(userdata)
  let [memberList, setMemberList] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3009/blog/searchAllMember/', {
      method: 'get',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      })
    })
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        console.log('response.results == >', response.rows)
        
        let temp=[]
        for(let i=0;i<9;i++){
          temp.push(response.rows[i])
        }
        setMemberList(temp)
      })
  }, [])

  useEffect(() => {
    // console.log('memberList ============== >', memberList)
    console.log('memberList[5] == >', memberList[5])
  }, [memberList])

  return (
    <>
      <div className="user-icon-st">
        <h2>關於我們</h2>
        <div className="user-icon-st-in blog-d-flex">
          <figure className="user-icon-st-fig blog-cover">
            {/* <img src={`/user_img/${memberList.userlogo}`} alt="" /> */}

          </figure>
        </div>

        <h2>人氣作者</h2>
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
export default withRouter(BlogAsideCommunity_1)
