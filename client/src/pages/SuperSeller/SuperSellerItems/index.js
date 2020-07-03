// 函式元件
import React ,{useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom'

// antd
import { message } from 'antd';

import ComponentSuperSellerLeft from '../ComponentSuperSellerLeft'
import '../../../assets/scss/SuperSellerItems.scss'
function SuperSellerItems(props) {
    const key = 'updatable';
    const {userdata, setUserdata} = props.allprops;
    const [SellerProductData, setSellerProductData] = useState([]) 
    

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
                console.log('response', response);
                setSellerProductData(response)
            })
    },[userdata])

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
                            <div className="r_bottom_left">
                                                       {/* table */}
                        <table class="sellerProductTable" cellSpacing="1">
                            <thead>
                                <tr>
                                <th>
                            <input
                              type="checkbox"
                              name="selectAll"
                              id="seller-selectAll"
                            />
                          </th>
                          <th>商品名稱</th>
                          <th>商品選項貨號</th>
                          <th>規格</th>
                          <th>價格</th>
                          <th>商品數量</th>
                          <th>已售出</th>
                          <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                            {SellerProductData.map((data,index)=>{
                          return(
                            <>
                              <tr>
                              <td><input type="checkbox" /></td>
                              <td>{data.itemName}</td>
                              <td>{data.itemId}</td>
                              <td>{data.itemstype}</td>
                              <td>{data.itemPrice}</td>
                              <td>{data.itemQty}</td>
                              <td>{data.itemsales}</td>
                              <td >
                              <button className="iconfont icon-edit"></button>
                              <button className="iconfont icon-delete"></button>
                              </td>
                            </tr>
                            </>
                          )
                        })}
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )

}
export default withRouter(SuperSellerItems);