// 函式元件
import React, { Fragment, useState} from 'react';
import { BrowserRouter as Router, withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom'

import { message } from 'antd';

function MyFav(props) {
  const key = 'updatable';

  const { setlovechange } = props;
  let [compareList, setCompareList] = useState([])
  const[selectValue, setSelectValue] = useState([])

  const objcompare = JSON.parse(localStorage.getItem('love'))|| []
  compareList = [...objcompare]
  // itemPrice
  console.log(compareList)
  let ascList = [...compareList]
  let descList = [...compareList]
  ascList.sort(function(a, b) {
      return a.itemPrice - b.itemPrice;
  });
  descList.sort(function(a, b) {
      return b.itemPrice - a.itemPrice;
  });

  const handleSelect =(e)=>{
    if(e === '1'){ 
      compareList = ascList
      setCompareList(compareList)
      localStorage.setItem("love", JSON.stringify(compareList))
    } else if(e === '2'){
      compareList = descList
      setCompareList(compareList)
      localStorage.setItem("love", JSON.stringify(compareList))
    }

    console.log(e)
    setSelectValue(e)
  }

  //更新購物車localstorage
  const updateCartToLocalStorage = (value) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []
    const newCart = [...currentCart, value]
    localStorage.setItem('cart', JSON.stringify(newCart))
  }  

  //更新比較功能localstorage
  const updateCompareToLocalStorage = (value) =>{
    const currentCompare = JSON.parse(localStorage.getItem('compare')) || []
    const newCompare = [...currentCompare, value]
    localStorage.setItem('compare',JSON.stringify(newCompare))

    currentCompare.map(element =>{
      if(element.itemName === value.itemName){
        window.localStorage.setItem('compare', JSON.stringify(currentCompare));
        message.warning(`商品"${element.itemName}"重複了`)
        return
      }
    });
  }

  return (
      <Fragment>
        <main>
          <div className="MyFav_container">
            <div className="MyFav_select">
              <div className="MyFav_Crumb">
                <a href="../">首頁</a> / <a href="#">我的最愛</a>
              </div>
              <div>
                <select 
                  defaultValue = {selectValue}
                  onChange={(event)=>{
                    handleSelect(event.target.value)
                  }}
                >
                  <option value="1" >按價格排序-由低到高</option>
                  <option value="2" >按價格排序-由高到低</option>
                </select>
              </div>
            </div>
            <div className="MyFav_list">
                <ul className="MyFav_pwa_r_inner">
                {/* {console.log('compareList',compareList)} */}
                {compareList.length > 0 ? (
                    <Fragment>
                    {compareList.map((data,index)=>{
                      console.log(data);
                      return(
                        <li key={index}>
                          <div className="MyFav_card">
                              <div className="MyFav_item">
                              <span 
                                className="iconfont icon-error" 
                                id={data.itemId} 
                                data-id={index}
                                onClick={()=>{        
                                  const newList = [...compareList]
                                  newList.splice(index, 1)
                                  setCompareList(newList)
                                  let a = localStorage.setItem("love", JSON.stringify(newList)); 
                                  setlovechange(newList)
                                }}
                              ></span>
                                <Link to={`/ProductDetail/${data.itemid}`}>
                                  <img src={`/items_img/${data.itemImg}`} alt="image"/>
                                </Link>
                              <h3>{data.itemBrand}</h3>
                              <h3>
                                <Link 
                                  className="love-a"
                                  to={`/ProductDetail/${data.itemid}`}
                                  >{data.itemName}</Link>
                                </h3>
                              <h3>{data.itemstype == 1 ? '耳罩式': '入耳式'}</h3>
                              </div>
                          </div>
                          <div><h4>{`$${data.itemPrice}`}</h4></div>
                          <div className="MyFav_card_button">
                              <button className=" MyFav_btn_style"
                              id={data.itemId} 
                              onClick={() =>{
                                message.success(`商品"${data.itemName}"加入比較`)  
                                updateCompareToLocalStorage({
                                  itemid: data.itemId,
                                  itemName:data.itemName,
                                  itemBrand: data.itemsbrand,
                                  itemImg: data.itemImg,
                                  itemPrice: data.itemPrice,
                                  created_at: data.created_at,
                                  itemQty: data.itemQty,
                                  itemsEndurance: data.itemsEndurance,
                                  itemsSensitivity: data.itemsSensitivity,
                                  itemsales: data.itemsales,
                                  itemsconnect: data.itemsconnect,
                                  itemscontent: data.itemscontent,
                                  itemsdrive: data.itemsdrive,
                                  itemsfeature: data.itemsfeature,
                                  itemsfrequency: data.itemsfrequency,
                                  itemsmains: data.itemsmains,
                                  itemsstar: data.itemsstar,
                                  itemstoreNumber: data.itemstoreNumber,
                                  itemstype: data.itemstype,
                                  itemswatertight: data.itemswatertight,
                                  itemsweight: data.itemsweight
                                })
                              }}
                              >加入比較</button>
                              <button className=" MyFav_btn_style2"                          
                                id={data.itemId}
                                onClick={() => {
                                  message.success(`商品"${data.itemName}"加入購物車`)
                                  updateCartToLocalStorage({
                                    id:data.itemid,
                                    itemName:data.itemName,
                                    itemBrand:data.itemBrand,
                                    itemImg:data.itemImg,
                                    itemPrice:data.itemPrice,
                                    amount:1,
                                  })
                                }}
                              >加入購物車</button>
                          </div>
                        </li>
                      )
                    })}
                    </Fragment>
                ):(
                  <div className="loveError">
                  <p>目前我的最愛是空的</p>
                  <button className="MyFav_btn_style2" >
                  <Link  className="button-a" to="/YyProduct">去商店</Link>
                  </button>
                  </div>
                )}
                
            </ul>
          {/* <div className="page"><Pagination defaultCurrent={1} total={50} /></div> */}
      </div>
          </div>
        </main>
      </Fragment>
  )
}
export default withRouter(MyFav)
