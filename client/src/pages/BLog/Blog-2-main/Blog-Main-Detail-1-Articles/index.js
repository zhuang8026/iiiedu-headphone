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
// import '../../../../assets/css/YongBlog/Yong-blog-edit.css'

// -------------------- components --------------------

// -------------------- scss --------------------

// -------------------- imgs --------------------
import DetailSample1 from '../../../../assets/img/blog-img/blog-detail/blog-detail-sample-1.jpg'
import DetailSample2 from '../../../../assets/img/blog-img/blog-detail/blog-detail-sample-2.jpg'

// -------------------- func --------------------


function BlogMainDetailArticles(props) {
    const { userdata, setUserdata, name, setName } = props.allprops;
    const [detailByBlogId, setDetailByBlogId] = useState([])
    const [imgList01, setImgList01] = useState([])
    const [imgList02, setImgList02] = useState([])
    const { match } = props;
    const { detailId } = match.params;
    // let { detailId } = useParams()
    // message.success(detailId);
    useEffect(() => {
        getDetail()
        
    }, [])
    useEffect(() => {
        console.log('detailByBlogId',detailByBlogId)
        doImgList01()
        doImgList02()
    }, [detailByBlogId])
    // 抓取detail文章
    const getDetail = () => {
        fetch('http://localhost:3009/blog/getDetail/', {
            method: 'post',
            body: JSON.stringify({
                blogId: detailId,
            }),
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }),
        })
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                console.log('body -> ', response.body)
                console.log('results -> ', response.results)
                console.log('blogTitle -> ', response.results.blogTitle)
                setDetailByBlogId(response.results[0])

            })
    }
    // 決定第一個map
    const doImgList01 = () => {
        // console.log('detailByBlogId.blogContent01_img01',detailByBlogId)
        let temp01 = []
        if ((detailByBlogId.blogContent01_img01 != null) && (detailByBlogId.blogContent01_img01 != '')) {
            console.log('okok')
            temp01.push(detailByBlogId.blogContent01_img01)
        }
        if ((detailByBlogId.blogContent01_img02 != null) && (detailByBlogId.blogContent01_img02 != '')) {
            temp01.push(detailByBlogId.blogContent01_img02)
        }
        if ((detailByBlogId.blogContent01_img03 != null) && (detailByBlogId.blogContent01_img03 != '')) {
            temp01.push(detailByBlogId.blogContent01_img03)
        }
        console.log('temp01->',temp01)
        setImgList01(temp01)
    }
    // 決定第二個map
    const doImgList02 = () => {        
        let temp02 = []
        if ((detailByBlogId.blogContent02_img01 != null) && (detailByBlogId.blogContent02_img01 != '')) {
            temp02.push(detailByBlogId.blogContent02_img01)
        }
        if ((detailByBlogId.blogContent02_img02 != null) && (detailByBlogId.blogContent02_img02 != '')) {
            temp02.push(detailByBlogId.blogContent02_img02)
        }
        if ((detailByBlogId.blogContent02_img03 != null) && (detailByBlogId.blogContent02_img03 != '')) {
            temp02.push(detailByBlogId.blogContent02_img03)
        }
        console.log('temp02->',temp02)
        setImgList02(temp02)
    }

    return (
        <>
            <div className="articles">
                <div className="article-first">
                    <h2>{detailByBlogId.blogTitle}</h2>
                    <h5><Moment format="DD M月, YYYY">{detailByBlogId.blogPublishDate}</Moment> 建立</h5>

                    {imgList01.map((data, index) => {
                        console.log('===============', data)
                        return (
                            <figure key={data.index}>
                                <img className="blog-cover" src={`/blogs_img/${data}`} alt="" />
                            </figure>
                        )
                    })}                    
                    <p>{detailByBlogId.blogContent01}</p>
                </div>
                <div className="article-second">

                    {imgList02.map((data, index) => {
                        console.log('===============', data)
                        return (
                            <figure key={data.index}>
                                <img className="blog-cover" src={`/blogs_img/${data}`} alt="" />
                            </figure>

                        )
                    })}                    
                    <p>{detailByBlogId.blogContent02}</p>
                    <h6>最後修改 06/01,2020</h6>
                </div>
            </div>
        </>
    )
}
export default withRouter(BlogMainDetailArticles)
