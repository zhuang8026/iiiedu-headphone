// 函式元件
import React, { Fragment, useEffect, useState } from 'react'
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
// antd
import 'antd/dist/antd.css';
import { message, Modal, notification, Spin } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { CheckCircleFilled } from '@ant-design/icons';
// import '../../../../assets/css/YongBlog/Yong-blog-edit.css'

// -------------------- components --------------------

// -------------------- scss --------------------

// -------------------- imgs --------------------
import editPic from '../../../../assets/img/blog-img/blog-add-and-edit/edit-blog-pic.jpg'

// -------------------- func --------------------

function BlogMainEditInputs(props) {
    const { confirm } = Modal;
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
    const [drag11, setDrag11] = useState('');
    const [drag12, setDrag12] = useState('');
    const [drag13, setDrag13] = useState('');
    const [drag21, setDrag21] = useState('');
    const [drag22, setDrag22] = useState('');
    const [drag23, setDrag23] = useState('');
    // ==================== 指標 ==================== 
    const [imgPoint01, setImgPoint01] = useState(1);
    const [imgPoint02, setImgPoint02] = useState(1);
    useEffect(() => {
        getEditData()
        // setTimeout(() => {


        // }, 2000)
    }, [])
    useEffect(() => {
        $('#blogTitle').val(detailByEditId.blogTitle)
        $('#blogContent01').val(detailByEditId.blogContent01)
        // setEditBlogTitle(detailByEditId.blogTitle)
        // setEditBlogContent01(detailByEditId.blogContent01)
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
        console.log('drag11 ======> ', drag11)
        console.log('drag12 ======> ', drag12)
        console.log('drag11 ======> ', drag13)
        console.log('editBlogContent02 ============> ', editBlogContent02)
        console.log('drag21 ======> ', drag21)
        console.log('drag22 ======> ', drag22)
        console.log('drag23 ======> ', drag23)

    }, [detailByEditId])

    useEffect(() => {
        console.log(editBlogTitle)
    }, [editBlogTitle])
    useEffect(() => {
        countPoint()

    }, [drag11, drag12, drag13, drag21, drag22, drag23,])
    useEffect(() => {
        console.log('imgPoint01-2 ====> ', imgPoint01)
        console.log('imgPoint02-2 ====> ', imgPoint02)
    }, [imgPoint01, imgPoint02])

    // 取得文章內容
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
                setTimeout(() => {
                    console.log('body -> ', response.body)
                    console.log('results -> ', response.results[0])
                    console.log('blogTitle -> ', response.results[0].blogTitle)
                    console.log('blogContent01_img01 -> ', response.results[0].blogContent01_img01)
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
                }, 2000)
            })
    }

    const countPoint = () => {
        let temp01 = 1, temp02 = 1;
        console.log('imgPoint01-1 ====> ', imgPoint01)
        console.log('imgPoint02-1 ====> ', imgPoint02)
        console.log('drag13 ====> ', drag13)
        console.log('drag12 ====> ', drag12)
        console.log('drag11 ====> ', drag11)
        console.log('drag23 ====> ', drag23)
        console.log('drag22 ====> ', drag22)
        console.log('drag21 ====> ', drag21)

        if ((drag13 != '') && (drag13 != 'default.jpg') && (drag13 != null)) {
            temp01 = 4;
            $("#edit-info-13 .edit-box").addClass("active")
        } else if ((drag12 != '') && (drag12 != 'default.jpg') && (drag12 != null)) {
            temp01 = 3;
            $("#edit-info-12 .edit-box").addClass("active")
        } else if ((drag11 != '') && (drag11 != 'default.jpg') && (drag11 != null)) {
            temp01 = 2;
            $("#edit-info-11 .edit-box").addClass("active")
        }
        console.log('temp01 ====> ', temp01)
        setImgPoint01(temp01)


        if ((drag23 != '') && (drag23 != 'default.jpg') && (drag23 != null)) {
            temp02 = 4;
            $("#edit-info-23 .edit-box").addClass("active")
        } else if ((drag22 != '') && (drag22 != 'default.jpg') && (drag22 != null)) {
            temp02 = 3;
            $("#edit-info-22 .edit-box").addClass("active")
        } else if ((drag21 != '') && (drag21 != 'default.jpg') && (drag21 != null)) {
            temp02 = 2;
            $("#edit-info-21 .edit-box").addClass("active")
        }
        console.log('temp02 ====> ', temp02)
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

    // 進行修改提示
    function showEditPromiseConfirm() {
        confirm({
            title: '確定要修改此篇文章?',
            icon: <ExclamationCircleOutlined />,
            content: '按〝確定〞進行修改，修改完畢會自動跳轉。',
            okText: '確定',
            // okType: 'ghost',
            cancelText: '取消',
            onOk() {
                return new Promise((resolve, reject) => {
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1500);
                    goBlogEdit()
                }).catch(() => console.log('Oops errors!'));
            },
            onCancel() { },
        });
    }
    // 進行修改
    const goBlogEdit = () => {
        let temp11, temp12, temp13, temp21, temp22, temp23;
        if (drag11 == 'default.jpg') { temp11 = '' }
        else { temp11 = drag11 }
        if (drag12 == 'default.jpg') { temp12 = '' }
        else { temp12 = drag12 }
        if (drag13 == 'default.jpg') { temp13 = '' }
        else { temp13 = drag13 }
        if (drag21 == 'default.jpg') { temp21 = '' }
        else { temp21 = drag21 }
        if (drag22 == 'default.jpg') { temp22 = '' }
        else { temp22 = drag22 }
        if (drag23 == 'default.jpg') { temp23 = '' }
        else { temp23 = drag23 }
        fetch('http://localhost:3009/blog/edit/', {
            method: 'post',
            body: JSON.stringify({
                blogId: editId,
                editBlogTitle: editBlogTitle,
                editBlogContent01: editBlogContent01,
                editBlogContent01_img01: temp11,
                editBlogContent01_img02: temp12,
                editBlogContent01_img03: temp13,
                editBlogContent02: editBlogContent02,
                editBlogContent02_img01: temp21,
                editBlogContent02_img02: temp22,
                editBlogContent02_img03: temp23,
            }),
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            })
        })
            .then(result => result.json())
            .then(obj => {
                setTimeout(() => {
                    openEditArticleNotification()
                    props.history.push('/Blog/YongMyBlog');
                }, 2000)
            })
    }
    // 修改成功提示
    const openEditArticleNotification = () => {
        const args = {
            message: '修改成功',
            description:
                '您剛修改了一篇文章',
            duration: 5,
            icon: <CheckCircleFilled style={{ color: '#28a745' }} />,
        };
        notification.open(args);
    };




    return (
        <>
            <figure className="blog-edit-top-img">
                <img className="blog-cover" src={editPic}></img>
                {/* <h1>部落格編輯頁</h1> */}
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
                                        $("#edit-info-11 .edit-box").addClass("active")
                                    }
                                    if (imgPoint01 === 2) {
                                        setDrag12(obj01.name)
                                        $("#edit-info-12 .edit-box").addClass("active")
                                    }
                                    if (imgPoint01 === 3) {
                                        setDrag13(obj01.name)
                                        $("#edit-info-13 .edit-box").addClass("active")
                                    }
                                    temp += 1;
                                    setImgPoint01(temp);
                                }, 1000)
                            }
                        }}
                    />
                    <div className="blog-edit-info" id="edit-info-11">
                        <h5>v</h5>
                        <div className="edit-box"></div>
                    </div>
                    <div className="blog-edit-info" id="edit-info-12">
                        <h5>V</h5>
                        <div className="edit-box"></div>
                    </div>
                    <div className="blog-edit-info" id="edit-info-13">
                        <h5>V</h5>
                        <div className="edit-box"></div>
                    </div>
                    <h6>註 : 點兩下圖片可以取消</h6>
                </div>
                <div className="upload-imgs">
                    <div className="drags d-flex">
                        <figure className="dragImg drag11" id="drag11" draggable="true">
                            <img className="blog-cover"
                                src={(drag11 == '' ? `http://localhost:3009/blogs_img/img-empty.png` : `http://localhost:3009/blogs_img/${drag11}`)}
                                id="drag11_img" alt=""
                                onDoubleClick={(e) => {
                                    if (drag11 !== '') {
                                        let startPoint = 1;
                                        let tempPoint = imgPoint01;
                                        console.log('你點了兩下 : drag11')
                                        setDrag11(drag12)
                                        startPoint = startPoint + 1;
                                        if (startPoint == tempPoint) {
                                            tempPoint = tempPoint - 1;
                                            setImgPoint01(tempPoint)
                                            $("#edit-info-11 .edit-box").removeClass("active")
                                        } else {
                                            setDrag12(drag13)
                                            startPoint = startPoint + 1;
                                            if (startPoint == tempPoint) {
                                                tempPoint = tempPoint - 1;
                                                setImgPoint01(tempPoint)
                                                $("#edit-info-12 .edit-box").removeClass("active")
                                            }
                                            else {
                                                setDrag13('default.jpg')
                                                tempPoint = tempPoint - 1;
                                                setImgPoint01(tempPoint)
                                                $("#edit-info-13 .edit-box").removeClass("active")
                                            }
                                        }
                                    }
                                }}
                            />
                        </figure>
                        <figure className="dragImg drag12" id="drag12" draggable="true">
                            <img className="blog-cover"
                                src={(drag12 == '' ? `http://localhost:3009/blogs_img/img-empty.png` : `http://localhost:3009/blogs_img/${drag12}`)}
                                id="drag12_img" alt=""
                                onDoubleClick={(e) => {
                                    if (drag12 !== '') {
                                        let startPoint = 2;
                                        let tempPoint = imgPoint01;
                                        console.log('你點了兩下 : drag12')
                                        setDrag12(drag13)
                                        startPoint = startPoint + 1;
                                        if (startPoint == tempPoint) {
                                            tempPoint = tempPoint - 1;
                                            setImgPoint01(tempPoint)
                                            $("#edit-info-12 .edit-box").removeClass("active")
                                        } else {
                                            setDrag13('default.jpg')
                                            tempPoint = tempPoint - 1;
                                            setImgPoint01(tempPoint)
                                            $("#edit-info-13 .edit-box").removeClass("active")
                                        }
                                    }
                                }}
                            />
                        </figure>
                        <figure className="dragImg drag13" id="drag13" draggable="true">
                            <img className="blog-cover"
                                src={(drag13 == '' ? `http://localhost:3009/blogs_img/img-empty.png` : `http://localhost:3009/blogs_img/${drag13}`)}
                                id="drag13_img" alt=""
                                onDoubleClick={(e) => {
                                    if (drag13 !== '') {
                                        let tempPoint = imgPoint01;
                                        console.log('你點了兩下 : drag13')
                                        setDrag13('default.jpg')
                                        tempPoint = tempPoint - 1;
                                        setImgPoint01(tempPoint)
                                        $("#edit-info-13 .edit-box").removeClass("active")
                                    }
                                }}
                            />
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
                                        $("#edit-info-21 .edit-box").addClass("active")
                                    }
                                    if (imgPoint02 === 2) {
                                        setDrag22(obj02.name)
                                        $("#edit-info-22 .edit-box").addClass("active")
                                    }
                                    if (imgPoint02 === 3) {
                                        setDrag23(obj02.name)
                                        $("#edit-info-23 .edit-box").addClass("active")
                                    }
                                    temp += 1;
                                    setImgPoint02(temp);
                                }, 1000)
                            }
                        }}
                    />
                    <div className="blog-edit-info" id="edit-info-21">
                        <h5>V</h5>
                        <div className="edit-box"></div>
                    </div>
                    <div className="blog-edit-info" id="edit-info-22">
                        <h5>V</h5>
                        <div className="edit-box"></div>
                    </div>
                    <div className="blog-edit-info" id="edit-info-23">
                        <h5>V</h5>
                        <div className="edit-box"></div>
                    </div>
                    <h6>註 : 點兩下圖片可以取消</h6>
                </div>
                <div className="upload-imgs">
                    <div className="drags d-flex">
                        <figure className="dragImg drag21" id="drag21" draggable="true">
                            <img className="blog-cover"
                                src={(drag21 == '' ? `http://localhost:3009/blogs_img/img-empty.png` : `http://localhost:3009/blogs_img/${drag21}`)}
                                id="drag21_img" alt=""
                                onDoubleClick={(e) => {
                                    if (drag21 !== '') {
                                        let startPoint = 1;
                                        let tempPoint = imgPoint02;
                                        console.log('你點了兩下 : drag21')
                                        setDrag21(drag22)
                                        startPoint = startPoint + 1;
                                        if (startPoint == tempPoint) {
                                            tempPoint = tempPoint - 1;
                                            setImgPoint02(tempPoint)
                                            $("#edit-info-21 .edit-box").removeClass("active")
                                        } else {
                                            setDrag22(drag23)
                                            startPoint = startPoint + 1;
                                            if (startPoint == tempPoint) {
                                                tempPoint = tempPoint - 1;
                                                setImgPoint02(tempPoint)
                                                $("#edit-info-22 .edit-box").removeClass("active")
                                            }
                                            else {
                                                setDrag23('default.jpg')
                                                tempPoint = tempPoint - 1;
                                                setImgPoint02(tempPoint)
                                                $("#edit-info-23 .edit-box").removeClass("active")
                                            }
                                        }
                                    }
                                }}
                            />
                        </figure>
                        <figure className="dragImg drag22" id="drag22" draggable="true">
                            <img className="blog-cover"
                                src={(drag22 == '' ? `http://localhost:3009/blogs_img/img-empty.png` : `http://localhost:3009/blogs_img/${drag22}`)}
                                id="drag22_img" alt=""
                                onDoubleClick={(e) => {
                                    if (drag22 !== '') {
                                        let startPoint = 2;
                                        let tempPoint = imgPoint02;
                                        console.log('你點了兩下 : drag22')
                                        setDrag22(drag23)
                                        startPoint = startPoint + 1;
                                        if (startPoint == tempPoint) {
                                            tempPoint = tempPoint - 1;
                                            setImgPoint02(tempPoint)
                                            $("#edit-info-22 .edit-box").removeClass("active")
                                        } else {
                                            setDrag23('default.jpg')
                                            tempPoint = tempPoint - 1;
                                            setImgPoint02(tempPoint)
                                            $("#edit-info-23 .edit-box").removeClass("active")
                                        }
                                    }
                                }}
                            />
                        </figure>
                        <figure className="dragImg drag23" id="drag23" draggable="true">
                            <img className="blog-cover"
                                src={(drag23 == '' ? `http://localhost:3009/blogs_img/img-empty.png` : `http://localhost:3009/blogs_img/${drag23}`)}
                                id="drag23_img" alt=""
                                onDoubleClick={(e) => {
                                    if (drag23 !== '') {
                                        let tempPoint = imgPoint02;
                                        console.log('你點了兩下 : drag23')
                                        setDrag23('default.jpg')
                                        tempPoint = tempPoint - 1;
                                        setImgPoint02(tempPoint)
                                        $("#edit-info-23 .edit-box").removeClass("active")
                                    }
                                }}
                            />
                        </figure>
                    </div>
                </div>
                <button className="blog-edit-submit" onClick={() => { showEditPromiseConfirm() }}>送出</button>
            </div>
            <div className="blog-edit-loading">
                <Spin />
            </div>
        </>
    )
}
export default withRouter(BlogMainEditInputs)
