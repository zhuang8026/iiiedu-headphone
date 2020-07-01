// 函式元件
import React, { Fragment, useEffect, useState } from 'react'
import { message } from 'antd';
import $ from 'jquery'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    Link,
    NavLink,
    withRouter,
} from 'react-router-dom'

// import '../../../../assets/css/YongBlog/Yong-blog-edit.css'

// -------------------- components --------------------

// -------------------- scss --------------------

// -------------------- imgs --------------------

// -------------------- func --------------------

function BlogMainEditInputs(props) {

    // const {
    //     editBlogTitle,
    //     setEditBlogTitle,
    //     editBlogContent01,
    //     setEditBlogContent01,
    //     editBlogContent02,
    //     setEditBlogContent02
    // } = props;
    // ==================== 欄位資料 ==================== 
    const { userdata, setUserdata, name, setName } = props.allprops;
    const { editId } = props.editId;
    const [detailByEditId, setDetailByEditId] = useState([])
    const [editBlogTitle, setEditBlogTitle] = useState('');
    const [editBlogContent01, setEditBlogContent01] = useState('');
    const [editBlogContent02, setEditBlogContent02] = useState('');
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
    useEffect(() => {
        getEditData()
        setTimeout(() => {
            countPoint()
        }, 2000)
    }, [])
    useEffect(() => {
        $('#blogTitle').val(detailByEditId.blogTitle)
        $('#blogContent01').val(detailByEditId.blogContent01)
        // $('#drag11_img').attr("src",`/blogs_img/${detailByEditId.blogContent01_img01}`)
        // $('#drag12_img').attr("src",`/blogs_img/${detailByEditId.blogContent01_img02}`)
        // $('#drag13_img').attr("src",`/blogs_img/${detailByEditId.blogContent01_img03}`)
        $('#blogContent02').val(detailByEditId.blogContent02)
        // $('#drag21_img').attr("src",`/blogs_img/${detailByEditId.blogContent02_img01}`)
        // $('#drag22_img').attr("src",`/blogs_img/${detailByEditId.blogContent02_img02}`)
        // $('#drag23_img').attr("src",`/blogs_img/${detailByEditId.blogContent02_img03}`)

        console.log('editId =======================> ', editId)
        console.log('editBlogTitle ================> ', editBlogTitle)
        console.log('editBlogContent01 ============> ', editBlogContent01)
        console.log('editBlogContent01_img01 ======> ', drag11)
        console.log('editBlogContent01_img02 ======> ', drag12)
        console.log('editBlogContent01_img03 ======> ', drag13)
        console.log('editBlogContent02 ============> ', editBlogContent02)
        console.log('editBlogContent02_img01 ======> ', drag21)
        console.log('editBlogContent02_img02 ======> ', drag22)
        console.log('editBlogContent02_img03 ======> ', drag23)

    }, [detailByEditId])



    const getEditData = () => {
        fetch('http://localhost:3009/blog/getDetail/', {
            method: 'post',
            body: JSON.stringify({
                blogId: editId,
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
                console.log('results -> ', response.results[0])
                console.log('blogTitle -> ', response.results[0].blogTitle)
                setDetailByEditId(response.results[0])
                setEditBlogTitle(response.results[0].blogTitle)
                setEditBlogContent01(response.results[0].blogContent01)
                setDrag11(response.results[0].blogContent01_img01)
                setDrag12(response.results[0].blogContent01_img02)
                setDrag13(response.results[0].blogContent01_img03)
                setEditBlogContent02(response.results[0].blogContent02)
                setDrag21(response.results[0].blogContent02_img01)
                setDrag22(response.results[0].blogContent02_img02)
                setDrag23(response.results[0].blogContent02_img03)
            })
    }

    const countPoint = () => {
        let temp01 = 1, temp02 = 1;
        if ((drag13 != '') && (drag13 != 'default.jpg')) {
            temp01 = 4;
        } else if ((drag12 != '') && (drag12 != 'default.jpg')) {
            temp01 = 3;
        } else if ((drag11 != '') && (drag11 != 'default.jpg')) {
            temp01 = 2;
        }
        setImgPoint01(temp01)
        if ((drag23 != '') && (drag23 != 'default.jpg')) {
            temp02 = 4;
        } else if ((drag22 != '') && (drag22 != 'default.jpg')) {
            temp02 = 3;
        } else if ((drag21 != '') && (drag21 != 'default.jpg')) {
            temp02 = 2;
        }
        setImgPoint02(temp02)

    }

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



    const goBlogEdit = () => {
        fetch('http://localhost:3009/blog/edit/', {
            method: 'post',
            body: JSON.stringify({
                blogId: editId,
                editBlogTitle: editBlogTitle,
                editBlogContent01: editBlogContent01,
                editBlogContent01_img01: drag11,
                editBlogContent01_img02: drag12,
                editBlogContent01_img03: drag13,
                editBlogContent02: editBlogContent02,
                editBlogContent02_img01: drag21,
                editBlogContent02_img02: drag22,
                editBlogContent02_img03: drag23,
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
                message.success(`修改成功！`);
                setTimeout(() => {
                    // props.history.goBack()
                    props.history.push('/Blog/YongMyBlog');
                }, 2000)
                // if(obj.success){

                // }
            })

    }



    return (
        <>
            <figure className="blog-edit-top-img">
                <h1>部落格編輯頁</h1>
            </figure>
            <div className="blog-edit-in">
                <h1>編輯部落格</h1>
                <div className="underline-1"></div>
                <h2 className="title-h2">文章標題</h2>
                <input
                    className="input-title"
                    type="text"
                    name=""
                    id="blogTitle"
                    // value={detailByEditId.blogTitle}
                    onChange={e => setEditBlogTitle(e.target.value)} />
                <h2 className="first-h2">第一篇文章</h2>
                <textarea name="" id="blogContent01"
                    // value={detailByEditId.blogContent01}
                    onChange={e => setEditBlogContent01(e.target.value)} ></textarea>
                <div className="btn-and-info blog-d-flex">
                    <input type="file" className="btn-and-info-input" name="" id=""
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
                    <div className="blog-edit-info"></div>
                    <div className="blog-edit-info"></div>
                    <div className="blog-edit-info"></div>
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
                <textarea name="" id="blogContent02"
                    // value={detailByEditId.blogContent02}
                    onChange={e => setEditBlogContent02(e.target.value)} ></textarea>
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
                    <div className="blog-edit-info"></div>
                    <div className="blog-edit-info"></div>
                    <div className="blog-edit-info"></div>
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
                <button className="blog-edit-submit" onClick={() => { goBlogEdit() }}>送出</button>
            </div>
        </>
    )
}
export default withRouter(BlogMainEditInputs)
