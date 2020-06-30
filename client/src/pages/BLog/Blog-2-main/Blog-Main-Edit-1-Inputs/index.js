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
    const { userdata, setUserdata, name, setName } = props.allprops;
    const { editId } = props.editId;
    const [detailByEditId, setDetailByEditId] = useState([])
    const [editBlogTitle, setEditBlogTitle] = useState('');
    const [editBlogContent01, setEditBlogContent01] = useState('');
    const [editBlogContent01_img01, setEditBlogContent01_img01] = useState('');
    const [editBlogContent01_img02, setEditBlogContent01_img02] = useState('');
    const [editBlogContent01_img03, setEditBlogContent01_img03] = useState('');
    const [editBlogContent02, setEditBlogContent02] = useState('');
    const [editBlogContent02_img01, setEditBlogContent02_img01] = useState('');
    const [editBlogContent02_img02, setEditBlogContent02_img02] = useState('');
    const [editBlogContent02_img03, setEditBlogContent02_img03] = useState('');
    useEffect(() => {
        getEditData()
        // setTimeout(() => {
        //     setField()
        // }, 2000)
    }, [])
    useEffect(() => {
        console.log('***', detailByEditId.blogContent01)
        $('#blogTitle').val(detailByEditId.blogTitle)
        $('#blogContent01').val(detailByEditId.blogContent01)
        // $('#drag11_img').attr("src",`/blogs_img/${detailByEditId.blogContent01_img01}`)
        // $('#drag12_img').attr("src",`/blogs_img/${detailByEditId.blogContent01_img02}`)
        // $('#drag13_img').attr("src",`/blogs_img/${detailByEditId.blogContent01_img03}`)
        $('#blogContent02').val(detailByEditId.blogContent02)
        // $('#drag21_img').attr("src",`/blogs_img/${detailByEditId.blogContent02_img01}`)
        // $('#drag22_img').attr("src",`/blogs_img/${detailByEditId.blogContent02_img02}`)
        // $('#drag23_img').attr("src",`/blogs_img/${detailByEditId.blogContent02_img03}`)

        console.log('editId =======================> ',editId)
        console.log('editBlogTitle ================> ',editBlogTitle)
        console.log('editBlogContent01 ============> ',editBlogContent01)
        console.log('editBlogContent01_img01 ======> ',editBlogContent01_img01)
        console.log('editBlogContent01_img02 ======> ',editBlogContent01_img02)
        console.log('editBlogContent01_img03 ======> ',editBlogContent01_img03)
        console.log('editBlogContent02 ============> ',editBlogContent02)
        console.log('editBlogContent02_img01 ======> ',editBlogContent02_img01)
        console.log('editBlogContent02_img02 ======> ',editBlogContent02_img02)
        console.log('editBlogContent02_img03 ======> ',editBlogContent02_img03)

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
                setEditBlogContent01_img01(response.results[0].blogContent01_img01)
                setEditBlogContent01_img02(response.results[0].blogContent01_img02)
                setEditBlogContent01_img03(response.results[0].blogContent01_img03)
                setEditBlogContent02(response.results[0].blogContent02)
                setEditBlogContent02_img01(response.results[0].blogContent02_img01)
                setEditBlogContent02_img02(response.results[0].blogContent02_img02)
                setEditBlogContent02_img03(response.results[0].blogContent02_img03)
            })
    }

    // const setField = () => {



    // }

    const goBlogEdit = () => {
        fetch('http://localhost:3009/blog/edit/', {
            method: 'post',
            body: JSON.stringify({
                blogId: editId,
                editBlogTitle: editBlogTitle,
                editBlogContent01: editBlogContent01,
                editBlogContent01_img01: editBlogContent01_img01,
                editBlogContent01_img02: editBlogContent01_img02,
                editBlogContent01_img03: editBlogContent01_img03,
                editBlogContent02: editBlogContent02,
                editBlogContent02_img01: editBlogContent02_img01,
                editBlogContent02_img02: editBlogContent02_img02,
                editBlogContent02_img03: editBlogContent02_img03,
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
                    <input type="file" className="btn-and-info-input" name="" id="" />
                    <div className="blog-edit-info"></div>
                    <div className="blog-edit-info"></div>
                    <div className="blog-edit-info"></div>
                </div>
                <div className="upload-imgs">
                    <div className="drags d-flex">
                        <figure className="dragImg drag11" id="drag11" draggable="true">
                            <img className="blog-cover" src={`http://localhost:3009/blogs_img/${editBlogContent01_img01}`} id="drag11_img" alt="" />
                        </figure>
                        <figure className="dragImg drag12" id="drag12" draggable="true">
                            <img className="blog-cover" src={`http://localhost:3009/blogs_img/${editBlogContent01_img02}`} id="drag12_img" alt="" />
                        </figure>
                        <figure className="dragImg drag13" id="drag13" draggable="true">
                            <img className="blog-cover" src={`http://localhost:3009/blogs_img/${editBlogContent01_img03}`} id="drag13_img" alt="" />
                        </figure>
                    </div>
                </div>
                <h2 className="second-h2">第二篇文章</h2>
                <textarea name="" id="blogContent02"
                    // value={detailByEditId.blogContent02}
                    onChange={e => setEditBlogContent02(e.target.value)} ></textarea>
                <div className="btn-and-info blog-d-flex">
                    <input type="file" className="btn-and-info-input" name="" id="" />
                    <div className="blog-edit-info"></div>
                    <div className="blog-edit-info"></div>
                    <div className="blog-edit-info"></div>
                </div>
                <div className="upload-imgs">
                    <div className="drags d-flex">
                        <figure className="dragImg drag21" id="drag21" draggable="true">
                            <img className="blog-cover" src={`http://localhost:3009/blogs_img/${editBlogContent02_img01}`} id="drag21_img" alt="" />
                        </figure>
                        <figure className="dragImg drag22" id="drag22" draggable="true">
                            <img className="blog-cover" src={`http://localhost:3009/blogs_img/${editBlogContent02_img02}`} id="drag22_img" alt="" />
                        </figure>
                        <figure className="dragImg drag23" id="drag23" draggable="true">
                            <img className="blog-cover" src={`http://localhost:3009/blogs_img/${editBlogContent02_img03}`} id="drag23_img" alt="" />
                        </figure>
                    </div>
                </div>
                <button className="blog-edit-submit" onClick={() => { goBlogEdit() }}>送出</button>
            </div>
        </>
    )
}
export default withRouter(BlogMainEditInputs)
