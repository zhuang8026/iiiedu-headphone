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
    const { detailitems, setlovechange, setcompareschange, setcartchange } = props;
    const [SellerOrderDetailData, setSellerOrderDetailData] = useState();
    const [orderdetailitems, setorderdetailitems] = useState([]);
    const [itemchange, setitemchange] = useState(false);
    const [status, setStatus] = useState(false);
    const [deliverystatus, setDeliveryStatus] = useState(false);


    console.log(sellerOrderData)
    const superSellerToggleChange = (togglevalue, selectedorderid) => {
        fetch("http://localhost:3009/superseller/listSellerUserOrderToggle", {
            method: 'post',
            body: JSON.stringify({
                orderId: selectedorderid,
                paymentState: togglevalue + 1
            }),
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            })
        })
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                console.log(res)
                setStatus(res)
                console.log(status)
            })

    }
    useEffect(() => {
        superSellerToggleChange()
    }, [userdata])

    const superSellerDeliveryToggleChange = (togglevalue, selectedorderid) => {
        fetch("http://localhost:3009/superseller/listSellerUserOrderDeliveryToggle", {
            method: 'post',
            body: JSON.stringify({
                orderId: selectedorderid,
                deliveryState: togglevalue + 1
            }),
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            })
        })
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                console.log(res)
                setStatus(res)
                console.log(status)
            })

    }
    useEffect(() => {
        superSellerToggleChange()
    }, [userdata])

    const superSellerCheck = (orderId) => {
        fetch("http://localhost:3009/superseller/listSellerUserOrderDetail", {
            method: 'post',
            body: JSON.stringify({
                id: orderId
            }),
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            })
        })
            .then((res) => {
                return res.json()
            })
            .then((res) => {
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

                                                        <td><Switch
                                                            checkedChildren="已付"
                                                            unCheckedChildren="未付"
                                                            status={data.paymentState}
                                                            onChange={(event) => {
                                                                console.log(event)
                                                                superSellerToggleChange(event, data.orderId);
                                                            }}
                                                            defaultChecked={
                                                                data.paymentState !== 1 ? true : false
                                                            }
                                                        /></td>

                                                        <td>{data.deliveryTypeName}</td>

                                                        <td><Switch
                                                            checkedChildren="出貨"
                                                            unCheckedChildren="未出"
                                                            onChange={(event) => {
                                                                superSellerDeliveryToggleChange(event, data.orderId)
                                                            }}
                                                            defaultChecked={data.deliveryState !== 1 ? true : false} /></td>
                                                        <td>
                                                            <span
                                                                id={data.orderId}
                                                                className="iconfont icon-search"
                                                                onClick={(event) => {
                                                                    // console.log(event.target.id)
                                                                    superSellerCheck(event.target.id)
                                                                }}
                                                            >查看細節</span>
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
                        {orderdetailitems.map((data, index) => {
                            return (
                                <>
                                                <ul>
                                                    <li>商品名稱 | {data.itemName}</li>
                                                    <li>商品品牌 | {data.itemsbrand}</li>
                                                    <li>購買數量 | {data.checkQty}</li>
                                                    <li>購買總額 | $ {data.checkPrice}</li>
                                                    <li>訂單備註 | {data.orderRemark}</li>
                                                    <li>訂單新增時間 | {data.created_at}</li>
                                                 </ul>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )

}
export default withRouter(SuperSellerOrder);