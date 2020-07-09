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

import 'antd/dist/antd.css';
import { notification } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
// import '../../../../assets/css/YongBlog/Yong-blog-edit.css'

// -------------------- components --------------------

// -------------------- scss --------------------

// -------------------- imgs --------------------
import CaretDown from '../../../../assets/img/blog-img/blog-detail/caret-down-solid.svg'

// -------------------- func --------------------




function BlogMainDetailComments(props) {
    const { userdata, setUserdata, name, setName } = props.allprops;
    const [list_r, setList_r] = useState([])
    // const [list_r_r, setList_r_r] = useState([])    
    const [b_r_content, setB_r_content] = useState('')
    const { match } = props;
    const { detailId } = match.params;


    useEffect(() => {
        // console.log('目前使用者 ==> ',userdata);
        list_reply()

    }, [])
    useEffect(() => {
        console.log('目前使用者 ==> ', userdata);
        console.log('當前使用者name ====> ', userdata.name);
        console.log('當前使用者userlogo ====> ', userdata.userlogo);

    }, [userdata])
    useEffect(() => {

    }, [list_r])
    useEffect(() => {

        // console.log('目前使用者 ==> ',userdata);
    }, [b_r_content])
    // 回文列表
    const list_reply = () => {

        fetch('http://localhost:3009/blog/list_reply/', {
            method: 'post',
            body: JSON.stringify({
                // id: userdata.id,
                // username: userdata.username,
                blogId: detailId,
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
                console.log('查詢回文列表結果 ===> ', response.rows)
                // console.log('目前使用者 ==> ',userdata);
                setList_r(response.rows)
            })
    }

    // 新增回文
    const add_reply = () => {
        console.log('送出 blogId =====> ', detailId);
        console.log('送出 id ====> ', userdata.id);
        console.log('送出 r_nick ====> ', userdata.name);
        console.log('送出 r_photo ====> ', userdata.userlogo);
        fetch('http://localhost:3009/blog/add-reply', {
            method: 'post',
            body: JSON.stringify({
                blogId: detailId,
                id: userdata.id,
                r_nick: userdata.name,
                r_photo: userdata.userlogo,
                b_r_content: b_r_content,
            }),
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            })
        })
            .then(result => result.json())
            .then(obj => {
                openReplySuccessNotification()

                setB_r_content('')
                setTimeout(() => {
                    list_reply()
                }, 1000)
            })
    }
    const openReplySuccessNotification = () => {
        const args = {
          message: '評論成功',
          description:
            '您剛發表一篇評論。',
          duration: 5,
          icon: <CheckCircleFilled style={{ color: '#28a745' }} />,
        };
        notification.open(args);
      };
    return (
        <>
            <div className="comments">
                <h2>{list_r.length}篇 評論</h2>
                {list_r.map((data, index) => {
                    {/* console.log('comments  評論列表  => ', data) */ }
                    return (
                        <div className="comment-one-list" key={data.b_rid}>
                            <div className="comment-one">
                                <div className="comment-one-in blog-d-flex">
                                    <div className="user-post-icon">
                                        <figure className="user-post-fig blog-cover">
                                            <img src={`/user_img/${data.r_photo}`} alt=""></img>
                                        </figure>

                                    </div>
                                    <div className="user-post-content">
                                        <h3 className="user-post-name">{data.r_nick}</h3>
                                        <h5 className="user-post-date"><Moment format="DD M月, YYYY">{data.b_r_date}</Moment></h5>
                                        <p>{data.b_r_content}</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="spacing"></div>
            <div className={((userdata.id) && (userdata.id != '') ? 'add-comment' : 'add-comment-disable')}>
                <div className="add-comment-title blog-d-flex">
                    <h2>發表評論，從</h2>
                    <figure className="add-comment-title-fig blog-cover">
                        <img src={`/user_img/${userdata.userlogo}`} alt="" />
                    </figure>
                    <h5>{userdata.name}</h5>
                </div>
                <div className="add-comment-textarea">
                    <textarea name="" id=""
                        onChange={e => setB_r_content(e.target.value)}></textarea>
                </div>

                <div className="add-comment-btns d-flex blog-justify-content-between">
                    <button
                        className="wi_button btn btn-navy btn-fill-vert-o"
                        onClick={() => {
                            add_reply()
                        }}
                    >發表評論</button>
                    {/* <button>登出</button> */}
                </div>
            </div>
        </>
    )
}
export default withRouter(BlogMainDetailComments)
