// 函式元件
import React ,{useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom'

// antd
import { message } from 'antd';

import ComponentSuperSellerLeft from '../ComponentSuperSellerLeft'

function SuperSellerWallet(props) {
    const key = 'updatable';
    const {userdata, setUserdata} = props.allprops;


    useEffect(()=>{
    },[])

    return (
        <main>
            <div className="members_all">
                <ComponentSuperSellerLeft 
                    userdata = {userdata}
                    setUserdata = {setUserdata}
                />

                <div className="members_right">
                    <div className="members_right_inner">
                        {/* title */}
                        <div className="members_r_top_text">
                            <h1>我的錢包</h1>
                            <p>管理你的錢包以便財源滾滾</p>
                        </div>
                        {/* 主要內容 */}
                        <div className="members_r_bottom" name="formUserData">
                            {/* 左側表單 */}
                            <div className="r_bottom_left">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )

}
export default withRouter(SuperSellerWallet);