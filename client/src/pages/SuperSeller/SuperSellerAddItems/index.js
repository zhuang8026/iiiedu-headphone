// 函式元件
import React , {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom'

// antd
// import { message } from 'antd';

import ComponentSuperSellerLeft from '../ComponentSuperSellerLeft'

import './sellerAddItems.scss';
// import { use } from '../../../../../server/src/superseller_plus';

function SuperSellerAddItems(props) {
    const key = 'updatable';
    const {userdata, setUserdata} = props.allprops;

    const [itemName,setItemName] = useState()                   // 商品名稱
    const [itemImg,setItemImg] = useState()                     // 商品圖片
    const [colorid,setColorId] = useState()                     // 商品顏色
    const [itemsbrand,setItemsBrand] = useState()               // 商品品牌
    const [itemstype,setItemstype] = useState()                 // 商品類型
    const [itemPrice,setItemPrice] = useState()                 // 商品價格
    const [itemQty,setItemQty] = useState()                     // 商品數量
    const [itemscontent,setItemscontent] = useState()           // 商品描述
    const [itemsweight,setItemsweight] = useState()             // 商品重量
    const [itemsdrive,setItemsDrive] = useState()               // 商品 單體驅動
    const [itemsfrequency,setitemsfrequency] = useState()       // 商品 頻率響應
    const [itemsSensitivity,setItemsSensitivity] = useState()   // 商品 頻率響應
    const [itemsconnect,setItemsconnect] = useState()           // 商品 連結端子
    const [itemsmains,setItemsmains] = useState()               // 商品 電源類型
    const [itemsEndurance,setItemsEndurance] = useState()       // 商品 電池續航
    const [itemswatertight,setItemswatertight] = useState()     // 商品 防水
    const [itemsfeature,setItemsFeature] = useState()           // 商品 重點特色

    // console.log(itemsbrand);

    const SuperSellerAddItemsCallback = () => {
        fetch('http://localhost:3009/superseller_plus/add', {
            method: 'post',
            body: JSON.stringify({
                itemName :itemName,
                itemImg :itemImg,
                colorid :colorid,
                itemsbrand :itemsbrand,
                itemstype :itemstype,
                itemPrice :itemPrice,
                itemQty :itemQty,
                itemsales :0,
                itemsstar :5,
                itemstoreNumber :userdata.id,
                itemscontent :itemscontent,
                itemsweight :itemsweight,
                itemsdrive :itemsdrive,
                itemsfrequency :itemsfrequency,
                itemsSensitivity :itemsSensitivity,
                itemsconnect :itemsconnect,
                itemsmains :itemsmains,
                itemsEndurance :itemsEndurance,
                itemswatertight :itemswatertight,
                itemsfeature :itemsfeature,
            }),
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }),
        })
            .then((result) => result.json())
            .then((response) => {
                console.log('response', response);
            })
    }

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
                            <h1>新增商品</h1>
                            <p>新增你的商品以讓大家看到您</p>
                        </div>
                        {/* 主要內容 */}
                        <div className="members_r_bottom" name="formUserData">
                            {/* 左側表單 */}
                            <div className="updata_bottom_left_inner">
                                <ul className="updata_bottom_left_ul">
                                    {/* 圖片和名字 */}
                                    <li>
                                        <div>
                                            <div className="updata_itemInput">
                                                <label htmlFor="itemName">商品名稱: </label>
                                                <input 
                                                    className="itemInput"
                                                    id="itemName"
                                                    onChange={(event) => setItemName(event.target.value)}
                                                />
                                            </div>
                                            <div className="updata_itemImg">
                                                <div className="updata_itemImg_contaienr">
                                                    <div className="updata_itemImg_inner">
                                                        <label htmlFor="itemImg">主要圖片: </label>
                                                        <input 
                                                            type="file"
                                                            id="itemImg"
                                                            // multiple={true}
                                                            onChange={(event) => setItemImg(event.target.value)}
                                                        />
                                                    </div>
                                                    <img src="/logo512.png" alt="圖片上傳"/>
                                                </div>
                                                <div className="updata_itemImg_contaienr">
                                                    <div className="updata_itemImg_inner">
                                                        <label htmlFor="itemImg">細節圖片: </label>
                                                        <input 
                                                            type="file"
                                                            id="itemImg"
                                                            // multiple={true}
                                                            onChange={(event) => setItemImg(event.target.value)}
                                                        />
                                                    </div>
                                                    <img src="/logo512.png" alt="圖片上傳"/>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </li> 
                                    
                                    {/* 基本資料 */}
                                    <li className="itemselect">
                                        <h2>基本資料</h2>
                                        <div className="itemselectInnerAll">
                                            <div className="itemselectInner">
                                                <label for="itemsbrand">品牌: </label>
                                                <select 
                                                    name="itemsType"
                                                    value = {itemsbrand}
                                                    onChange={(event)=>{ setItemsBrand(event.target.value) }}
                                                >
                                                    <option value="商品品牌">商品品牌</option>
                                                    <option value="audioTechnica">audioTechnica</option>
                                                    <option value="AKG">AKG</option>
                                                    <option value="BangOlufsen">BangOlufsen</option>
                                                    <option value="Final">Final</option>
                                                    <option value="Grado">Grado</option>
                                                    <option value="Shure">Shure</option>
                                                    <option value="SONY">SONY</option>
                                                    <option value="Senheier">Senheier</option>
                                                </select>
                                            </div>
                                            {/* <input 
                                                id="itemsbrand"
                                                onChange={(e) => setItemsBrand(e.target.value)}
                                            /> */}
                                            <div className="itemselectInner">
                                                <label for="itemsType">類型: </label>
                                                <select 
                                                    name="itemsType"
                                                    value = {itemstype}
                                                    onChange={(event)=>{ setItemstype(event.target.value) }}
                                                >
                                                    <option value="0">商品類型</option>
                                                    <option value="1">頭戴式</option>
                                                    <option value="2">耳戴式</option>
                                                </select>
                                            </div>
                                            {/* <input 
                                                id="itemsType"
                                                onChange={(e) => setItemstype(e.target.value)}
                                            /> */}
                                            <div className="itemselectInner">
                                                <label for="itemsType">顏色: </label>
                                                <select 
                                                    name="itemsType"
                                                    value = {colorid}
                                                    onChange={(event)=>{ setColorId(event.target.value) }}
                                                >
                                                    <option value="0">商品顏色</option>
                                                    <option value="1">真朱红</option>
                                                    <option value="2">黄丹橘</option>
                                                    <option value="3">花葉黃</option>
                                                    <option value="4">青丹綠</option>
                                                    <option value="5">千草藍</option>
                                                    <option value="6">桔梗紫</option>
                                                    <option value="7">胡粉白</option>
                                                    <option value="8">碳呂黑</option>
                                                    <option value="9">單純白</option>
                                                </select>
                                            </div>
                                            {/* <input 
                                                id="itemsType"
                                                onChange={(e) => setItemstype(e.target.value)}
                                            /> */}
                                            <div className="itemselectInner">
                                                <label htmlFor="itemswatertight">特性: </label>
                                                <select 
                                                    name="itemswatertight"
                                                    value = {itemswatertight}
                                                    onChange={(event)=>{ setItemswatertight(event.target.value) }}
                                                >
                                                    <option value="防水性">防水類型</option>
                                                    <option value="防水">防水</option>
                                                    <option value="無防水">無防水</option>
                                                </select>
                                            </div>
                                            {/* <input 
                                                id="itemswatertight"
                                                onChange={(e) => setItemswatertight(e.target.value)}
                                            /> */}
                                        </div>
                                    </li>   

                                    {/* 特殊資料 */}                                                                 
                                    <li className="itemselect">
                                        <h2>特殊資料</h2>
                                        <div className="itemInputInnerAll">
                                            <div className="itemInputInner">
                                                <label htmlFor="itemPrice">商品價格</label>
                                                <input 
                                                    className="itemInput"
                                                    id="itemPrice"
                                                    onChange={(e) => setItemPrice(e.target.value)}
                                                />
                                            </div>                                    
                                            <div className="itemInputInner">
                                                <label htmlFor="itemQty">商品數量</label>
                                                <input 
                                                    className="itemInput"
                                                    id="itemQty"
                                                    onChange={(e) => setItemQty(e.target.value)}
                                                />
                                            </div>                                    
                                            <div className="itemInputInner">
                                                <label htmlFor="itemscontent">商品描述</label>
                                                <input 
                                                    className="itemInput"
                                                    id="itemscontent"
                                                    onChange={(e) => setItemscontent(e.target.value)}
                                                />
                                            </div>                                    
                                            <div className="itemInputInner">
                                                <label htmlFor="itemsweight">商品重量</label>
                                                <input 
                                                    className="itemInput"
                                                    id="itemsweight"
                                                    onChange={(e) => setItemsweight(e.target.value)}
                                                />
                                            </div>                                    
                                            <div className="itemInputInner">
                                                <label htmlFor="itemsdrive">單體驅動</label>
                                                <input 
                                                    className="itemInput"
                                                    id="itemsdrive"
                                                    onChange={(e) => setItemsDrive(e.target.value)}
                                                />
                                            </div>
                                            <div className="itemInputInner">
                                                <label htmlFor="itemsfrequency">頻率響應</label>
                                                <input 
                                                    className="itemInput"
                                                    id="itemsfrequency"
                                                    onChange={(e) => setitemsfrequency(e.target.value)}
                                                />
                                            </div>
                                            <div className="itemInputInner">
                                                <label htmlFor="itemsSensitivity">頻率響應</label>
                                                <input 
                                                    className="itemInput"
                                                    id="itemsSensitivity"
                                                    onChange={(e) => setItemsSensitivity(e.target.value)}
                                                />
                                            </div>
                                            <div className="itemInputInner">
                                                <label htmlFor="itemsconnect">連結端子</label>
                                                <input 
                                                    className="itemInput"
                                                    id="itemsconnect"
                                                    onChange={(e) => setItemsconnect(e.target.value)}
                                                />
                                            </div>
                                            <div className="itemInputInner">
                                                <label htmlFor="itemsmains">電源類型</label>
                                                <input 
                                                    className="itemInput"
                                                    id="itemsmains"
                                                    onChange={(e) => setItemsmains(e.target.value)}
                                                />
                                            </div>
                                            <div className="itemInputInner">
                                                <label htmlFor="itemsEndurance">電池續航</label>
                                                <input 
                                                    className="itemInput"
                                                    id="itemsEndurance"
                                                    onChange={(e) => setItemsEndurance(e.target.value)}
                                                />
                                            </div>
                                            <div className="itemInputInner">
                                                <label htmlFor="itemsfeature">重點特色</label>
                                                <textarea 
                                                    className="itemInput"
                                                    id="itemsfeature"
                                                    onChange={(e) => setItemsFeature(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <button
                                            type="button"
                                            className="itemInputbutton"
                                            onClick={() => {
                                                SuperSellerAddItemsCallback()
                                            }}
                                        >新增</button>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )

}
export default withRouter(SuperSellerAddItems);