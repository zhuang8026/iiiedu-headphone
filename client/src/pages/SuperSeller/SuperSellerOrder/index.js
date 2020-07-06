// 函式元件
import React, { useEffect, useState } from 'react';
import { withRouter, BrowserRouter as Router } from 'react-router-dom'

// antd
import { Switch } from 'antd';
import { message } from 'antd';
import axios from 'axios';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import SuperSellerOrderDetail from '../SuperSellerOrderDetail/index'

import '../../../assets/scss/SuperSellerOrder.scss'
function SuperSellerOrder(props) {
    const key = 'updatable';
    // 父層 傳入 hooks
    const { userdata, setUserdata, sellerOrderData, setSellerOrderData } = props.allprops;
    const [SellerProductData, setSellerProductData] = useState([]) 
    const user = localStorage.getItem('memberData');
    // console.log('userdata',userdata)
    // console.log('SellerOrderData',SellerOrderData)
    const { detailitems, setlovechange, setcompareschange, setcartchange} = props;
    const [SellerOrderDetailData,setSellerOrderDetailData] =useState();
    const [orderdetailitems, setorderdetailitems] = useState([]);
    const [itemchange, setitemchange] = useState(false); 
    console.log(sellerOrderData)
const superSellerCheck = (orderId)=> {
    fetch("http://localhost:3009/superseller/listSellerUserOrderDetail", {
        method: 'post',
        body:JSON.stringify({
            id: orderId
        }),
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        })
    })
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            console.log(res)
            setorderdetailitems(res)
            console.log(orderdetailitems)
        })

          }


    useEffect(() => {
        superSellerCheck()
    }, [userdata])


  
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
                setSellerOrderData(response)
            })
    }, [userdata])
// // 點擊 css 樣式變換
// const itemsChangeFunctionTrue =()=>{
//     setitemchange(true);
//     let Yyaside_pro = document.getElementsByClassName('Yyaside_pro');
//     for(let i=0; i<Yyaside_pro.length; i++){
//       let s = Yyaside_pro[i];
//       s.classList.add('Yyaside_pro_change');
//     }
//   }

//   // 點擊 css 樣式變換
//   const itemsChangeFunctionFalse =()=>{
//     setitemchange(false);
//     let Yyaside_pro = document.getElementsByClassName('Yyaside_pro');
//     for(let i=0; i<Yyaside_pro.length; i++){
//       let s = Yyaside_pro[i];
//       s.classList.remove('Yyaside_pro_change');
//     }
//   }
//   // 點擊 overlay 出現（細節頁）
//   const addCsstyle =() =>{
//     let quick_view_modal = document.getElementsByClassName('orders-quick-view-modal')[0];
//     let items_wrapper = document.getElementsByClassName('orders-wrapper')[0];
//     quick_view_modal.classList.add('quick_view_modal_open');
//     items_wrapper.classList.add('items_wrapper_open');

//   }
    return (
        <div className="members_right">
            <div className="members_right_inner">
                {/* title */}
                <div className="members_r_top_text">
                    <h1>訂單出貨</h1>
                    <p>管理你的訂單以按時出貨</p>
                </div>

                {/* 主要內容 */}
                <div className="SellerOrderInner">
                    {/* table */}
                    <div className="SellerOrderInner">
                        <div class="tbl-header">
                            <table className="sellerOrderTable" cellSpacing="1">
                                <thead>
                                    <tr>
                                        <th>訂單編號</th>
                                        <th>付款方式</th>
                                        <th>付款狀態</th>
                                        <th>配送方式</th>
                                        <th>配送狀態</th>
                                        <th>操作</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="tbl-content">
                            <table className="sellerOrderTable" cellSpacing="1">
                                <tbody>
                                    {sellerOrderData.length > 0 ? (
                                        <>
                                            {sellerOrderData.map((data, index) => {
                                                return (
                                                        <tr key={index}>
                                                            <td>{data.orderId}</td>
                                                            <td>{data.paymentTypeName}</td>

                                                            <td><Switch checkedChildren="已付" unCheckedChildren="未付" defaultChecked={data.paymentState !==1?  true : false} /></td>
                                                            
                                                            <td>{data.deliveryTypeName}</td>

                                                            <td><Switch checkedChildren="出貨" unCheckedChildren="未出" defaultChecked={data.deliveryState !==1?  true : false} /></td>
                                                            <td>
                                                                    <span 
                                                                        id={data.orderId}
                                                                        className="iconfont icon-search"
                                                                        onClick={(event)=>{
                                                                            // console.log(event.target.id)
                                                                            superSellerCheck(event.target.id)
                                                                        }}
                                                                    >查看</span>
                                                            </td>
                                                        </tr>
                                                )
                                            })}
                                        </>
                                    ) : (
                                        <>
                                            <div className="sellerTableNothing">此時此刻...你還沒有任何訂單</div>
                                        </>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        {orderdetailitems.map((data,index)=>{
                            return(
                                <div key={index} className="items-content">
                                    <h1>{data.itemName}</h1>
                                    <p className="items-text">商品品牌 ｜ {data.itemsbrand}</p>
                                    <p className="items-text">購買數量 ｜ {data.checkQty}</p>
                                    <p className="items-text">購買總額 ｜ $ {data.checkPrice}</p>
                                    <p className="items-text">訂單備註 ｜ {data.orderRemark}</p>
                                    <p className="items-text">訂單新增時間 ｜ {data.created_at}</p>
                                </div>
                            )
                        })} 
                    </div>
                </div>
            </div>
        </div>
    )

}
export default withRouter(SuperSellerOrder);