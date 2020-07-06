// 函式元件
import React, {useState ,useEffect} from 'react';
import { Link, useParams, withRouter} from 'react-router-dom'

import MembersLeft from '../ComponentMembersLeft'


function MembersCartDetail(props) {
    const {userdata, setUserdata, membersCartOrderData, setMembersCartOrderData} = props.allprops;
    const [membersCartOrderDetail, setMembersCartOrderDetail] = useState([])

    let { orderId } = useParams()
    
    // console.log(membersCartOrderDetail[0]['checkPrice'])
    
    const membersCartOrderDetailTotal = () =>{
        let DetailPrice = 0;
        membersCartOrderDetail.map((data, index)=>{
            DetailPrice += parseInt(data['checkPrice'] * data['checkQty'])
        })
        return DetailPrice
    }

    useEffect(() => {
        fetch(`http://localhost:3009/membersEdit/membersOrderDetail/${orderId}`, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(result => result.json())
            .then((response) => {
                // console.log('response', response);
                setMembersCartOrderDetail(response['results'])
            })
    }, [])

        
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
                            <h1>清單詳情</h1>
                            <p>管理你的清單以保護你的荷包</p>
                        </div>
                        {/* 主要內容 */}
                        <div className="members_cart_r_bottom">
                            <ul className="cart_r_change">
                                <li className="cart_r_changeBtn changeBtn_active">內容</li>
                            </ul>
                            
                            {/* 模板 start */}
                            {membersCartOrderDetail ? (
                                <>
                                    <div className="members_cart_r_num">
                                        <ul className="cart_r_list">
                                            {/* 模板 外 */}
                                            <li className="cart_r_list_inner">
                                                <div className="cart_r_title">
                                                    <span>訂單編號 :</span>
                                                    <span>{orderId}</span>
                                                </div>

                                                {/* 收貨地址 */}
                                                <div className="cart_r_detail_address">
                                                    <h3>收件地址</h3>
                                                    <ul>
                                                        <li><span>姓名</span><span>{userdata.name}</span></li>
                                                        <li><span>手機</span><span>(+886) {userdata.phoneNumber}</span></li>
                                                        <li><span>地址</span><span>{userdata.address}</span></li>
                                                    </ul>
                                                </div>

                                                {/* 模板 內 */}
                                                {membersCartOrderDetail.map((data, index)=>{
                                                    return(
                                                        <div className="cart_r_list_row">
                                                            <div className="cart_r_list_row_p_all">
                                                                <img src={`/items_img/${data.itemImg}`}/>
                                                                <div className="cart_r_list_row_p">
                                                                    <p>品名: {data.itemName}</p>
                                                                    <p>品牌: {data.itemsbrand}</p>
                                                                    <p>數量: {data.checkQty}</p>
                                                                    <p>購買時間: {data.created_at}</p>
                                                                </div>
                                                            </div>
                                                            <span className="cart_r_list_price">$ {data.checkPrice}</span>
                                                        </div>
                                                    )
                                                })}
                                                {/* <div className="cart_r_list_row">
                                                    <div className="cart_r_list_row_p_all">
                                                        <img src={logo}/>
                                                        <div className="cart_r_list_row_p">
                                                            <p>超級貴耳機 Apple pro 無聲耳機</p>
                                                            <p>顏色：黑色</p>
                                                            <p>數量： 1</p>
                                                        </div>
                                                    </div>
                                                    <span className="cart_r_list_price">$ 15673</span>
                                                </div> */}
                                            </li>
                                        </ul>
                                        <ul className="cart_r_list_total">
                                            <li className="cart_r_list_total_li">
                                                <span className="cart_r_list_total_li_span">訂單金額：</span>
                                                <span className="cart_r_list_total_li_price">$ {membersCartOrderDetailTotal(membersCartOrderDetail)}</span>
                                            </li>
                                            <li className="cart_r_list_total_search">
                                                <Link to="/KMembers/MembersCartList">返回上一步</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </>
                            ):(
                                <>
                                    <div>無訂單</div>
                                </>
                            )}
                            {/* 模板 end */}
                            
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )

}
export default withRouter(MembersCartDetail);