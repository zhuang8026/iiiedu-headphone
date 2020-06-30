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
import { message } from 'antd';
// import '../../../../assets/css/YongBlog/Yong-blog-edit.css'

// -------------------- components --------------------

// -------------------- scss --------------------

// -------------------- imgs --------------------
import CaretDown from '../../../../assets/img/blog-img/blog-detail/caret-down-solid.svg'

// -------------------- func --------------------




function BlogMainDetailComments(props) {
    const { userdata, setUserdata, name, setName } = props.allprops;
    const [list_r, setList_r] = useState([])
    const [list_r_r, setList_r_r] = useState([])
    const [b_r_content, setB_r_content] = useState('')
    const { match } = props;
    const { detailId } = match.params;


    useEffect(() => {
        list_reply()
    }, [])
    useEffect(() => {

    }, [list_r])
    useEffect(() => {
        console.log(b_r_content)
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
                console.log(response.rows)
                setList_r(response.rows)
            })
    }

    // 新增回文
    const add_reply = () => {
        fetch('http://localhost:3009/blog/add-reply', {
            method: 'post',
            body: JSON.stringify({
                // id: userdata.id,
                blogId: detailId,
                b_r_content: b_r_content,
            }),
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            })
        })
            .then(result => result.json())
            .then(obj => {
                message.success(`新增成功！`);
                setB_r_content('')
                setTimeout(() => {
                    list_reply()
                }, 1000)
            })
    }

    return (
        <>
            <div className="comments">
                <h2>3篇 評論</h2>
                {list_r.map((data, index) => {
                    console.log('===============', data)
                    return (
                        <div className="comment-one-list" key={data.b_rid}>
                            <div className="comment-one">
                                <div className="comment-one-in blog-d-flex">
                                    <div className="user-post-icon">
                                        <figure className="user-post-fig"></figure>
                                        <button className="list-reply blog-d-flex">
                                            <figure className="user-list-reply-fig">
                                                <img src={CaretDown} alt="" />
                                            </figure>
                                            <h5>回覆</h5>
                                        </button>
                                    </div>
                                    <div className="user-post-content">
                                        <h3 className="user-post-name">{data.r_nick}</h3>
                                        <h5 className="user-post-date"><Moment format="DD M月, YYYY">{data.b_r_date}</Moment></h5>
                                        <p>{data.b_r_content}</p>
                                        <button className="post-reply">回覆</button>
                                    </div>
                                </div>
                            </div>
                            

                            {/* <div className="comment-reply">
            <div className="comment-reply-in blog-d-flex">
              <div className="user-reply-icon">
                <figure className="user-reply-fig"></figure>
              </div>
              <div className="user-reply-content">
                <h3 className="user-reply-name">回覆者暱稱</h3>
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
          </div> */}


                        </div>

                    )
                })}




            </div>
            <div className="spacing"></div>
            <div className="add-comment">
                <div className="add-comment-title blog-d-flex">
                    <h2>發表評論，從</h2>
                    <figure>
                        <img src="" alt="" />
                    </figure>
                    <h5>乖乖</h5>
                </div>
                <div className="add-comment-textarea">
                    <textarea name="" id=""
                        onChange={e => setB_r_content(e.target.value)}></textarea>
                </div>

                <div className="add-comment-btns d-flex blog-justify-content-between">
                    <button
                        onClick={() => {
                            add_reply()
                        }}
                    >發表評論</button>
                    <button>登出</button>
                </div>
            </div>
        </>
    )
}
export default withRouter(BlogMainDetailComments)
