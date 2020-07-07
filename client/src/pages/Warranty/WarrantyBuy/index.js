import React, { useEffect,useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import {WarrantyImg} from './Config'
import { message } from 'antd';
function WarrantyBuy() {
    const updateCardToLocalStorage = (value) => {
        const currentCart = JSON.parse(localStorage.getItem('cart')) || []
        const newCart = [...currentCart, value]
        localStorage.setItem('cart', JSON.stringify(newCart))
      }
    return(
        <>
        <div className="BuyWarrantyCard">
            <h1>訂購保固卡</h1>
        </div>
        
        <div className="WarrantyCardContainer">
        { WarrantyImg.map((data, index)=>{
        return(
        <div className="WarrantyCard" id={data.CardId} >
        <div className="WiWarrantyButton">
            <button id={data.CardId} 
            onClick={() => {
                message.success(`商品"${data.CardName}"加入購物車`)
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
        <img src={`/items_img/${data.picName}`} alt="保固卡" />
        <h2>{data.CardName}</h2>
        <p>{data.CardClass}</p>
        <p>{data.CardPrice}</p>
        </div> 

        )})}

        
        </div>
        </>
    )
}
export default withRouter(WarrantyBuy)