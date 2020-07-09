// 函式元件
import React, { Fragment, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Files from 'react-files'
import $ from 'jquery'
import Draggable from 'react-draggable';

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
import { message, Modal, notification } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { CheckCircleFilled } from '@ant-design/icons';
// import '../../../../assets/css/YongBlog/Yong-blog-add.css'

// -------------------- components --------------------

// -------------------- scss --------------------

// -------------------- imgs --------------------
import addPic from '../../../../assets/img/blog-img/blog-add-and-edit/add-blog-pic.jpg'
import success from '../../../../assets/img/blog-img/blog-add-and-edit/blog-success.svg'
import success_active from '../../../../assets/img/blog-img/blog-add-and-edit/blog-success-active.svg'
// import testtest from './../../../../../public/blogs_img/world-map.jpg'

// -------------------- func --------------------

function BlogMainAdd(props) {
    const { confirm } = Modal;
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
    const [drag11, setDrag11] = useState('');
    const [drag12, setDrag12] = useState('');
    const [drag13, setDrag13] = useState('');
    const [drag21, setDrag21] = useState('');
    const [drag22, setDrag22] = useState('');
    const [drag23, setDrag23] = useState('');
    // ==================== 指標 ==================== 
    const [imgPoint01, setImgPoint01] = useState(1);
    const [imgPoint02, setImgPoint02] = useState(1);
    // const [selectedFile, setSelectedFile] = useState([]);


    useEffect(() => {
        // $(ReactDOM.findDOMNode($('#drag11_img'))).draggable();
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

    useEffect(() => {
        console.log('更新imgPoint01 : ', imgPoint01)
        console.log('更新imgPoint02 : ', imgPoint02)
    }, [imgPoint01, imgPoint02]);
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


    // 新增文章提示
    const showAddPromiseConfirm = () => {
        confirm({
            title: '確定要新增此篇文章?',
            icon: <ExclamationCircleOutlined />,
            content: '按〝確定〞進行新增，新增完畢會自動跳轉。',
            okText: '確定',
            // okType: 'ghost',
            cancelText: '取消',
            onOk() {
                return new Promise((resolve, reject) => {
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1500);
                    goBlogAdd()
                }).catch(() => console.log('Oops errors!'));
            },
            onCancel() { },
        });
    }
    // 新增文章
    const goBlogAdd = () => {
        let temp11, temp12, temp13, temp21, temp22, temp23;
        if (drag11 == 'img-empty.png') { temp11 = '' }
        else { temp11 = drag11 }
        if (drag12 == 'img-empty.png') { temp12 = '' }
        else { temp12 = drag12 }
        if (drag13 == 'img-empty.png') { temp13 = '' }
        else { temp13 = drag13 }
        if (drag21 == 'img-empty.png') { temp21 = '' }
        else { temp21 = drag21 }
        if (drag22 == 'img-empty.png') { temp22 = '' }
        else { temp22 = drag22 }
        if (drag23 == 'img-empty.png') { temp23 = '' }
        else { temp23 = drag23 }
        fetch('http://localhost:3009/blog/add', {
            method: 'POST',
            body: JSON.stringify({
                id: userdata.id,
                addBlogTitle: addBlogTitle,
                addBlogContent01: addBlogContent01,
                addBlogContent01_img01: temp11,
                addBlogContent01_img02: temp12,
                addBlogContent01_img03: temp13,
                addBlogContent02: addBlogContent02,
                addBlogContent02_img01: temp21,
                addBlogContent02_img02: temp22,
                addBlogContent02_img03: temp23,
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
                if (response.success == true) {                    
                    setTimeout(() => {
                        openAddArticleNotification()
                        props.history.push('/Blog/YongMyBlog');
                    }, 1500)
                }
            })
    }
    // 新增成功提示
    const openAddArticleNotification = () => {
        const args = {
            message: '新增成功',
            description:
                '您剛新增了一篇文章',
            duration: 3,
            icon: <CheckCircleFilled style={{ color: '#28a745' }} />,
        };
        notification.open(args);
    };









    return (
        <>
            {/* <figure className="blog-add-top-img">
                <img className="blog-cover" src={addPic}></img>               
            </figure> */}
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
                                        setDrag11(obj01.name)
                                        $("#add-info-11 .add-box").addClass("active")
                                    }
                                    if (imgPoint01 === 2) {
                                        setDrag12(obj01.name)
                                        $("#add-info-12 .add-box").addClass("active")
                                    }
                                    if (imgPoint01 === 3) {
                                        setDrag13(obj01.name)
                                        $("#add-info-13 .add-box").addClass("active")
                                    }
                                    temp += 1;
                                    setImgPoint01(temp);

                                }, 1000)
                            }
                        }}
                    />
                    <div className="blog-add-info" id="add-info-11">
                    
                        <div className="add-box">
                            <i className="iconfont icon-replace"></i>
                        </div>
                    </div>
                    <div className="blog-add-info" id="add-info-12">
                        {/* <h5>V</h5> */}
                        <div className="add-box">
                        <i className="iconfont icon-replace"></i>
                        </div>
                    </div>
                    <div className="blog-add-info" id="add-info-13">
                        {/* <h5>V</h5> */}
                        <div className="add-box">
                        <i className="iconfont icon-replace"></i>
                        </div>
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
                                            $("#add-info-11 .add-box").removeClass("active")
                                        } else {
                                            setDrag12(drag13)
                                            startPoint = startPoint + 1;
                                            if (startPoint == tempPoint) {
                                                tempPoint = tempPoint - 1;
                                                setImgPoint01(tempPoint)
                                                $("#add-info-12 .add-box").removeClass("active")
                                            }
                                            else {
                                                setDrag13('img-empty.png')
                                                tempPoint = tempPoint - 1;
                                                setImgPoint01(tempPoint)
                                                $("#add-info-13 .add-box").removeClass("active")
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
                                            $("#add-info-12 .add-box").removeClass("active")
                                        } else {
                                            setDrag13('img-empty.png')
                                            tempPoint = tempPoint - 1;
                                            setImgPoint01(tempPoint)
                                            $("#add-info-13 .add-box").removeClass("active")
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
                                        setDrag13('img-empty.png')
                                        tempPoint = tempPoint - 1;
                                        setImgPoint01(tempPoint)
                                        $("#add-info-13 .add-box").removeClass("active")
                                    }

                                }}
                            />
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
                                        $("#add-info-21 .add-box").addClass("active")
                                    }
                                    if (imgPoint02 === 2) {
                                        setDrag22(obj02.name)
                                        $("#add-info-22 .add-box").addClass("active")
                                    }
                                    if (imgPoint02 === 3) {
                                        setDrag23(obj02.name)
                                        $("#add-info-23 .add-box").addClass("active")
                                    }
                                    temp += 1;
                                    setImgPoint02(temp);
                                }, 1000)
                            }
                        }}
                    />
                    <div className="blog-add-info" id="add-info-21">
                        {/* <h5>V</h5> */}
                        <div className="add-box">
                        <i className="iconfont icon-replace"></i>
                        </div>
                    </div>
                    <div className="blog-add-info" id="add-info-22">
                        {/* <h5>V</h5> */}
                        <div className="add-box">
                        <i className="iconfont icon-replace"></i>
                        </div>
                    </div>
                    <div className="blog-add-info" id="add-info-23">
                        {/* <h5>V</h5> */}
                        <div className="add-box">
                        <i className="iconfont icon-replace"></i>
                        </div>
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
                                            $("#add-info-21 .add-box").removeClass("active")
                                        } else {
                                            setDrag22(drag23)
                                            startPoint = startPoint + 1;
                                            if (startPoint == tempPoint) {
                                                tempPoint = tempPoint - 1;
                                                setImgPoint02(tempPoint)
                                                $("#add-info-22 .add-box").removeClass("active")
                                            }
                                            else {
                                                setDrag23('img-empty.png')
                                                tempPoint = tempPoint - 1;
                                                setImgPoint02(tempPoint)
                                                $("#add-info-23 .add-box").removeClass("active")
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
                                            $("#add-info-22 .add-box").removeClass("active")
                                        } else {
                                            setDrag23('img-empty.png')
                                            tempPoint = tempPoint - 1;
                                            setImgPoint02(tempPoint)
                                            $("#add-info-23 .add-box").removeClass("active")
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
                                        setDrag23('img-empty.png')
                                        tempPoint = tempPoint - 1;
                                        setImgPoint02(tempPoint)
                                        $("#add-info-23 .add-box").removeClass("active")
                                    }

                                }}
                            />
                        </figure>
                    </div>
                </div>
                <button className="blog-add-submit wi_button btn btn-navy btn-fill-vert-o" onClick={() => { showAddPromiseConfirm() }}>送出</button>
            </div>
        </>
    )
}
export default withRouter(BlogMainAdd)
