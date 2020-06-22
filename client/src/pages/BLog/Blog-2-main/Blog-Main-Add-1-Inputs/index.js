// 函式元件
import React, { Fragment, useEffect } from 'react'
import { message } from 'antd';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    Link,
    NavLink,
    withRouter,
} from 'react-router-dom'

// import '../../../../assets/css/YongBlog/Yong-blog-add.css'

// -------------------- components --------------------

// -------------------- scss --------------------

// -------------------- imgs --------------------

// -------------------- func --------------------

function BlogMainAdd(props) {

    const {
        blogTitle,
        setBlogTitle,
        blogContent01,
        setBlogContent01,
        blogContent02,
        setBlogContent02,
        // RegisterProcess 
         } = props;

    const goBlogAdd = () => {
        fetch('http://localhost:3009/blog/add', {
            method: 'post',
            body: JSON.stringify({
                blogTitle: blogTitle,
                blogContent01: blogContent01,
                blogContent02: blogContent02
            }),
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            })
        })
            .then(result => result.json())
            .then(obj => {
                console.log(obj)
                // localStorage.setItem('memberData', JSON.stringify(obj));
                message.success(`新增成功！`);
                setTimeout(() => {
                    // props.history.goBack()
                    props.history.push('/Blog/YongMyBlog');
                }, 2000)
                // if(obj.success){
                //   if(obj.password === password){
                //     localStorage.setItem('memberData', JSON.stringify(obj));
                //     message.success(`Hello!`);
                //     setTimeout(()=>{
                //       // props.history.goBack()
                //       props.history.push('/');
                //     },2000)
                //   } else {
                //     message.error(`密碼不正確`);
                //     localStorage.removeItem('memberData');
                //   }
                // } else {
                //   message.error(`登入失敗`);
                //   localStorage.removeItem('memberData');
                // }
            })

    }

    return (
        <>
            <figure class="blog-add-top-img">
                <h1>部落格新增頁</h1>
            </figure>
            <div class="blog-add-in">
                <h1>撰寫部落格</h1>
                <div class="underline-1"></div>
                <h2 class="title-h2">文章標題</h2>
                <input
                    class="input-title"
                    type="text"
                    name=""
                    id=""
                    onChange={e => setBlogTitle(e.target.value)} />
                <h2 class="first-h2">第一篇文章</h2>
                <textarea name="" id="" onChange={e => setBlogContent01(e.target.value)}></textarea>
                <div class="btn-and-info blog-d-flex">
                    <input type="file" class="btn-and-info-input" name="" id="" />
                    <div class="blog-add-info"></div>
                    <div class="blog-add-info"></div>
                    <div class="blog-add-info"></div>
                </div>
                <div class="upload-imgs">
                    <figure>
                        <img src="" alt="" />
                    </figure>
                    <figure>
                        <img src="" alt="" />
                    </figure>
                </div>
                <h2 class="second-h2">第二篇文章</h2>
                <textarea name="" id="" onChange={e => setBlogContent02(e.target.value)}></textarea>
                <div class="btn-and-info blog-d-flex">
                    <input type="file" class="btn-and-info-input" name="" id="" />
                    <div class="blog-add-info"></div>
                    <div class="blog-add-info"></div>
                    <div class="blog-add-info"></div>
                </div>
                <div class="upload-imgs">
                    <figure>
                        <img src="" alt="" />
                    </figure>
                    <figure>
                        <img src="" alt="" />
                    </figure>
                </div>
                <button class="blog-add-submit" onClick={() => { goBlogAdd() }}>送出</button>
        </div>
        </>
    )
}
export default withRouter(BlogMainAdd)
