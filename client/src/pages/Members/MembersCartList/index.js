// 函式元件
import React , {useEffect} from 'react';
import {withRouter, Link} from 'react-router-dom'


import MembersLeft from '../ComponentMembersLeft'

// 測試圖片
import logo from '../../../assets/img/tw.jpg';

function MembersCartList(props) {
    const {userdata, setUserdata, membersCartOrderData, setMembersCartOrderData} = props;

    console.log(membersCartOrderData)

    useEffect(() => {
        fetch("http://localhost:3009/superseller/listSellerUserOrder", {
            method: 'post',
            body: JSON.stringify({
                id: userdata.id,
            }),
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }),
        })
            .then(result => result.json())
            .then((response) => {
                console.log('response', response);
                setMembersCartOrderData(response)
            })
    }, [userdata])

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
                            <h1>購買清單</h1>
                            <p>管理你的清單以保護你的荷包</p>
                        </div>
                        {/* 主要內容 */}
                        <div className="members_cart_r_bottom">
                            <ul className="cart_r_change">
                                <li className="cart_r_changeBtn changeBtn_active">全部</li>
                                <li className="cart_r_changeBtn changeBtn_NoActive">待付款</li>
                                <li className="cart_r_changeBtn changeBtn_NoActive">待出貨</li>
                                <li className="cart_r_changeBtn changeBtn_NoActive">完成</li>
                            </ul>
                            
                            {/* 模板 start */}
                            {membersCartOrderData ? (
                                <>
                                    {membersCartOrderData.map((data, index)=>{
                                        return (<div className="members_cart_r_num">
                                        <ul className="cart_r_list">
                                            {/* 模板 外 */}
                                            <li className="cart_r_list_inner">
                                                <div className="cart_r_title">
                                                    <span>訂單編號 :</span>
                                                    <span>{data.orderId}</span>
                                                </div>
                                                {/* 模板 內 */}
                                                <div className="cart_r_list_row">
                                                    <div className="cart_r_list_row_p_all">
                                                        <img src={logo}/>
                                                        <div className="cart_r_list_row_p">
                                                            <p>超級貴耳機 Apple pro 無聲耳機</p>
                                                            <p>顏色：黑色</p>
                                                            <p>數量： 1</p>
                                                        </div>
                                                    </div>
                                                    <span className="cart_r_list_price">$ 15673</span>
                                                </div>

                                                <div className="cart_r_list_row">
                                                    <div className="cart_r_list_row_p_all">
                                                        <img src={logo}/>
                                                        <div className="cart_r_list_row_p">
                                                            <p>超級貴耳機 Apple pro 無聲耳機</p>
                                                            <p>顏色：黑色</p>
                                                            <p>數量： 1</p>
                                                        </div>
                                                    </div>
                                                    <span className="cart_r_list_price">$ 15673</span>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul className="cart_r_list_total">
                                            <li className="cart_r_list_total_li">
                                                <span className="cart_r_list_total_li_span">訂單金額：</span>
                                                <span className="cart_r_list_total_li_price">$ 31346</span>
                                            </li>
                                            <li className="cart_r_list_total_search">
                                                <Link to="/KMembers/MembersCartDetail">查看詳情</Link>

                                            </li>
                                        </ul>
                                    </div>)
                                    })}
                                </>
                            ):(
                                <div>無訂單</div>
                            )}
                            

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )

}
export default withRouter(MembersCartList);