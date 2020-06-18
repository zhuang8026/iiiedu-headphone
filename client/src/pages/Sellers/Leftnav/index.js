import React from 'react'
import {
  Link,
  NavLink,
  withRouter,
  BrowserRouter as Router,
  Route,
  Switch,
  HashRouter,
  Navigation,
} from 'react-router-dom'
//nav li tag
import { ProfileLi } from './config'
import { OrderLi } from './config'
import { ProductLi } from './config'
import { ShopLi } from './config'
//import img
import ProfileImg from '../../../assets/img/seller/index/profile-photo.jpg'
import AccountImg from '../../../assets/img/seller/index/user.svg'
import OrderImg from '../../../assets/img/seller/index/order.png'
import ProductImg from '../../../assets/img/seller/index/product.png'
import MarketingImg from '../../../assets/img/seller/index/blog-b.png'
import ShopImg from '../../../assets/img/seller/index/online-shop.png'

//import css
// import '../../../assets/css/AliceSeller/LeftNav.css'

function LeftNav(props) {
  return (
    <aside className="seller-menu">
      <div className="seller-photo">
        <img src={ProfileImg} alt="" />
        <p>
          Hello!
          <br />
          威廉的快樂
        </p>
      </div>
      <div className="side-bar">
        <div className="sidebar-box">
          <ul>
            <img className="icon-size" src={AccountImg} alt="" />
            <span>我的帳戶</span>
            {ProfileLi.map((item, index) => {
              return (
                <li key={index}>
                  <a className="seller-a" href={item.linkUrl}>
                    {item.name}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <ul>
          <img className="icon-size" src={OrderImg} alt="" />
          <span>訂單管理</span>
          {OrderLi.map((item, index) => {
            return (
              <li key={index}>
                <a className="seller-a" href={item.linkUrl}>
                  {item.name}
                </a>
              </li>
            )
          })}
        </ul>
        <ul>
          <img className="icon-size" src={ProductImg} alt="" />
          <span>商品管理</span>
          {ProductLi.map((item, index) => {
            return (
              <li key={index}>
                <a className="seller-a" href={item.linkUrl}>
                  {item.name}
                </a>
              </li>
            )
          })}
        </ul>
        <ul>
          <img className="icon-size" src={MarketingImg} alt="" />
          <span>行銷管理</span>
          <li>
            <a className="seller-a" href="#">
              部落格文章
            </a>
          </li>
        </ul>
        <ul>
          <img className="icon-size" src={ShopImg} alt="" />
          <span>賣場管理</span>
          {ShopLi.map((item, index) => {
            return (
              <li key={index}>
                <a className="seller-a" href={item.linkUrl}>
                  {item.name}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

export default withRouter(LeftNav)
