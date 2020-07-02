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
// react-moment
import Moment from 'react-moment';
import 'moment-timezone';


// -------------------- components --------------------

// -------------------- scss --------------------
// import '../../../assets/scss/blog_standard.scss'

// -------------------- imgs --------------------


// import BlogCard from '../../../../../public/blogs_img/s001-9-01-001.jpg'
// import BlogCard from '../../../../assets/img/blog-img/blog-standard/Blog-card.png'
import IconSearch from '../../../../assets/img/blog-img/blog-standard/icon-search.svg'
import NextPage from '../../../../assets/img/blog-img/blog-standard/next-page.svg'
import PrevPage from '../../../../assets/img/blog-img/blog-standard/prev-page.svg'
import NextPageHover from '../../../../assets/img/blog-img/blog-standard/next-page-hover.svg'
import PrevPageHover from '../../../../assets/img/blog-img/blog-standard/prev-page-hover.svg'

// -------------------- func --------------------



function BlogMainStandardList(props) {
    const { userdata, setUserdata, name, setName } = props.allprops;
    const [listAllBlogdata, setListAllBlogdata] = useState([])
    const [listPage, setListPage] = useState([])
    const [currentPage, setCurrentPage] = useState('')
    const [searchOrder, setSearchOrder] = useState('DESC')
    const [searchSort, setSearchSort] = useState('依發文日期')

    useEffect(() => {
        searchMethod()
    }, [])
    useEffect(() => {
        searchMethod()
    }, [userdata])
    useEffect(() => {

    }, [listAllBlogdata])
    useEffect(() => {
        searchMethod()
    }, [searchOrder])
    useEffect(() => {
        searchMethod()
    }, [searchSort])
    useEffect(() => {
        console.log('更新pageList -> ', listPage)
    }, [listPage])
    useEffect(() => {
        console.log('更新currentPage -> ', currentPage)
        searchMethod()
    }, [currentPage])

    // 搜尋方法
    const searchMethod = () => {
        fetch('http://localhost:3009/blog/searchAllBlog/', {
            method: 'post',
            body: JSON.stringify({
                // username: userdata.username,
                // blogId: userdata.blogId,
                searchOrder: searchOrder,
                searchSort: searchSort,
                page: currentPage
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
                setListAllBlogdata(response.rows)
                let pageArr = [];
                for (let i = 1; i <= response.totalPages; i++) {
                    pageArr.push(i);
                }
                console.log('組成pageArr -> ', pageArr)
                setListPage(pageArr)
                setCurrentPage(response.page)
            })
    }

    // 去看細節頁
    const goBlogDetail = (blogId) => {
        // props.history.push(`/ProductDetail/${e.target.id}`)

    }

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
                    <select className="s1" name="" id=""
                        onChange={(e) => {
                            if (e.target.value === '1') {
                                setSearchOrder('DESC')
                            } else if (e.target.value === '2') {
                                setSearchOrder('ASC')
                            }
                        }}>
                        <option value="1">DESC</option>
                        <option value="2">ASC</option>
                    </select>
                    <select className="s2" name="" id=""
                        onChange={(e) => {
                            if (e.target.value === '1') {
                                setSearchSort('依發文日期')
                            } else if (e.target.value === '4') {
                                setSearchSort('依部落格編號')
                            } else if (e.target.value === '5') {
                                setSearchSort('依作者')
                            }
                        }}
                    >
                        <option value="1">依發文日期</option>
                        {/* <option value="2">依修改日期</option>
            <option value="3">依回覆日期</option> */}
                        <option value="4">依部落格編號</option>
                        <option value="5">依作者id</option>
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

                            <div className="blog-card" key={data.blogId}>                            
                                <div className="blog-card-in">
                                    <figure className="blog-card-fig">
                                        <img className="blog-cover"
                                            src={`http://localhost:3009/blogs_img/${data.blogContent01_img01}`}
                                            alt=""
                                        />
                                    </figure>
                                    <div className="blog-card-btns"></div>
                                    <div className="blog-card-title"><p>{data.blogTitle}</p></div>
                                    <div className="blog-card-content"><p>{data.blogContent01}</p></div>
                                    <div className="blog-card-calendar">
                                        <div className="blog-card-calendar-in">
                                            <h2><Moment format="DD">{data.blogPublishDate}</Moment></h2>
                                            <h5><Moment format="M">{data.blogPublishDate}</Moment>月</h5>
                                        </div>
                                    </div>
                                    <div className="read-more">
                                        <button
                                            className="read-more-btn"
                                            onClick={() => {
                                                props.history.push(`/Blog/BlogDetail/${data.blogId}`);
                                                // goBlogDetail(data.blogId) //data有blog的資料
                                            }}
                                        >閱讀文章</button>
                                    </div>
                                </div>                               
                            </div>
                        )
                    })}
                
            </div>
            <div className="blog-standard-pages blog-d-flex">
                <div
                    className="round-effect"
                    onClick={() => {
                        setCurrentPage(currentPage - 1)
                    }}
                >﹤
                    {/* <img
                        src={PrevPage}
                        alt=""
                        onClick={() => {
                            setCurrentPage(currentPage - 1)
                        }}
                    /> */}
                </div>
                <div className="all-blog-page-list blog-d-flex">
                    {listPage.map((data, index) => {
                        {/* console.log(data) */ }
                        return (
                            <div
                                className="round-effect"
                                key={data}
                                onClick={() => {
                                    setCurrentPage(data)
                                }}
                            >{data}</div>
                        )
                    })}
                </div>

                {/* <div className="mores">...</div> */}
                <div
                    className="round-effect"
                    onClick={() => {
                        setCurrentPage(currentPage + 1)
                    }}
                >﹥
                    {/* <img
                        src={NextPage}
                        alt=""
                        onClick={() => {
                            setCurrentPage(currentPage + 1)
                        }}
                    /> */}
                </div>
            </div>
        </>
    )
}
export default withRouter(BlogMainStandardList)
