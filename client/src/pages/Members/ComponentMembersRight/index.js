// 函式元件
import React from 'react';
import {withRouter} from 'react-router-dom'

// antd
import { Radio } from 'antd';

// 測試圖片
// import logo from '../../../assets/img/tw.jpg';


function KMembers(props) {
    const {userdata, setUserdata} = props;
    // const [todos, setTodos] = useState(1); 
    const onChange = (event) => {
        console.log('radio checked', event.target.value);
        // setTodos(event.target.value);
    };

    // const onDataChange = (date, dateString) => {
    //     console.log(date, dateString);
    // };

    // Upload
    // const propss = {
    //     name: 'file',
    //     multiple: false,
    //     accept:"image/png, image/jpeg",
    //     action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    //     headers: {
    //         authorization: 'authorization-text',
    //     },
    //     onChange(info) {
    //         console.log(info.file.status)
    //         if (info.file.status !== 'uploading') {
    //         console.log(info.file, info.fileList);
    //         }
    //         if (info.file.status === 'done') {
    //             message.success(`${info.file.name} file uploaded successfully`);
    //         } else if (info.file.status === 'error') {
    //             message.error(`${info.file.name} file upload failed.`);
    //         }
    //     },
    // };

    return (
        <div className="members_right">
            <div className="members_right_inner">
                {/* title */}
                <div className="members_r_top_text">
                    <h1>我的檔案</h1>
                    <p>管理你的檔案以保護你的帳戶</p>
                </div>
                {/* 主要內容 */}
                <form className="members_r_bottom">
                    {/* 左側表單 */}
                    <div className="r_bottom_left">
                        <ul>
                            <li>
                                <div className="r_bottom_nodel">
                                    <label htmlFor="use">使用者帳號</label>
                                    <span className="iconfont icon-gerenziliao"></span>
                                    <input id="use" className="mem_input" placeholder="otis0710@gmail.com" readOnly defaultValue={userdata.username}/>
                                </div>
                                <span className="r_bottom_err">賬號不可修改</span>
                            </li>
                            <li>
                                <div className="r_bottom_del">
                                    <label htmlFor="name">姓名</label>
                                    <span className="iconfont icon-Personal"></span>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        className="mem_input" 
                                        placeholder="您的大名" 
                                        defaultValue={userdata.name}
                                    />
                                </div>
                                <span className="r_bottom_err">姓名不符合格式</span>
                            </li>
                            <li>
                                <div className="r_bottom_del">
                                    <label htmlFor="email">Email</label>
                                    <span className="iconfont icon-email"></span>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        className="mem_input" 
                                        placeholder="您的電子郵箱" 
                                        defaultValue={userdata.username}
                                    />
                                </div>
                                <span className="r_bottom_err">email格式做錯</span>
                            </li>
                            <li>
                                <div className="r_bottom_del">
                                    <label htmlFor="phone">手機號碼</label>
                                    <span className="iconfont icon-phone"></span>
                                    <input 
                                        type="tel" 
                                        id="phone" 
                                        className="mem_input" 
                                        placeholder="您的手機號碼" 
                                        pattern="[0-9]{2}[0-9]{8}" 
                                        defaultValue={userdata.phoneNumber} 
                                    />
                                </div>
                                <span className="r_bottom_err">手機號碼格式錯誤</span>
                            </li>
                            <li>
                                <div className="r_bottom_del">
                                    <label>性別</label>
                                    <span className="iconfont icon-sex"></span>
                                    {/* <input className="mem_input" placeholder="男"/> */}
                                    <Radio.Group onChange={onChange} value={Number(userdata.gender)}>
                                        <Radio value={1}>男</Radio>
                                        <Radio value={2}>女</Radio>
                                    </Radio.Group>
                                </div>
                                <span className="r_bottom_err">請選擇性別</span>
                            </li>
                            <li>
                                <div className="r_bottom_del">
                                    <label htmlFor="birthday">生日</label>
                                    <span className="iconfont icon-shengri"></span>
                                    <span className="mem_input">
                                        <input 
                                            type="date" 
                                            id="birthday" 
                                            className="ant-picker" 
                                            name="birthday" 
                                            defaultValue={userdata.birthday}
                                        />
                                    </span>
                                </div>
                                <span className="r_bottom_err">生日格式錯誤</span>
                            </li>
                            <li>
                                <button className="r_sumbit" type="sumbit">確認</button>
                            </li>
                        </ul>
                    </div>
                    {/* 右側圖片 */}
                    <div className="r_bottom_right">
                        <img src={`/user_img/${userdata.userlogo}`} alt="image"/>
                        <div className="file-upload">
                            <label htmlFor="upload" className="file-upload__label">上傳圖片</label>
                            <input type="file" id="upload" className="file-upload__input" name="file-upload" defaultValue="" placeholder="商品圖片"/>
                        </div>
                        <div className="r_bottom_logo_update_text">
                            <p>檔案大小: 最大200KB</p>
                            <p>檔案限制: .JPEG / .PNG</p>
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
    )

}
export default withRouter(KMembers);