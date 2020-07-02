// 函式元件
import React from 'react';
import { withRouter} from 'react-router-dom';

import { message } from 'antd';

import MembersLeft from '../ComponentMembersLeft';

// 測試圖片
import visa from '../../../assets/img/visa.png';

function MembersBank(props) {
    const key = 'updatable';
    const {userdata, setUserdata} = props;
    console.log('userdata', userdata);


    const membersEditBankCallback = () => {
        fetch('http://localhost:3009/membersEdit/bank', {
            method: 'post',
            body:JSON.stringify({
                card:  userdata.card,
                pin: userdata.pin,
                id: userdata.id
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
                        // props.history.push('/KMembers/MembersAdress');
                    }, 1000);
                    
                } else {
                    message.info(`資料無改變`)
                }
                
            })
    }

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
                            <h1>我的信用卡</h1>
                            <p>管理你的檔案以保護你的帳戶</p>
                        </div>
                        {/* 主要內容 */}
                        <div className="members_pwa_r_bottom">
                            <ul className="members_pwa_r_inner">
                                <li>
                                    <div className="members_card">
                                        <img src={visa}/>
                                        <h3>VISA</h3>
                                        <span>
                                            <input 
                                                type="text" 
                                                placeholder="您的信用卡" 
                                                defaultValue={userdata.card}
                                                size="25"
                                                onChange = {(e)=>{
                                                    setUserdata({
                                                        ...userdata,
                                                        card: e.target.value
                                                    })
                                                }}
                                            />
                                        </span>
                                        <span>PIN : 
                                            <input 
                                                type="text" 
                                                placeholder="您的信用卡後三碼" 
                                                defaultValue={userdata.pin}
                                                maxLength="3"
                                                onChange = {(e)=>{
                                                    setUserdata({
                                                        ...userdata,
                                                        pin: e.target.value
                                                    })
                                                }}
                                            />
                                        </span>
                                    </div>
                                    <div className="members_card_button">
                                        <button 
                                            className="members_update men_btn_style"
                                            onClick={()=>membersEditBankCallback()}
                                        >修改</button>
                                        <button className="members_del men_btn_style">刪除</button>
                                    </div>
                                </li>
                            </ul>
                            <button className="members_add">新增</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )

}
export default withRouter(MembersBank);