// 函式元件
import React ,{useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';

import axios from 'axios';

// antd
import { message } from 'antd';

import ComponentSuperSellerLeft from '../ComponentSuperSellerLeft'

// sellerItems.scss 一般會在 scss 文件夾中，此寫法是不對的
import './sellerItems.scss';

function SuperSellerItems(props) {
    const key = 'updatable';
    const {userdata, setUserdata} = props.allprops;
    const [SellerProductData, setSellerProductData] = useState([]) 
    
    // 賣場產品 刪除
    const superSellerDelete =(deleteId) =>{
        // http://localhost:3009/supersellerEdit/sellerDelete
        axios.post('http://localhost:3009/supersellerEdit/sellerDelete',{
            id: deleteId,
        })
            .then((resolve, reject)=>{
                console.log(resolve)
                message.loading({ content: 'Loading...', key });
                if(resolve.data.success) {
                    setTimeout(() => {
                        message.success({ content: '刪除成功!', key, duration: 2 });
                        setSellerProductData(SellerProductData); // 沒反應
                    }, 1000)
                } else {
                    message.info("刪除失敗")
                }
            })
    }

    useEffect(()=>{
            fetch("http://localhost:3009/superseller/listSellerUserProduct",{
                method: 'post',
                body:JSON.stringify({
                    id: userdata.id,
                }),
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }),
            })
            .then(result=>result.json())
            .then((response)=>{
                // console.log('response', response);
                setSellerProductData(response)
            })
    },[userdata])

    // useEffect (()=>{
    //     setSellerProductData();
    // },[SellerProductData])
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
                            <h1>我的商品</h1>
                            <p>管理你的商品以按時更新資訊</p>
                        </div>
                        {/* 主要內容 */}
                        <div className="members_r_bottom" name="formUserData">
                            {/* 左側表單 */}
                            <div className="seller_bottom_left">
                                    <div class="tbl-header">
                                        <table class="sellerProductTable" cellpadding="0" cellspacing="0" border="0">
                                            <thead>
                                                <tr>
                                                    <th>
                                                        <input type="checkbox" name="sellercheckbox" id="sellercheckbox" className="sellercheckbox"/>
                                                    </th>
                                                    <th>商品名稱</th>
                                                    <th>商品貨號</th>
                                                    <th>商品圖片</th>
                                                    <th>規格</th>
                                                    <th>價格</th>
                                                    <th>商品數量</th>
                                                    <th>已售出</th>
                                                    <th>操作</th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                    <div class="tbl-content">
                                        <table class="sellerProductTable" ellpadding="0" cellspacing="0" border="0">
                                        <tbody>
                                            {SellerProductData.map((data,index)=>{
                                                return(
                                                    <tr key={index}>
                                                        <td>
                                                            <input type="checkbox" name="sellercheckbox" id="sellercheckbox" className="sellercheckbox"/>
                                                        </td>
                                                        <td>{data.itemName}</td>
                                                        <td>N000{data.itemId}</td>
                                                        <td>
                                                            <img src={`/items_img/${data.itemImg}`} alt="image"/>
                                                        </td>
                                                        <td>{data.itemstype}</td>
                                                        <td>{data.itemPrice}.00 NT</td>
                                                        <td>{data.itemQty}/副</td>
                                                        <td>{data.itemsales}/副</td>
                                                        <td>
                                                            <span className="iconfont icon-edit"></span>
                                                            <span 
                                                                id={data.itemId}
                                                                className="iconfont icon-delete"
                                                                onClick={(event)=>{
                                                                    console.log(event.target.id)
                                                                    superSellerDelete(event.target.id)
                                                                }}
                                                            ></span>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                            </tbody>
                                        </table>
                                    </div>           
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )

}
export default withRouter(SuperSellerItems);