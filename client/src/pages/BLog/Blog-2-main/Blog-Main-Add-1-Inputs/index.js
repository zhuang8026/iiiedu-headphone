// 函式元件
import React, { Fragment, useEffect, useState } from 'react'
import Files from 'react-files'
import $ from 'jquery'
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
import testImg from '../../../../assets/img/blog-img/blog-detail/test.png'
// import testtest from './../../../../../public/blogs_img/world-map.jpg'

// -------------------- func --------------------

function BlogMainAdd(props) {
    const { userdata, setUserdata, name, setName } = props.allprops;
    const {
        blogTitle,
        setBlogTitle,
        blogContent01,
        setBlogContent01,
        blogContent02,
        setBlogContent02,
        // RegisterProcess 
    } = props;
    const [drag11, setDrag11] = useState(testImg);
    const [drag12, setDrag12] = useState(testImg);
    const [drag13, setDrag13] = useState(testImg);
    const [drag21, setDrag21] = useState(testImg);
    const [drag22, setDrag22] = useState(testImg);
    const [drag23, setDrag23] = useState(testImg);
    const [selectedFile, setSelectedFile] = useState([]);
    const [testtest, setTesttest] = useState('')
    
    useEffect(() => {
    }, []);
    useEffect(() => {
    }, [userdata]);

    useEffect(() => {
        console.log('=====================================')
        console.log('selectedFile', selectedFile)
        $('#drag13').attr("src",`/blogs_img/${selectedFile.originalname}`)
    }, [selectedFile]);

    const goAddImg1 = (data) => {
        console.log('=====================================')
        console.log('data', data)
        console.log(JSON.stringify(data))
        // var result = Object.keys(data).map(function (key) { 

        //     // Using Number() to convert key to number type 
        //     // Using obj[key] to retrieve key value 
        //     return [Number(key), data[key]]; 
        // });

        // console.log('=====================================')
        // console.log('result', result)
        // console.log(JSON.stringify(result))
        let formData = new FormData();
        formData.append('avatar', data);
        // result.map((file, index) => {
        //     formData.append(`file${index}`, file);
        //   });
        console.log('================================ datafiles ================================')
        console.log(formData.get('avatar'))

        fetch('http://localhost:3009/blog/try-upload', {
            method: 'POST',
            body: formData
        })
            .then(r => r.json())
            .then(obj => {
                // setTesttest(obj.filename)
                // console.log('@@@@',obj.filename)
                // $('#drag11').attr('src', '../../../../../public/blogs_img/'+ obj.filename)
                // {`/blogs_img/${obj.filename}`}
                // console.log('@@@@',testtest)
            })
            // console.log('@@@@',testtest)  
    }
    // const goAddImg2 = () => { }
    const goBlogAdd = () => {
        fetch('http://localhost:3009/blog/add', {
            method: 'post',
            body: JSON.stringify({
                id: userdata.id,
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
            })
    }

    return (
        <>
            <figure className="blog-add-top-img">
                <h1>部落格新增頁</h1>
            </figure>
            <div className="blog-add-in">
                <h1>撰寫部落格</h1>
                <div className="underline-1"></div>
                <h2 className="title-h2">文章標題</h2>
                <input
                    className="input-title"
                    type="text"
                    name=""
                    id=""
                    onChange={e => setBlogTitle(e.target.value)} />
                <h2 className="first-h2">第一篇文章</h2>
                <textarea name="" id="" onChange={e => setBlogContent01(e.target.value)}></textarea>
                <div className="btn-and-info blog-d-flex">
                    <input
                        type="file"
                        className="btn-and-info-input"
                        id="blog_file_upload"
                        name="blog_file_upload"
                        multiple="multiple"
                        // defaultValue=""
                        // placeholder=""
                        onChange={(e) => {
                            // setLogoData(e.target.files[0].name)
                            setUserdata({
                                ...userdata,
                                userblogimg: e.target.files[0].name
                            })
                            
                            goAddImg1(e.target.files[0])
                            setSelectedFile(e.target.files[0])
                            console.log('---',e.target.files[0])
                            // setTesttest(e.target.files[0].name)
                        }}
                    />
                    <div className="blog-add-info"></div>
                    <div className="blog-add-info"></div>
                    <div className="blog-add-info"></div>
                </div>
                <div className="upload-imgs">
                    <div className="drags d-flex">
                        <figure className="dragImg drag11" id="drag11" draggable="true">
                            <img className="blog-cover" src="" id="drag11_img" alt="" />
                        </figure>
                        <figure className="dragImg drag12" id="drag12" draggable="true">
                            <img className="blog-cover" src="" id="drag12_img" alt="" />
                        </figure>
                        <figure className="dragImg drag13" id="drag13" draggable="true">
                            <img className="blog-cover" src="" id="drag13_img" alt="" />
                        </figure>
                    </div>
                </div>
                <h2 className="second-h2">第二篇文章</h2>
                <textarea name="" id="" onChange={e => setBlogContent02(e.target.value)}></textarea>
                <div className="btn-and-info blog-d-flex">
                    <input type="file" className="btn-and-info-input" name="" id="" />
                    <div className="blog-add-info"></div>
                    <div className="blog-add-info"></div>
                    <div className="blog-add-info"></div>
                </div>
                <div className="upload-imgs">
                    <div className="drags d-flex">
                        <figure className="dragImg drag21" id="drag21" draggable="true">
                            <img className="blog-cover" src="" id="drag21_img" alt="" />
                        </figure>
                        <figure className="dragImg drag22" id="drag22" draggable="true">
                            <img className="blog-cover" src="" id="drag22_img" alt="" />
                        </figure>
                        <figure className="dragImg drag23" id="drag23" draggable="true">
                            <img className="blog-cover" src="" id="drag23_img" alt="" />
                        </figure>
                    </div>
                </div>
                <button className="blog-add-submit" onClick={() => { goBlogAdd() }}>送出</button>
            </div>
        </>
    )
}
export default withRouter(BlogMainAdd)
