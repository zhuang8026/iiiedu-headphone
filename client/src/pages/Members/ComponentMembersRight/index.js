// 函式元件
import React ,{useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom'

// antd
// import { message } from 'antd';

function KMembers(props) {
    const {userdata, name, setName, phoneNumber, setPhoneNumber, gender, setGender, birthday, setBirthday} = props.allprops;

    const [logoData, setLogoData ] = useState();

    const myImgEditCallback = () =>{
        const filedata = new FormData(document.formUserData);
        console.log(filedata)
        fetch('http://localhost:3009/membersEdit/imgUpload', {
            method: 'POST',
            body:filedata,
            // headers: new Headers({
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json',
            // })
        })
            .then((res)=>{
                return res.json() // json()	返回 Promise，resolves 是 JSON 物件
            })
            .then(obj=>{
                console.log(obj);
            })
    }

    const myDataEditCallback = () => {
        fetch('http://localhost:3009/membersEdit/userUpload', {
            method: 'post',
            body:JSON.stringify({
                name:  name,
                phoneNumber: phoneNumber,
                gender: gender,
                userlogo: logoData,
                birthday: birthday,
                id: userdata['id']
            }),
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            })
            })
            .then(result=>result.json())
            .then(obj=>{
                console.log(obj);
                
            })
    
    }


    useEffect(()=>{
        setLogoData(userdata.userlogo)
        setPhoneNumber(userdata.phoneNumber)
        setGender(userdata.gender)
        setBirthday(userdata.birthday)
    },[userdata])

    return (
        <div className="members_right">
            <div className="members_right_inner">
                {/* title */}
                <div className="members_r_top_text">
                    <h1>我的檔案</h1>
                    <p>管理你的檔案以保護你的帳戶</p>
                </div>
                {/* 主要內容 */}
                <form className="members_r_bottom" name="formUserData">
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
                                        onChange = {(e)=>{
                                            setName(e.target.value)
                                        }} 
                                    />
                                </div>
                                <span className="r_bottom_err">姓名不符合格式</span>
                            </li>
                            {/* <li>
                                <div className="r_bottom_del">
                                    <label htmlFor="email">Email</label>
                                    <span className="iconfont icon-email"></span>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        className="mem_input" 
                                        placeholder="您的電子郵箱 暫時無此欄位"
                                        readOnly 
                                        defaultValue={userdata.username}
                                    />
                                </div>
                                <span className="r_bottom_err">email格式做錯</span>
                            </li> */}
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
                                        maxLength="10" 
                                        defaultValue={userdata.phoneNumber}
                                        onChange = {(e)=>{
                                            setPhoneNumber(e.target.value)
                                        }} 
                                    />
                                </div>
                                <span className="r_bottom_err">手機號碼格式錯誤</span>
                            </li>
                            <li>
                                <div className="r_bottom_del">
                                    <label>性別</label>
                                    <span className="iconfont icon-sex"></span>
                                    <select 
                                        className="mem_input" 
                                        defaultValue={gender}
                                        value = {gender}
                                        onChange = {(e)=>{
                                            // console.log(e.target.selectedIndex+1)
                                            setGender(e.target.selectedIndex)
                                        }} 
                                    >
                                        <option value = "0">請選擇性別</option>
                                        <option value = "1">男</option>
                                        <option value = "2">女</option>
                                    </select>
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
                                            value = {birthday}
                                            onChange = {(e)=>{
                                                console.log(e.target.value)
                                                setBirthday(e.target.value)
                                            }} 
                                        />
                                    </span>
                                </div>
                                <span className="r_bottom_err">生日格式錯誤</span>
                            </li>
                            <li>
                                <button className="r_sumbit" type="sumbit" onClick={()=>{ myDataEditCallback() }}>確認</button>
                            </li>
                        </ul>
                    </div>
                    {/* 右側圖片 */}
                    <div className="r_bottom_right">
                        <img src={`/user_img/${userdata.userlogo}`} alt="image"/>
                        <div className="file-upload">
                            {/* <label htmlFor="file_upload" className="file-upload__label">上傳圖片</label> */}
                            <input 
                                type="file" 
                                id="file_upload" 
                                className="file_upload" 
                                name="file_upload" 
                                defaultValue="" 
                                placeholder="商品圖片"
                                onChange = {(e)=>{
                                    console.log(e.target.files[0])
                                    // console.log(e.target.files[0].name)
                                    setLogoData(e.target.files[0].name)
                                    myImgEditCallback(e.target.files[0])
                                }}
                                // onClick={()=>{ myImgEditCallback() }}
                            />
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