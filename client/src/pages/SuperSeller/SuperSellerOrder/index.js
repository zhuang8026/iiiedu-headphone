// 函式元件
import React ,{useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom'
import $ from 'jquery'

// antd
import { message } from 'antd';

function SuperSellerOrder(props) {
    const key = 'updatable';
    const {userdata, setUserdata} = props.allprops;


    useEffect(()=>{
        // $(document).ready( function () {
        //     $('#myTable').DataTable();
        // } );
    },[])

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
                        <table class="myTable" cellpadding="1" cellspacing="1">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>ZIP</th>
                                    <th>Other</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Merritt Molina</td>
                                    <td>26/12/15</td>
                                    <td>99266</td>
                                    <td>72341402999</td>
                                </tr>
                                <tr>
                                    <td>Norman Gonzales</td>
                                    <td>13/01/17</td>
                                    <td>41489</td>
                                    <td>26789984999</td>
                                </tr>
                                <tr>
                                    <td>Edan Wyatt</td>
                                    <td>14/08/16</td>
                                    <td>28963</td>
                                    <td>08728611499</td>
                                </tr>
                                <tr>
                                    <td>Robert Melendez</td>
                                    <td>17/05/16</td>
                                    <td>94367</td>
                                    <td>76805222499</td>
                                </tr>
                                <tr>
                                    <td>Alfonso Lawrence</td>
                                    <td>14/09/16</td>
                                    <td>51277</td>
                                    <td>35506175599</td>
                                </tr>
                                <tr>
                                    <td>Hamish Miller</td>
                                    <td>10/08/16</td>
                                    <td>86311</td>
                                    <td>70243881099</td>
                                </tr>
                                <tr>
                                    <td>Clark Phelps</td>
                                    <td>11/03/17</td>
                                    <td>55982</td>
                                    <td>06589047999</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    )

}
export default withRouter(SuperSellerOrder);