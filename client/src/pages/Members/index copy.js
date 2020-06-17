// 函式元件
import React, { Fragment,useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link, NavLink, withRouter} from 'react-router-dom'

 // components
import MyNavBar from '../../components/Navbar'
import MyMenu from '../../components/NavbarMenu'
import MyFooter from '../../components/Footer'
// scss
// import './_menu.scss'

// antd
import { Radio, DatePicker  } from 'antd';

import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import locale from 'antd/es/date-picker/locale/zh_CN';

// 測試圖片
import logo from '../../assets/img/tw.jpg';

const { RangePicker } = DatePicker;

function KMembers() {
    const [todos, setTodos] = useState(1); 
    const onChange = (event) => {
        console.log('radio checked', event.target.value);
        setTodos(event.target.value);
    };

    const onDataChange = (date, dateString) => {
        console.log(date, dateString);
    };

    // Upload
    const props = {
        name: 'file',
        multiple: false,
        accept:"image/png, image/jpeg",
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            console.log(info.file.status)
            if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    return (
        <Fragment>
            <header>
                <MyNavBar />
                <MyMenu />
            </header>
            <main>
                <div className="members_all">
                    <div className="members_left">
                        <div className="members_header">
                            <div className="mem_top_inner">
                                <img src={logo}/>
                                <div className="men_text">
                                    <h2>Hello !</h2>
                                    <p>親愛的 <strong>快樂動起來</strong></p>
                                </div>
                            </div>
                            <div className="mem_bottom_inner">
                                <div className="men_title">
                                    <div className="men_title_inner">
                                        <span className="iconfont icon-Personal"></span>
                                        <a className="men_a">我的帳戶</a>
                                    </div>
                                    <ul className="men_u">
                                        <li>
                                            <span className="iconfont icon-reduce_1"></span>
                                            <a>個人檔案</a>
                                        </li>
                                        <li>
                                            <span className="iconfont icon-reduce_1"></span>
                                            <a>更改密碼</a>
                                        </li>
                                        <li>
                                            <span className="iconfont icon-reduce_1"></span>
                                            <a>銀行帳戶</a>
                                        </li>
                                        <li>
                                            <span className="iconfont icon-reduce_1"></span>
                                            <a>地址</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="men_title">
                                    <div className="men_title_inner">
                                        <span className="iconfont icon-date"></span>
                                        <a className="men_a">購買清單</a>
                                    </div>
                                </div>
                                <div className="men_title">
                                    <div className="men_title_inner">
                                        <span className="iconfont icon-safety"></span>
                                        <a className="men_a">我的保固卡</a>
                                    </div>
                                </div>
                                <div className="men_title">
                                    <div className="men_title_inner">
                                        <span className="iconfont icon-blog"></span>
                                        <a className="men_a">我的BLOG</a>
                                        </div>
                                    <ul className="men_u">
                                        <li>
                                            <span className="iconfont icon-reduce_1"></span>
                                            <a>全部 BLOG</a>
                                        </li>
                                        <li>
                                            <span className="iconfont icon-reduce_1"></span>
                                            <a>個人 BLOG</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="members_right">
                        <div className="members_right_inner">
                            {/* title */}
                            <div className="members_r_top_text">
                                <h1>我的檔案</h1>
                                <p>管理你的檔案以保護你的帳戶</p>
                            </div>
                            {/* 主要內容 */}
                            <div className="members_r_bottom">
                                {/* 左側表單 */}
                                <form className="r_bottom_left">
                                    <ul>
                                        <li>
                                            <div className="r_bottom_nodel">
                                                <label>使用者帳號</label>
                                                <span className="iconfont icon-user_2"></span>
                                                <input className="mem_input" placeholder="otis0710@gmail.com"/>
                                            </div>
                                            <span className="r_bottom_err">姓名不符合格式</span>
                                        </li>
                                        <li>
                                            <div className="r_bottom_del">
                                                <label>姓名</label>
                                                <span className="iconfont icon-user_2"></span>
                                                <input className="mem_input" placeholder="Otis"/>
                                            </div>
                                            <span className="r_bottom_err">姓名不符合格式</span>
                                        </li>
                                        <li>
                                            <div className="r_bottom_del">
                                                <label>Email</label>
                                                <span className="iconfont icon-user_2"></span>
                                                <input className="mem_input" placeholder="otis0710@gmail.com"/>
                                            </div>
                                            <span className="r_bottom_err">email格式做錯</span>
                                        </li>
                                        <li>
                                            <div className="r_bottom_del">
                                                <label>手機號碼</label>
                                                <span className="iconfont icon-user_2"></span>
                                                <input className="mem_input" placeholder="098888888"/>
                                            </div>
                                            <span className="r_bottom_err">手機號碼格式錯誤</span>
                                        </li>
                                        <li>
                                            <div className="r_bottom_del">
                                                <label>性別</label>
                                                <span className="iconfont icon-user_2"></span>
                                                {/* <input className="mem_input" placeholder="男"/> */}
                                                <Radio.Group onChange={onChange} value={todos}>
                                                    <Radio value={1}>男</Radio>
                                                    <Radio value={2}>女</Radio>
                                                </Radio.Group>
                                            </div>
                                            <span className="r_bottom_err">請選擇性別</span>
                                        </li>
                                        <li>
                                            <div className="r_bottom_del">
                                                <label>生日</label>
                                                <span className="iconfont icon-user_2"></span>
                                                <span className="mem_input">
                                                    <DatePicker bordered={false} locale={locale} onChange={onDataChange}/>
                                                    {/* <input className="mem_input" /> */}
                                                </span>
                                            </div>
                                            <span className="r_bottom_err">生日格式錯誤</span>
                                        </li>
                                    </ul>
                                </form>
                                {/* 右側圖片 */}
                                <div className="r_bottom_right">
                                    <img src={logo}/>
                                    {/* <button>選擇圖片</button> */}
                                    <Upload {...props}>
                                        <Button>
                                            <UploadOutlined /> 上傳圖片
                                        </Button>
                                    </Upload>
                                    <div className="r_bottom_logo_update_text">
                                        <p>檔案大小: 最大10KB</p>
                                        <p>檔案限制: .JPEG / .PNG</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <MyFooter />
        </Fragment>
    )

}
export default withRouter(KMembers);