// 函式元件
import React, { Fragment, useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
  NavLink,
  withRouter,
} from 'react-router-dom'
//antd
// import { Radio } from 'antd'
// import { Pagination } from 'antd'
import WHH8101 from '../../../assets/items_img/WH-H810-01.png'
// scss
// import '../../../assets/scss/Product_Main.scss'
// import './_menu.scss'

function ProductMain() {
  const [items, setItems] = useState([]);
  const itemsdata= [];
  // useEffect(()=>{
    fetch('http://localhost:3009/products/list')
      .then((res)=>{
        // console.log(res)
        return res.json()
      })
      .then((res)=>{
        console.log(res)
        setItems(res)
      })
  // },[])
    

  const onChange = (event) => {
    console.log('radio checked', event.target.value)
  }
  return (
    <>
      <div className="Yybodyin">
        <div className="Yybodyleft">
          <ul>
            <li className="Yywearstyle">
              品牌
              {/* <button id="btnn">+</button> */}
            </li>
            <div className="Yyb">
              <li>
                <a href="#">森海爾</a>
              </li>
              <li>
                <a href="#">鐵三角</a>
              </li>
              <li>
                <a href="#">Akg</a>
              </li>
              <li>
                <a href="#">Sony</a>
              </li>
            </div>
          </ul>
          
          <ul>
            <li className="Yywearstyle">配戴方式</li>
            <Radio.Group onChange={onChange} value={1}>
              <li>
                <Radio value={1}>入耳</Radio>
              </li>
              <li>
                <Radio value={2}>耳罩</Radio>
              </li>
            </Radio.Group>
          </ul>
          <ul>
            <Radio.Group onChange={onChange} value={2}>
              <li className="Yywearstyle">類型 </li>
              <li>
                <Radio value={1}>入耳式</Radio>
              </li>
              <li>
                <Radio value={2}>非入耳式</Radio>
              </li>
              <li>
                <Radio value={3}>耳罩</Radio>
              </li>
              <li>
                <Radio value={4}>非耳罩</Radio>
              </li>
            </Radio.Group>
          </ul>

          <div className="Yysubmit">
            <button className="btn" type="button">
              送出勾選資料
            </button>
          </div>
          <div className="Yysearch_container">
            {/* <span class="iconfont icon-search"></span> */}
            <input type="text" placeholder=" search..." />
          </div>
        </div>
        <div className="Yybodyright">
          <div className="Yybodyheader">
            <span>一共12筆結果</span>
            <select className="Yyorder">
              <option>按價格排序-由高到低</option>
              <option>按價格排序-由低到高</option>
            </select>
          </div>

          <div className="Yyasidebody">
            
            {/* {items.map((data, index)=>{
              console.log(data)
              return(
                <div className="Yyaside_pro">
                  <div className="item_image">
                    <img className="item_images" src={WHH8101} />
                    <form className="item_imagebtnout">
                      <buttun className="item_imagebtn btn">加入購物車</buttun>
                      <buttun className="item_imagebtn2 btn">立即查看</buttun>
                    </form>
                  </div>
                  <div className="item_cover"></div>
                  <ul className="itemul">
                    <li className="pro_name">
                      <p>{data.itemName}</p>
                      <div className="pro_new">NEW</div>
                    </li>

                    <li>
                      <div className="pro_c"></div>
                    </li>
                  </ul>
                  <p>Senheiser</p>
                  <p>$4900</p>
                </div>
              )
            })} */}
            
  
            {/* <div class="Yypagination">
              <Pagination simple defaultCurrent={2} total={50} />
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}
export default withRouter(ProductMain)
