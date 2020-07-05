// 函式元件
import React, { Fragment, useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom'
import MembersLeft from '../ComponentMembersLeft'
// react-moment
import Moment from 'react-moment';
import 'moment-timezone';
import '../../../assets/scss/members_bloglist.scss'
// 測試圖片
import logo from '../../../assets/img/tw.jpg';

function MembersBlog(props) {
    const { userdata, setUserdata } = props;
    const [listPage, setListPage] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [listUserBlogdata, setlistUserBlogdata] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [searchOrder, setSearchOrder] = useState('DESC')
    const [searchSort, setSearchSort] = useState('依發文日期')

    useEffect(() => {
        searchMethod()
        // message.success(userdata.id)
    }, [])

    useEffect(() => {
        searchMethod()
    }, [userdata, searchOrder, searchSort, currentPage])
    useEffect(() => {

    }, [listUserBlogdata])
    useEffect(() => {
        console.log('更新searchInput -> ', searchInput)
    }, [searchInput]);
    // useEffect(() => {
    //     searchMethod()
    // }, [searchOrder])
    // useEffect(() => {
    //     searchMethod()
    // }, [searchSort])
    useEffect(() => {
        console.log('更新pageList -> ', listPage)
    }, [listPage])
    useEffect(() => {
        console.log('更新currentPage -> ', currentPage)
        //searchMethod()
    }, [currentPage])

    const searchMethod = () => {
        console.log('=============== searchOrder ================')
        console.log('searchOrder -> ', searchOrder)
        console.log('=============== searchSort ================')
        console.log('searchSort -> ', searchSort)
        fetch('http://localhost:3009/blog/searchUserBlog/', {
            method: 'post',
            body: JSON.stringify({
                id: userdata.id,
                // username: userdata.username,
                // blogId: userdata.blogId,
                searchInput: searchInput,
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
                setlistUserBlogdata(response.rows)
                let pageArr = [];
                for (let i = 1; i <= response.totalPages; i++) {
                    pageArr.push(i);
                }
                console.log('組成pageArr -> ', pageArr)
                setListPage(pageArr)
                setCurrentPage(response.page)
            })
    }

    return (
        <main>
            <div className="members_all">
                <MembersLeft
                    userdata={userdata}
                    setUserdata={setUserdata}
                />


                <div className="members_right">
                    <div className="members_right_inner">
                        {/* title */}
                        <div className="members_r_top_text">
                            <h1>我的BLOG</h1>
                            <p>管理你的BLOG</p>
                        </div>
                        {/* 主要內容 */}
                        <div className="members_r_bottom" name="formUserData">
                            {/* 左側表單 */}
                            <div className="blog_bottom_left">
                                <div className="tbl-header">
                                    <table className="blogTable" cellpadding="0" cellspacing="0" border="0">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <input type="checkbox" name="blog_memb_checkbox" id="blog_memb_checkbox" className="blog_memb_checkbox" />
                                                </th>
                                                <th>編號</th>
                                                <th>部落格編號</th>
                                                <th className="blog_memb_Title_head">標題</th>
                                                <th className="blog_memb_content_head">內容</th>
                                                <th className="blog_memb_publish_head">發布時間</th>
                                                <th className="blog_memb_update_head">更新時間</th>
                                                <th>操作</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                                <div className="tbl-content">
                                    <table className="blogTable" ellpadding="0" cellspacing="0" border="0">
                                        <tbody>
                                            {listUserBlogdata.length > 0 ? (
                                                <>
                                                    {listUserBlogdata.map((data, index) => {
                                                        return (
                                                            <tr key={index} className="blog_memb_tr_list">
                                                                <td>
                                                                    <input type="checkbox" name="blog_memb_checkbox" id="blog_memb_checkbox" className="blog_memb_checkbox" />
                                                                </td>
                                                                <td>{index + 1}</td>
                                                                <td>{data.blogId}</td>
                                                                <td className="blog_memb_Title_body">{data.blogTitle}</td>
                                                                <td className="blog_memb_content_body">
                                                                    <p>
                                                                        {data.blogContent01}
                                                                    </p>
                                                                </td>
                                                                <td className="blog_memb_publish_body"><Moment format="YYYY年 M月 D日 HH:mm:ss">{data.blogPublishDate}</Moment></td>
                                                                <td className="blog_memb_update_body"><Moment format="YYYY年 M月 D日 HH:mm:ss">{data.blogUpdateDate}</Moment></td>
                                                                <td>
                                                                    <span className="iconfont icon-edit blog-memb-icon-edit"
                                                                        onClick={() => {
                                                                            props.history.push(`/Blog/BlogDetail/${data.blogId}`);
                                                                        }}
                                                                    ></span>
                                                                    <span
                                                                        id={data.itemId}
                                                                        className="iconfont icon-delete blog-memb-icon-delete"
                                                                        onClick={(event) => {
                                                                            // console.log(event.target.id)
                                                                            // superSellerDelete(event.target.id)
                                                                        }}
                                                                    ></span>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })}
                                                </>
                                            ) : (
                                                    <>
                                                        <div className="blogTableNothing">此時此刻...你還沒有發布任何BLOG文章</div>
                                                    </>
                                                )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )

}
export default withRouter(MembersBlog);