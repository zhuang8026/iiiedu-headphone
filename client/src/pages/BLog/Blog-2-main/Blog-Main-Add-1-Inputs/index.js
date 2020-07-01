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
    // ==================== 欄位資料 ==================== 
    const [addBlogTitle, setAddBlogTitle] = useState('');
    const [addBlogContent01, setAddBlogContent01] = useState('');
    const [addBlogContent02, setAddBlogContent02] = useState('');
    // ==================== 圖片欄位 ==================== 
    const [drag11, setDrag11] = useState('default.jpg');
    const [drag12, setDrag12] = useState('default.jpg');
    const [drag13, setDrag13] = useState('default.jpg');
    const [drag21, setDrag21] = useState('default.jpg');
    const [drag22, setDrag22] = useState('default.jpg');
    const [drag23, setDrag23] = useState('default.jpg');
    // ==================== 指標 ==================== 
    const [imgPoint01, setImgPoint01] = useState(1);
    const [imgPoint02, setImgPoint02] = useState(1);
    // const [selectedFile, setSelectedFile] = useState([]);
    const [testtest, setTesttest] = useState('')

    useEffect(() => {
    }, []);
    useEffect(() => {
        console.log('=====================================')
        console.log('addBlogTitle ==============> ', addBlogTitle)
        console.log('addBlogContent01 ==========> ', addBlogContent01)
        console.log('addBlogContent01_img01 ====> ', drag11)
        console.log('addBlogContent01_img02 ====> ', drag12)
        console.log('addBlogContent01_img03 ====> ', drag13)
        console.log('addBlogContent02 ==========> ', addBlogContent02)
        console.log('addBlogContent02_img01 ====> ', drag21)
        console.log('addBlogContent02_img02 ====> ', drag22)
        console.log('addBlogContent02_img03 ====> ', drag23)
    }, [addBlogTitle, addBlogContent01, drag11, drag12, drag13,
        addBlogContent02, drag21, drag22, drag23]);

    // useEffect(() => {
    //     console.log('=====================================')
    //     console.log('selectedFile', selectedFile)
    //     $('#drag13').attr("src", `/blogs_img/${selectedFile.originalname}`)
    // }, [selectedFile]);

    // 上傳圖片
    const goAddImg = (data) => {
        let formData = new FormData();
        formData.append('avatar', data);
        console.log('================================ datafiles ================================')
        console.log(formData.get('avatar'))
        fetch('http://localhost:3009/blog/try-upload', {
            method: 'POST',
            body: formData
        })
            .then((res) => {
                console.log(res)
                console.log(res.statusText)
                return res.json() // json()	返回 Promise，resolves 是 JSON 物件
            })
            .then(obj => {
                setTimeout(() => {
                    // setDrag13(obj.filename)
                }, 2000)
            })
    }



    // 設定圖片
    const goSetImg = () => { }


    const goBlogAdd = () => {
        fetch('http://localhost:3009/blog/add', {
            method: 'POST',
            body: JSON.stringify({
                id: userdata.id,
                addBlogTitle: addBlogTitle,
                addBlogContent01: addBlogContent01,
                addBlogContent01_img01: drag11,
                addBlogContent01_img02: drag12,
                addBlogContent01_img03: drag13,
                addBlogContent02: addBlogContent02,
                addBlogContent02_img01: drag21,
                addBlogContent02_img02: drag22,
                addBlogContent02_img03: drag23,
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
                    onChange={e => setAddBlogTitle(e.target.value)} />
                <h2 className="first-h2">第一篇文章</h2>
                <textarea name="" id="" onChange={e => setAddBlogContent01(e.target.value)}></textarea>
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
                            if (imgPoint01 === 4) {
                                message.success('圖片上限是 3 張')
                            } else if (imgPoint01 <= 3) {
                                let obj01 = e.target.files[0];
                                goAddImg(e.target.files[0])
                                setTimeout(() => {
                                    console.log('e.target:', e.target);
                                    let temp = imgPoint01;
                                    if (imgPoint01 === 1) {
                                        // 兩欄是一樣的->測試用
                                        setDrag11(obj01.name)
                                    }
                                    if (imgPoint01 === 2) {
                                        setDrag12(obj01.name)
                                    }
                                    if (imgPoint01 === 3) {
                                        setDrag13(obj01.name)
                                    }
                                    temp += 1;
                                    setImgPoint01(temp);

                                }, 1000)
                            }
                        }}
                    />
                    <div className="blog-add-info"></div>
                    <div className="blog-add-info"></div>
                    <div className="blog-add-info"></div>
                </div>
                <div className="upload-imgs">
                    <div className="drags d-flex">
                        <figure className="dragImg drag11" id="drag11" draggable="true">
                            <img className="blog-cover" src={`http://localhost:3009/blogs_img/${drag11}`} id="drag11_img" alt="" />
                        </figure>
                        <figure className="dragImg drag12" id="drag12" draggable="true">
                            <img className="blog-cover" src={`http://localhost:3009/blogs_img/${drag12}`} id="drag12_img" alt="" />
                        </figure>
                        <figure className="dragImg drag13" id="drag13" draggable="true">
                            <img className="blog-cover" src={`http://localhost:3009/blogs_img/${drag13}`} id="drag13_img" alt="" />
                        </figure>
                    </div>
                </div>
                <h2 className="second-h2">第二篇文章</h2>
                <textarea name="" id="" onChange={e => setAddBlogContent02(e.target.value)}></textarea>
                <div className="btn-and-info blog-d-flex">
                    <input type="file" className="btn-and-info-input" name="" id=""
                        onChange={(e) => {
                            if (imgPoint02 === 4) {
                                message.success('圖片上限是 3 張')
                            } else if (imgPoint02 <= 3) {
                                let obj02 = e.target.files[0]
                                goAddImg(e.target.files[0])
                                setTimeout(() => {
                                    let temp = imgPoint02;
                                    if (imgPoint02 === 1) {
                                        setDrag21(obj02.name)
                                    }
                                    if (imgPoint02 === 2) {
                                        setDrag22(obj02.name)
                                    }
                                    if (imgPoint02 === 3) {
                                        setDrag23(obj02.name)
                                    }
                                    temp += 1;
                                    setImgPoint02(temp);
                                }, 1000)
                            }
                        }}
                    />
                    <div className="blog-add-info"></div>
                    <div className="blog-add-info"></div>
                    <div className="blog-add-info"></div>
                </div>
                <div className="upload-imgs">
                    <div className="drags d-flex">
                        <figure className="dragImg drag21" id="drag21" draggable="true">
                            <img className="blog-cover" src={`http://localhost:3009/blogs_img/${drag21}`} id="drag21_img" alt="" />
                        </figure>
                        <figure className="dragImg drag22" id="drag22" draggable="true">
                            <img className="blog-cover" src={`http://localhost:3009/blogs_img/${drag22}`} id="drag22_img" alt="" />
                        </figure>
                        <figure className="dragImg drag23" id="drag23" draggable="true">
                            <img className="blog-cover" src={`http://localhost:3009/blogs_img/${drag23}`} id="drag23_img" alt="" />
                        </figure>
                    </div>
                </div>
                <button className="blog-add-submit" onClick={() => { goBlogAdd() }}>送出</button>
            </div>
        </>
    )


    const ball = $('.ball');
    const rect2 = $('.rect:eq(1)');

    ball.on('dragstart', function (event) {
        // 設定轉移的資料
        event.originalEvent.dataTransfer.setData('text', event.target.id);
    });
    rect2.on('dragover', function (event) {
        event.preventDefault();
    });
    rect2.on('drop', function (event) {
        // 取得轉移的資料
        let id = event.originalEvent.dataTransfer.getData('text');
        if (!id) return;
        const b = $('#' + id).clone(); // 複製 jQuery 元素物件
        b.removeAttr('id');
        rect2.append(b);
    });



}
export default withRouter(BlogMainAdd)
