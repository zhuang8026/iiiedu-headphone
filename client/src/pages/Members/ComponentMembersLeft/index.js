// 函式元件
import React from 'react';
import { NavLink, Link, withRouter} from 'react-router-dom'

// antd
import { message } from 'antd';
import { Modal } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

import axios from 'axios';

function MembersLeft(props) {
    const {userdata} = props;
    const key = 'updatable';

    console.log(userdata)

        // 是否要成為賣家 ？
        const changeSuperSeller =() =>{
            Modal.confirm({
                title: '權限升級提示',
                icon: <QuestionCircleOutlined />,
                content: '您想成為我們OTIS的賣家嗎?',
                okText: '確定',
                cancelText: '取消',
                onOk() { // yes function 
                    return new Promise((res, rej) => {
                        setTimeout(Math.random() > 0.5 ? res : rej, 1000);
                        axios.post('',{
                            // id: deleteIdData,
                            // isActivated: isActivated,
                            // shopopen: shopopen
                        })
                            .then((resolve, reject)=>{
                                if(resolve.data.success) {
                                    // console.log(resolve);
                                    setTimeout(() => {
                                        message.success({ content: '刪除成功!', key, duration: 2 });
                                        props.history.go(0); // Question ：強行跳轉 不得已才這樣做 
                                        // setSellerProductData(SellerProductData); // 沒反應
                                    }, 1000)
                                } else {
                                    message.info("刪除失敗")
                                }
                            })
                        
                    }).catch(() => console.log('Oops errors!'));
                },
                onCancel() { // Cancel function 
                    message.info("刪除失敗")
                },
            })
        }

    return (
        <div className="members_left">
            <div className="members_header">
                <div className="mem_top_inner">
                    <Link to="/KMembers">
                        <img src={`/user_img/${userdata.userlogo}`} alt="photo/icon"/>
                    </Link>
                    <div className="men_text">
                        <h2>Hello !</h2>
                        <p>親愛的 <strong>{userdata.name}</strong></p>
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
                                <NavLink to="/KMembers">個人檔案</NavLink>
                            </li>
                            <li>
                                <span className="iconfont icon-reduce_1"></span>
                                <NavLink to="/KMembers/MembersPwa">更改密碼</NavLink>
                            </li>
                            <li>
                                <span className="iconfont icon-reduce_1"></span>
                                <NavLink to="/KMembers/MembersBank">銀行帳戶</NavLink>
                            </li>
                            <li>
                                <span className="iconfont icon-reduce_1"></span>
                                <NavLink to="/KMembers/MembersAdress">地址</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="men_title">
                        <div className="men_title_inner">
                            <span className="iconfont icon-date"></span>
                                <NavLink to="/KMembers/MembersCartList">購買清單</NavLink>
                        </div>
                    </div>
                    <div className="men_title">
                        <div className="men_title_inner">
                            <span className="iconfont icon-safety"></span>
                            {userdata.isActivated==1 && userdata.shopopen==1 ? (
                                <NavLink className="men_a men_ok" to="/SuperSeller" >我的商場</NavLink>
                            ):(
                                <span 
                                    className="men_a men_no"
                                    onClick={
                                        changeSuperSeller()
                                    }
                                >我的商場</span>
                            )}
                        </div>
                    </div>
                    <div className="men_title">
                        <div className="men_title_inner">
                            <span className="iconfont icon-blog"></span>
                                <NavLink className="men_a" to="/KMembers/MembersBlog" >我的BLOG</NavLink>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(MembersLeft);