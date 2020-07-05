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

// antd
import 'antd/dist/antd.css';
import { notification } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';


// -------------------- components --------------------

// -------------------- scss --------------------

// -------------------- imgs --------------------
import WorldMap from '../../../../assets/img/blog-img/blog-standard/world-map.png'

// -------------------- func --------------------

function BlogAsidePhoto(props) {
  const { userdata } = props;


  const openLoginNotification = () => {
    const args = {
      message: '您尚未登入',
      description:
        '只有會員身分，才能新增和編輯部落格文章',
      duration: 5,
      icon: <ExclamationCircleFilled style={{ color: '#ffc107' }} />,
    };
    notification.open(args);
  };
  return (
    <>
      <div className="post-map">
        <button className="i-want-post"
          onClick=
          {
            (userdata.id ? () => {
              props.history.push('/Blog/BlogAdd')
            } : () => {
              openLoginNotification()
              props.history.push('/KMembers/MembersLogin')
            }
            )
          }
        >我要發文</button>
        <figure>
          <img src={WorldMap} alt="" />
        </figure>
      </div>
    </>
  )
}
export default withRouter(BlogAsidePhoto)
