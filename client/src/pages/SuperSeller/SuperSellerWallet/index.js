// 函式元件
import React ,{useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';

// antd
// import { message } from 'antd';

import ComponentSuperSellerLeft from '../ComponentSuperSellerLeft'

import './monthSearch.scss'

function SuperSellerWallet(props) {
    const key = 'updatable';
    const {userdata, setUserdata} = props.allprops;
    const [SellerProductData, setSellerProductData] = useState([]) 
    // console.log(SellerProductData)
    
    let total=0;
    SellerProductData.forEach(element => {
        // console.log('element',element)
        let onePice = element['checkPrice']*element['checkQty']
        // console.log(onePice)
        total += onePice

    });
    // console.log(total)

    // 賣家 錢包 日期查找
    // http://localhost:3009/supersellerEdit/sellerWalletData
    const sellerWalletData = ()=>{
        let year = document.getElementById("year").value || '';
        let mounth = document.getElementById("mounth").value || '';
        // console.log(year)
        // console.log(mounth)
        fetch("http://localhost:3009/supersellerEdit/sellerWalletData",{
            method: 'post',
            body:JSON.stringify({
                id: userdata.id,
                username: userdata.username,
                years: year,
                months: mounth,
            }),
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }),
        })
        .then(result=>result.json())
        .then((response)=>{
            setSellerProductData(response)
        })
    }

    useEffect(()=>{
        fetch("http://localhost:3009/supersellerEdit/sellerWallet",{
            method: 'post',
            body:JSON.stringify({
                id: userdata.id,
                username: userdata.username,
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
                            <p>管理你的錢包以保證資金安全</p>
                        </div>
                        {/* 主要內容 */}
                        <div className="members_r_bottom" name="formUserData">
                            {/* 左側表單 */}
                            <div className="seller_bottom_left">
                                <div className="tbl-header">
                                    <table className="sellerProductTable" cellPadding="0" cellSpacing="0" border="0">
                                        <thead>
                                            <tr>
                                                <th>訂單時間</th>
                                                <th>訂單編號</th>
                                                <th>商品貨號</th>
                                                <th>運送方式</th>
                                                <th>價格/$</th>
                                                <th>商品數量</th>
                                                <th>總計/$</th>
                                                <th>狀態</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                                <div className="tbl-content">
                                    <table className="sellerProductTable" cellPadding="0" cellSpacing="0" border="0">
                                    <tbody>
                                        {SellerProductData.length>0 ? (
                                            <>
                                                {SellerProductData.map((data,index)=>{
                                                    return(
                                                        <tr key={index}>
                                                            <td>{data.created_at}</td>
                                                            <td>{data.orderId}</td>
                                                            <td>N000{data.itemId}</td>
                                                            <td>{data.deliveryTypeName}</td>
                                                            <td>{data.checkPrice}.00</td>
                                                            <td>{data.checkQty}/副</td>
                                                            <td>{data.checkPrice * data.checkQty}.00</td>

                                                            {/* 等雅芳 製作 付款方式 table */}
                                                            <td>{data.paymentStateTypeName}</td> 
                                                            
                                                        </tr>
                                                    )
                                                })}
                                            </>
                                        ):(
                                            <>
                                                <div className="sellerTableNothing">此時此刻...還沒有人購買任何商品</div>
                                            </>
                                        )}
                                        
                                        </tbody>
                                    </table>
                                </div>           
                            </div>
                        </div>
                        <div className="selllerTotal">
                            <div className="selllerTotalInner">
                                <select id="year" name="year">
                                    <option value="hide">-- Year --</option>
                                    <option value="2017">2017</option>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                </select>
                                <select id="mounth" name="mounth">
                                    <option value="hide">-- Month --</option>
                                    <option value="1">January</option>
                                    <option value="2">February</option>
                                    <option value="3">March</option>
                                    <option value="4">April</option>
                                    <option value="5">May</option>
                                    <option value="6">June</option>
                                    <option value="7">July</option>
                                    <option value="8">August</option>
                                    <option value="9">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select> 
                                <button 
                                    className="selllerButton"
                                    type="button"
                                    onClick={()=>{
                                        sellerWalletData()
                                    }}
                                >send</button>
                            </div>
                            <div className="selllerTotalAdd">
                                <span id="selllertext">您一共賺了 </span>
                                <span id="selllerPrice">$ {total}</span>
                                {total>20000 ? (
                                    <span id="selllertext">（辛苦了!） </span>
                                ):(
                                    <span id="selllertext">（請繼續加油～） </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )

}
export default withRouter(SuperSellerWallet);