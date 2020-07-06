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
        fetch("http://localhost:3009/membersEdit/membersOrder", {
            method: 'post',
            body: JSON.stringify({
                id: userdata.id,
                username: userdata.username,
            }),
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }),
        })
            .then(result => result.json())
            .then((response) => {
                console.log('response', response);
                setMembersCartOrderData(response['results'])
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
                            {membersCartOrderData.length>0 ? (
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
                                                        <img src={`/user_img/${data.userlogo}`} alt="頭像"/>
                                                        <div className="cart_r_list_row_p">
                                                            <p>{data.paymentTypeName}</p>
                                                            <p>{data.deliveryTypeName}</p>
                                                            <p>{data.created_at}</p>
                                                        </div>
                                                    </div>
                                                    <span className="cart_r_list_price">{data.paymentStateTypeName}</span>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul className="cart_r_list_total">
                                            <li className="cart_r_list_total_li">
                                                <span className="iconfont icon-safety"></span>
                                                <span className="cart_r_list_total_li_span">需付金額：</span>
                                                <span className="cart_r_list_total_li_price">$ {data.total}</span>
                                            </li>
                                            <li className="cart_r_list_total_search">
                                                <Link to={"/KMembers/MembersCartDetail/"+data.orderId}>查看訂單詳情</Link>
                                            </li>
                                        </ul>
                                    </div>)
                                    })}
                                </>
                            ):(
                                <>
                                    <div className="cartBtnError">
                                        <p>很抱歉...請您還沒購買任何商品</p>
                                        <Link to="/YyProduct">
                                            <i class="iconfont icon-search"></i>
                                            去商店
                                        </Link>
                                    </div>
                                </>
                            )}
                            

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )

}
export default withRouter(MembersCartList);