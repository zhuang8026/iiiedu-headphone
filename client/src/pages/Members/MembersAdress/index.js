// 函式元件
import React, { useEffect, useState } from 'react';
import { withRouter} from 'react-router-dom'

import { message } from 'antd';

import MembersLeft from '../ComponentMembersLeft'

function MembersAdress(props) {
    const key = 'updatable';
    const {userdata, setUserdata} = props;
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    console.log('userdata', userdata);

    console.log(name, phoneNumber, address) // 問題：第一次存儲無跳轉資料

    const membersEditCallback = () => {
        fetch('http://localhost:3009/membersEdit/edit', {
            method: 'post',
            body:JSON.stringify({
                name:  name,
                phoneNumber: phoneNumber,
                address: address,
                id: userdata['id']
                // username:localUser['username']
            }),
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            })
        })
            .then(result=>result.json())
            .then(obj=>{
                console.log(obj);
                // obj.success ? message.success(`修改成功`) : message.info(`資料無改變`);
                if(obj.success) {
                    message.loading({ content: 'Loading...', key });
                    setTimeout(() => {
                        message.success({ content: '修改成功!', key, duration: 2 });
                        props.history.push('/KMembers/MembersAdress');
                    }, 1000);
                    
                } else {
                    message.info(`資料無改變`)
                }
                
            })
    }

    useEffect(()=>{
        // console.log("測試測試")
        setName(userdata.name);
        setPhoneNumber(userdata.phoneNumber);
        setAddress(userdata.address);

    },[userdata])

    return (
        <main>
            <div className="members_all">
                <MembersLeft
                    userdata = {userdata}
                    setUserdata = {setUserdata}
                />
                <div className="members_right">
                    <div className="members_right_inner">
                        {/* title */}
                        <div className="members_r_top_text">
                            <h1>我的地址</h1>
                            <p>管理你的檔案以保護你的帳戶</p>
                        </div>
                        {/* 主要內容 */}
                        <div className="members_address_r_bottom">
                            <div className="raddress_bottom_left">
                                <ul className="raddress_bottom_left_ul">
                                    <li>
                                        <div className="address_bottom_nodel">
                                            <label htmlFor="use">姓名</label>
                                            <span className="iconfont icon-user_2"></span>
                                            <input 
                                                type="text" 
                                                id="use" 
                                                className="address_input"
                                                placeholder="您的大名" 
                                                defaultValue={name}
                                                onChange={e => setName(e.target.value)}
                                            />
                                        </div>
                                        <span className="address_bottom_err">姓名不符合格式</span>
                                    </li>
                                    <li>
                                        <div className="address_bottom_nodel">
                                            <label htmlFor="name">手機</label>
                                            <span className="iconfont icon-phone"></span> 
                                            <input 
                                                id="name" 
                                                type="tel"
                                                className="address_input" 
                                                placeholder="您的手機號碼" 
                                                pattern="[0-9]{2}[0-9]{8}" 
                                                defaultValue={phoneNumber} 
                                                onChange={e => setPhoneNumber(e.target.value)}
                                            />
                                        </div>
                                        <span className="address_bottom_err">手機號碼不符合格式</span>
                                    </li>
                                    <li>
                                        <div className="address_bottom_nodel">
                                            <label htmlFor="email">地址</label>
                                            <span className="iconfont icon-address"></span>
                                            <input 
                                                type="email" 
                                                id="email" 
                                                className="address_input" 
                                                placeholder="您的送貨地址" 
                                                defaultValue={address} 
                                                onChange={e => setAddress(e.target.value)}
                                            />
                                        </div>
                                        <span className="address_bottom_err">地址格式錯誤</span>
                                    </li>
                                </ul>
                                <div className="address_bottom_btn_inner">
                                    <button className="address_btn" onClick={()=>membersEditCallback()}>修改</button>
                                    <button className="address_btn">清空</button>
                                </div>
                            </div>
                            {/* <button className="address_add_btn">新增</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )

}
export default withRouter(MembersAdress);