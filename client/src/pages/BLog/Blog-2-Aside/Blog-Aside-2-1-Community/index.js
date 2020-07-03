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
  const { userdata, setUserdata, name, setName } = props.allprops;
  // const {userdata} = props;
  // console.log(userdata)
  let [memberList, setMemberList] = useState([]);

  useEffect(() => {
    searchAllMember()
  }, [])

  useEffect(() => {
    searchAllMember()
  }, [userdata])

  useEffect(() => {

  }, [memberList])


  // 搜尋方法
  const searchAllMember = () => {
    fetch('http://localhost:3009/blog/searchAllMember/', {
      method: 'post',
      body: JSON.stringify({
        searchInput: '',
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
        for (let i = 0; i < 9; i++) {
          temp.push(response.rows[i])
        }
        setMemberList(temp)
        console.log('temp[5] ============== >', temp[5].id)
        console.log('memberList[5] == >', temp[5].id)
      })
  }

  return (
    <>
      <div className="user-icon-st">
        <h2>關於我們</h2>
        <div className="user-icon-st-in blog-d-flex">

          {memberList.map((data, index) => {
            {/* console.log(data) */ }
            return (
              <figure className="user-icon-st-fig" key={data.id}>
                <img src={`/user_img/${data.userlogo}`} alt="" />
                <div>
                  <h5>{data.name}</h5>
                </div>
                
              </figure>
            )
          })}




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
