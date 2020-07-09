// 函式元件
import React , {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom'

// antd
import { message } from 'antd';

import ComponentSuperSellerLeft from '../ComponentSuperSellerLeft'

import './sellerAddItems.scss';

function SuperSellerAddItems(props) {
    const key = 'updatable';
    const {userdata, setUserdata} = props.allprops;

    const [itemName, setItemName] = useState()                   // 商品名稱
    const [itemImg, setItemImg] = useState()                     // 商品圖片
    const [itemMoreImg, setitemMoreImg] = useState([])           // 商品圖片
    const [colorid, setColorId] = useState()                     // 商品顏色
    const [itemsbrand, setItemsBrand] = useState()               // 商品品牌
    const [itemstype, setItemstype] = useState()                 // 商品類型
    const [itemPrice, setItemPrice] = useState()                 // 商品價格
    const [itemQty, setItemQty] = useState()                     // 商品數量
    const [itemscontent, setItemscontent] = useState()           // 商品描述
    const [itemsweight, setItemsweight] = useState()             // 商品重量
    const [itemsdrive, setItemsDrive] = useState()               // 商品 單體驅動
    const [itemsfrequency, setitemsfrequency] = useState()       // 商品 頻率響應
    const [itemsSensitivity, setItemsSensitivity] = useState()   // 商品 頻率響應
    const [itemsconnect, setItemsconnect] = useState()           // 商品 連結端子
    const [itemsmains, setItemsmains] = useState()               // 商品 電源類型
    const [itemsEndurance, setItemsEndurance] = useState()       // 商品 電池續航
    const [itemswatertight, setItemswatertight] = useState()     // 商品 防水
    const [itemsfeature, setItemsFeature] = useState()           // 商品 重點特色

    // console.log(itemsbrand);
    // console.log('itemName:', itemName);
    // console.log('itemImg:', itemImg);
    // console.log('itemMoreImg:', itemMoreImg);
    // console.log('colorid:', colorid);
    // console.log('itemsbrand:', itemsbrand);
    // console.log('itemstype:', itemstype);
    // console.log('itemPrice:', itemPrice);
    // console.log('itemQty:', itemQty);
    // console.log('itemscontent:', itemscontent);
    // console.log('itemsdrive:', itemsdrive);
    // console.log('itemsfrequency:', itemsfrequency);
    // console.log('itemsSensitivity:', itemsSensitivity);
    // console.log('itemsconnect:', itemsconnect);
    // console.log('itemsmains:', itemsmains);
    // console.log('itemsEndurance:', itemsEndurance);
    // console.log('itemsfeature:', itemsfeature);

    // setItemImg 商品單張圖片上傳 （one）
    const myImgEditCallback = (data) =>{
        const datafiles = new FormData();
        datafiles.append('file', data);
        // console.log(datafiles);

        fetch('http://localhost:3009/supersellerEdit/upload', {
            method: 'POST',
            body: datafiles,
            // headers: new Headers({
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json',
            // })
        })
            .then((res)=>{
                console.log(res)
                console.log(res.statusText)
                return res.json() // json()	返回 Promise，resolves 是 JSON 物件
            })
            .then(obj=>{
                console.log(obj);
                setItemImg(obj.filename)
            })
    }  

    // setitemMoreImg 商品多張圖片上傳 （more）
    const moreImgEditCallback = (data) =>{
        const moreDataFiles = new FormData();
        for(let i = 0; i<data.length; i++) {
            moreDataFiles.append('file', data[i])
        }
        console.log(moreDataFiles)
        fetch('http://localhost:3009/superseller_callback/try-upload/', {
        // fetch('http://localhost:3009/supersellerEdit/uploadMore', {
            method: 'post',
            body: moreDataFiles,
            // headers: new Headers({
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json',
            // })
        })
            .then((res)=>{
                console.log(res)
                console.log(res.statusText)
                return res.json() // json()	返回 Promise，resolves 是 JSON 物件
            })
            .then(obj=>{
                console.log(obj);
                let datafilesName = [];
                for(let s = 0; s<obj.length; s++) {
                    console.log(obj[s].filename)
                    datafilesName.push(obj[s].filename)
                    // moreDataFiles.append('file', data[i])
                }
                setitemMoreImg(datafilesName)
            })
    }

    // 商品資料上傳 （文字）
    const SuperSellerAddItemsCallback = () => {
        fetch('http://localhost:3009/superseller_callback/add', {
            method: 'post',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }),
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
                itemMoreImg: itemMoreImg,
            })
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
                                                    placeholder="ex：SONY E211"
                                                    onChange={(event) => setItemName(event.target.value)}
                                                />
                                            </div>
                                            <div className="updata_itemImg">
                                                <div className="updata_itemImg_contaienr">
                                                    <div className="updata_itemImg_inner">
                                                        <label htmlFor="itemImgs" className="itemImgstyle">主要圖片: </label>
                                                        <input 
                                                            type="file"
                                                            id="itemImgs"
                                                            className="updata_itemImg_files"
                                                            // multiple={true}
                                                            // onChange={(event) => setItemImg(event.target.value)}
                                                            onChange={(event) => {
                                                                // console.log(event.target.files)
                                                                setItemImg(event.target.files[0].name)
                                                                myImgEditCallback(event.target.files[0])
                                                            }}
                                                        />
                                                        
                                                    </div>

                                                    {itemImg? (
                                                        <img src={`/items_img/${itemImg}`} alt="image"/>
                                                    ):(
                                                        <img src={`/user_noimg/noimg.jpg`} alt="圖片上傳"/>
                                                    )}
                                                    
                                                </div>
                                                <div className="updata_itemImg_contaienr">
                                                    <div className="updata_itemImg_inner">
                                                        <label htmlFor="itemImg" className="itemImgstyle">細節圖片: </label>
                                                        <input 
                                                            type="file"
                                                            id="itemImg"
                                                            name="avatar"
                                                            className="updata_itemImg_files"
                                                            multiple={true}
                                                            onChange={(event) => {
                                                                // console.log(event.target.files)
                                                                moreImgEditCallback(event.target.files)
                                                                // setitemMoreImg(event.target.files)
                                                            }
                                                            }
                                                        />
                                                    </div>
                                                    {itemMoreImg.length>0 ?(
                                                        <>
                                                            {itemMoreImg.map((data, index)=>{
                                                                return(
                                                                    <img src={`/items_img/${data}`} alt="圖片上傳" key={index}/>
                                                                )   
                                                            })}
                                                        </>
                                                    ):(
                                                        <>
                                                            <img src={`/user_noimg/noimg.jpg`} alt="圖片上傳"/>
                                                        </>
                                                    )}
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </li> 
                                    
                                    {/* 基本資料 */}
                                    <li className="itemselect">
                                        <h2>基本資料</h2>
                                        <div className="itemselectInnerAll">
                                            <div className="itemselectInner">
                                                <label htmlFor="itemsbrand">品牌: </label>
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
                                                <label htmlFor="itemsType">類型: </label>
                                                <select 
                                                    name="itemsType"
                                                    value = {itemstype}
                                                    onChange={(event)=>{ setItemstype(event.target.value) }}
                                                >
                                                    <option value="0">商品類型</option>
                                                    <option value="1">耳罩式</option>
                                                    <option value="2">入耳式</option>
                                                </select>
                                            </div>
                                            {/* <input 
                                                id="itemsType"
                                                onChange={(e) => setItemstype(e.target.value)}
                                            /> */}
                                            <div className="itemselectInner">
                                                <label htmlFor="itemsType">顏色: </label>
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
                                                    placeholder="ex：1899"
                                                    onChange={(e) => setItemPrice(e.target.value)}
                                                />
                                            </div>                                    
                                            <div className="itemInputInner">
                                                <label htmlFor="itemQty">商品數量</label>
                                                <input 
                                                    className="itemInput"
                                                    id="itemQty"
                                                    placeholder="ex：10"
                                                    onChange={(e) => setItemQty(e.target.value)}
                                                />
                                            </div>                                    
                                            <div className="itemInputInner">
                                                <label htmlFor="itemscontent">商品描述</label>
                                                <input 
                                                    className="itemInput"
                                                    id="itemscontent"
                                                    placeholder="ex：防水性極高，是一個適合外出旅遊的好伴侶"
                                                    onChange={(e) => setItemscontent(e.target.value)}
                                                />
                                            </div>                                    
                                            <div className="itemInputInner">
                                                <label htmlFor="itemsweight">商品重量</label>
                                                <input 
                                                    className="itemInput"
                                                    id="itemsweight"
                                                    placeholder="ex：300公克"
                                                    onChange={(e) => setItemsweight(e.target.value)}
                                                />
                                            </div>                                    
                                            <div className="itemInputInner">
                                                <label htmlFor="itemsdrive">單體驅動</label>
                                                <input 
                                                    className="itemInput"
                                                    id="itemsdrive"
                                                    placeholder="ex：密閉式動圈型"
                                                    onChange={(e) => setItemsDrive(e.target.value)}
                                                />
                                            </div>
                                            <div className="itemInputInner">
                                                <label htmlFor="itemsfrequency">頻率響應</label>
                                                <input 
                                                    className="itemInput"
                                                    id="itemsfrequency"
                                                    placeholder="ex：03 – 40,000 Hz"
                                                    onChange={(e) => setitemsfrequency(e.target.value)}
                                                />
                                            </div>
                                            <div className="itemInputInner">
                                                <label htmlFor="itemsSensitivity">靈敏度</label>
                                                <input 
                                                    className="itemInput"
                                                    id="itemsSensitivity"
                                                    placeholder="ex：102dB/mW"
                                                    onChange={(e) => setItemsSensitivity(e.target.value)}
                                                />
                                            </div>
                                            <div className="itemInputInner">
                                                <label htmlFor="itemsconnect">連結端子</label>
                                                <input 
                                                    className="itemInput"
                                                    id="itemsconnect"
                                                    placeholder="ex：3.5 mm"
                                                    onChange={(e) => setItemsconnect(e.target.value)}
                                                />
                                            </div>
                                            <div className="itemInputInner">
                                                <label htmlFor="itemsmains">電源類型</label>
                                                <input 
                                                    className="itemInput"
                                                    id="itemsmains"
                                                    placeholder="充電式"
                                                    onChange={(e) => setItemsmains(e.target.value)}
                                                />
                                            </div>
                                            <div className="itemInputInner">
                                                <label htmlFor="itemsEndurance">電池續航</label>
                                                <input 
                                                    className="itemInput"
                                                    id="itemsEndurance"
                                                    placeholder="20 小時"
                                                    onChange={(e) => setItemsEndurance(e.target.value)}
                                                />
                                            </div>
                                            <div className="itemInputInner">
                                                <label htmlFor="itemsfeature">重點特色</label>
                                                <textarea 
                                                    className="itemInput"
                                                    id="itemsfeature"
                                                    placeholder="高解析音質播放，忠實重現原音"
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
                                                message.success(`上架商品成功`)
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