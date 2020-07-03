// 函式元件
import React ,{useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom'

// antd
import { message } from 'antd';

import ComponentSuperSellerLeft from '../ComponentSuperSellerLeft'

function SuperSellerAddItems(props) {
    const key = 'updatable';
    const {userdata, setUserdata} = props.allprops;
    const [itemName,setItemName] = useState('')
    const [itemImg,setItemImg] = useState([])
    const[colorid,setColorId] = useState('')
    const [itemsbrand,setItemsBrand] = useState('')
    const [itemstype,setItemstype] = useState('')
    const [itemPrice,setItemPrice] = useState('')
    const [itemQty,setItemQty] = useState('')
    const[itemsales,setItemsales] = useState('')
    const[itemscontent,setItemscontent] = useState('')
    const[itemsweight,setItemsweight] = useState('')
    const[itemsdrive,setItemsDrive] = useState('')
    const[itemsfrequency,setitemsfrequency] = useState('')
    const[itemsSensitivity,setItemsSensitivity] = useState('')
    const[itemsconnect,setItemsconnect] = useState('')
    const[itemsmains,setItemsmains] = useState('')
    const[itemsEndurance,setItemsEndurance] = useState('')
    const[itemswatertight,setItemswatertight] = useState('')
    const[itemsfeature,setItemsFeature] = useState('')

  const addFormServer = () => {
    fetch('http://localhost:3009/superseller/add-product', {
        method: 'POST',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
          id: userdata.id,
          itemName: itemName,
          itemsbrand: itemsbrand,
          itemstype:itemstype,
          itemPrice: itemPrice,
          itemQty: itemQty,
          itemscontent: itemscontent,
          itemsweight: itemsweight,
          itemsdrive: itemsdrive,
          itemsfrequency: itemsfrequency,
          itemsSensitivity: itemsSensitivity,
          itemsconnect: itemsconnect,
          itemsmains: itemsmains,
          itemsEndurance: itemsEndurance,
          itemswatertight: itemswatertight,
          itemsfeature: itemsfeature
        })
      })
        .then((result) => result.json())
        .then((obj) => {
          console.log(obj)
          // localStorage.setItem('memberData', JSON.stringify(obj));
          message.success(`新增成功！`)
          setTimeout(() => {
            // props.history.goBack()
            props.history.push('SuperSeller/SuperSellerItems')
          }, 2000)
        })
    }
    useEffect(()=>{
        addFormServer()
    },[])

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
                            <div className="r_bottom_left">
                                <ul>
                                    <li>
                                        <label for="itemName">商品名稱</label>
                                        <input id="itemName"
                                        onChange={(e) => setItemName(e.target.value)}></input>
                                    </li>                                    
                                    <li>
                                        <label for="itemsbrand">商品品牌</label>
                                        <input id="itemsbrand"
                                        onChange={(e) => setItemsBrand(e.target.value)}></input>
                                    </li>          
                                    <li>
                                        <label for="itemsType">商品類型</label>
                                        <input id="itemsType"
                                        onChange={(e) => setItemstype(e.target.value)}></input>
                                    </li>                                    
                                    <li>
                                        <label for="itemPrice">商品價格</label>
                                        <input id="itemPrice"
                                        onChange={(e) => setItemPrice(e.target.value)}></input>
                                    </li>                                    
                                    <li>
                                        <label for="itemQty">商品數量</label>
                                        <input id="itemQty"
                                        onChange={(e) => setItemQty(e.target.value)}></input>
                                    </li>                                    
                                    <li>
                                        <label for="itemscontent">商品描述</label>
                                        <input id="itemscontent"
                                        onChange={(e) => setItemscontent(e.target.value)}></input>
                                    </li>                                    
                                    <li>
                                        <label for="itemsweight">商品重量</label>
                                        <input id="itemsweight"
                                        onChange={(e) => setItemsweight(e.target.value)}></input>
                                    </li>                                    
                                    <li>
                                        <label for="itemsdrive">單體驅動</label>
                                        <input id="itemsdrive"
                                        onChange={(e) => setItemsDrive(e.target.value)}></input>
                                    </li>
                                    <li>
                                        <label for="itemsfrequency">頻率響應</label>
                                        <input id="itemsfrequency"
                                        onChange={(e) => setitemsfrequency(e.target.value)}></input>
                                    </li>
                                    <li>
                                        <label for="itemsSensitivity">頻率響應</label>
                                        <input id="itemsSensitivity"
                                        onChange={(e) => setItemsSensitivity(e.target.value)}></input>
                                    </li>
                                    <li>
                                        <label for="itemsconnect">連結端子</label>
                                        <input id="itemsconnect"
                                        onChange={(e) => setItemsconnect(e.target.value)}></input>
                                    </li>
                                    <li>
                                        <label for="itemsmains">電源</label>
                                        <input id="itemsmains"
                                        onChange={(e) => setItemsmains(e.target.value)}></input>
                                    </li>
                                    <li>
                                        <label for="itemsEndurance">電池續航力</label>
                                        <input id="itemsEndurance"
                                        onChange={(e) => setItemsEndurance(e.target.value)}></input>
                                    </li>
                                    <li>
                                        <label for="itemswatertight">防水性</label>
                                        <input id="itemswatertight"
                                        onChange={(e) => setItemswatertight(e.target.value)}></input>
                                    </li>
                                    <li>
                                        <label for="itemsfeature">重點特色</label>
                                        <input id="itemsfeature"
                                        onChange={(e) => setItemsFeature(e.target.value)}></input>
                                    </li>
                                </ul>
                                <button
                                type="submit"
                                className="login_btn register_btn"
                                onClick={() => {
                                    addFormServer()
                                    console.log('click')
                                }}
                                >
                                新增
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )

}
export default withRouter(SuperSellerAddItems);