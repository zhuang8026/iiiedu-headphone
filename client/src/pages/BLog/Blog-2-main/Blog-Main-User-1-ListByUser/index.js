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

// antd
import { message } from 'antd';

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
    const { userdata, setUserdata, name, setName } = props.allprops;
    const [test, setTest] = useState(['111', '222'])
    const [listUserBlogdata, setlistUserBlogdata] = useState([])
    const [searchOrder, setSearchOrder] = useState('ASC')
    const [searchSort, setSearchSort] = useState('依發文日期')

    useEffect(() => {
        getBlogUserList()
    }, [userdata])
    useEffect(() => {
        // getBlogUserList()
    }, [listUserBlogdata])
    useEffect(() => {
        searchMethod()
    }, [searchOrder])
    useEffect(() => {
        searchMethod()
    }, [searchSort])

    // 抓資料庫刷頁面
    const getBlogUserList = () => {
        fetch('http://localhost:3009/blog/listUserBlog/', {
            method: 'post',
            body: JSON.stringify({
                id: userdata.id,
                username: userdata.username,
                blogId: userdata.blogId,
                searchOrder: searchOrder,
                searchSort: searchSort,
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

                setlistUserBlogdata(response.rows)

            })
    }

    // 刪除文章
    const goBlogDelete = (blogId) => {
        fetch('http://localhost:3009/blog/del/', {
            method: 'post',
            body: JSON.stringify({
                id: userdata.id,
                blogId: blogId
            }),
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            })
        })
            .then((response) => {
                // return response.json()
            })
            .then((response) => {

            })
        setTimeout(() => {
            deleteDone()
        }, 2000)
    }

    // 刪除成功後重抓頁面
    const deleteDone = () => {
        message.success(`test`);
        fetch('http://localhost:3009/blog/listUserBlog/', {
            method: 'post',
            body: JSON.stringify({
                id: userdata.id,
                username: userdata.username,
                blogId: userdata.blogId,
                searchOrder: searchOrder,
                searchSort: searchSort,
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

                setlistUserBlogdata(response.rows)
            })
    }

    // 去編輯
    const goBlogEdit = (blogId) => {
        props.history.push('/Blog/BlogEdit');
    }

    // 去看細節頁
    const goBlogDetail = (blogId) => {
        props.history.push('/Blog/BlogDetail');
    }

    // 點選搜尋選單
    const searchMethod = () => {
        console.log('=============== searchOrder ================')
        console.log('searchOrder -> ', searchOrder)
        console.log('=============== searchSort ================')
        console.log('searchSort -> ', searchSort)
        fetch('http://localhost:3009/blog/searchUserBlog/', {
            method: 'post',
            body: JSON.stringify({
                id: userdata.id,
                username: userdata.username,
                blogId: userdata.blogId,
                searchOrder: searchOrder,
                searchSort: searchSort,
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
                setlistUserBlogdata(response.rows)

            })
    }


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

                    <select className="s1" name="" id=""
                        onChange={(e) => {
                            if (e.target.value === '1') {
                                setSearchOrder('ASC')
                            } else if (e.target.value === '2') {
                                setSearchOrder('DESC')
                            }
                        }}
                    >
                        <option value="1">ASC</option>
                        <option value="2">DESC</option>
                    </select>
                    <select className="s2" name="" id=""
                        onChange={(e) => {
                            if (e.target.value === '1') {
                                setSearchSort('依發文日期')
                            } else if (e.target.value === '3') {
                                setSearchSort('依部落格編號')
                            }
                        }}
                    >
                        <option value="1">依發文日期</option>
                        {/* <option value="2">依修改日期</option>                         */}
                        <option value="3">依部落格編號</option>
                    </select>
                    <figure className="blog-cover">
                        <img src={IconSearch} alt="" />
                    </figure>
                </div>
            </div>
            <div className="blog-list blog-d-flex">
                {listUserBlogdata.map((data, index) => {
                    {/* console.log(data) */ }
                    return (
                        <div className="blog-card" key={data.blogId}>
                            <div className="blog-card-in">
                                <figure className="blog-card-fig">
                                    <img className="blog-cover" src={BlogCard} alt="" />
                                </figure>
                                <div className="blog-card-btns blog-d-flex blog-justify-content-between">
                                    <figure>
                                        <img
                                            src={Pan}
                                            onClick={() => {
                                                message.success(data.blogId);
                                                goBlogEdit(data) //data有blog的資料

                                            }}
                                        ></img>
                                    </figure>
                                    <figure>
                                        <img src={TrashBarrel}
                                            onClick={() => {
                                                message.success(data.blogId);
                                                goBlogDelete(data.blogId)

                                            }}></img>
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
                                    <button
                                        className="read-more-btn"
                                        onClick={() => {
                                            message.success(data.blogId);
                                            goBlogDetail(data) //data有blog的資料

                                        }}>閱讀文章</button>
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
