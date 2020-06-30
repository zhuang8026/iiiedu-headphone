import React, { useEffect,useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
// import Aboutimg from '../../../assets/img/About/A01.jpg'
//antd
// import { message } from 'antd';
import {GiftcardImg} from './Config'
function GiftBuy() {
    const updateCardToLocalStorage = (value) => {
        const currentCart = JSON.parse(localStorage.getItem('cart')) || []
        const newCart = [...currentCart, value]
        localStorage.setItem('cart', JSON.stringify(newCart))
      }
  

  return (
 <>
<div className="BuyGiftCard">
<h1>訂購禮物卡</h1>
</div>
<div className="GiftCardContainer">
{GiftcardImg.map((data, index)=>{
 return(
 <div className="GiftCard" id={data.CardId} >
 <div className="WiGiftButton">
      <button id={data.CardId} 
      onClick={() => {
        updateCardToLocalStorage({
         id: `${data.CardId}`,
         itemName:`${data.CardName}`,
         itemBrand:`${data.CardClass}`,
         itemImg: `${data. picName}`,
         itemPrice:`${data.CardPrice}`,
         amount:parseInt(`${data.amount}`),
        })
      }}
      >加入購物車</button>
 </div>
<img src={`/items_img/${data.picName}`} alt="禮物卡" />
<h2>{data.CardName}</h2>
<p>{data.CardClass}</p>
<p>{data.CardPrice}</p>
 </div> 

)})}


</div>
</>
  )
}
export default withRouter(GiftBuy)