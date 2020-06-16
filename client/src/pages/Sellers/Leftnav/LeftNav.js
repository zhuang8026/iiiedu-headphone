import React, { Component } from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
//nav li tag 
import {Profile} from './config';
import {Order} from './config';
import {Product} from './config';
import {Marketing} from './config';
import {Shop} from './config';
//import img
import ProfileImg from '../../../assets/img/seller/index/profile-photo.jpg'
import AccountImg from '../../../assets/img/seller/index/user.svg'
import OrderImg from '../../../assets/img/seller/index/order.png'
import ProductImg from '../../../assets/img/seller/index/product.png'
import MarketingImg from '../../../assets/img/seller/index/blog-b.png'
import ShopImg from '../../../assets/img/seller/index/online-shop.png'


//import css
import '../../../assets/css/AliceSeller/LeftNav.css'



function LeftNav (props){
    return (
        <aside className="menu text-align-center">
            <div className="photo d-flex text-align-center align-item-center justify-content-center">
                <img src={ProfileImg} />
                <p>Hello!<br />威廉的快樂</p>
            </div>
            <div className="side-bar">
                <div className="sidebar-box">
                    <ul>
                        <img className="icon-size" src={AccountImg} alt="" />
                        <span>我的帳戶</span>
                    {Profile.map((item,index)=>{return(
                        <li key={index}>
                            <a href={item.linkUrl}>{item.name}</a>
                        </li>)})}
                    </ul>
                </div>
                <ul>
                    <img className="icon-size" src={OrderImg} alt="" />
                    <span>訂單管理</span>
                {Order.map((item,index)=>{return(
                    <li key={index}>
                    <a href={item.linkUrl}>{item.name}</a>
                    </li>)})}
                </ul>
                <ul>
                    <img className="icon-size" src={ProductImg} alt="" />
                    <span>商品管理</span>
                    {Product.map((item,index)=>{
                        return(
                            <li key={index}>
                                <a href={item.linkUrl}>{item.name}</a>
                            </li>
                        )
                    })}
                </ul>
                <ul>
                    <img className="icon-size" src={MarketingImg} alt="" />
                    <span>行銷管理</span>
                    <li><a href="#">部落格文章</a></li>
                </ul>
                <ul>
                    <img className="icon-size" src={ShopImg} alt="" />
                    <span>賣場管理</span>
                    {Shop.map((item,index)=>{return(
                        <li key={index}>
                            <a href={item.linkUrl}>{item.name}</a>
                        </li>
                    )})}
                </ul>
            </div>
        </aside>
    )
}

export default LeftNav;
