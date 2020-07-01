// 函式元件
import React, { Fragment, useState } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

import OtisGif from "../../assets/img/Otis.gif";
import Otispng from '../../assets/img/Otis.png';
import ticket from '../../assets/img/ticket.png';

// scss
// import './_menu.scss'

function MyNavBar(props) {
    const {cartchange, setcartchange} =props;
    // console.log(cartchange);

    return (
        <Fragment>
            <section className="header-side-menu">
                <div className="side-menu-close">
                    <i className="iconfont icon-error"></i>
                </div>
                <div className="menu_name">
                    <a href="#">
                        <img src={OtisGif} alt="Otis icon"/>
                    </a>
                </div>
                <div className="menu_text">
                    <div className="textwidget">
                        <p>時尚購物體驗！<br/>
                        以最優惠的價格找到您喜歡的物品，<br/>
                        每天發現最優惠的價格。</p>
                    </div>
                </div>
                <div className="otis_instagram">
                    <div className="otis_instagram_widget">
                        <div className="otis_instagram_space">
                            <ul className="otis_instagram_feed">
                                <li className="otis_instagram_img">
                                    <img src={ticket} alt="headphone"/>
                                </li>
                                <li>
                                    <div className="otis_instagram_code">
                                        <img className="otis_padding" src={Otispng} alt="otis_icon"/>
                                        <div className="otis_num otis_padding">10%</div>
                                        <div className="otis_code otis_padding"><font>MFEE0706NICE</font></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="otis_cart">
                    <div className="otis_cart_inner">
                        {
                            cartchange ? (
                                <Fragment>
                                {cartchange.map((data, index)=>{
                                    return(
                                        <div className="cart_row" key={index}>
                                            <figure>
                                                <img src={`/items_img/${data.itemImg}`} alt="商品圖片"/>
                                            </figure>
                                            <div className="cart_text">
                                                <div className="cart_price">
                                                    <span className="item_name">{data.itemName}</span>
                                                    <span className="item_num">{data.amount}/副</span>
                                                    <span className="item_price">$ {data.itemPrice}</span>
                                                </div>
                                                <div className="cart_btn">
                                                    <button className="btn_wish btn_width">加入願望</button>
                                                    <button className="btn_booking btn_width">加入比較</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                        </Fragment>
                            ) : (
                                <div className="cart_row" >
                                <figure>
                                    <img src={"/user_img/fail.gif"} alt="商品圖片"/>
                                </figure>
                                <div className="cart_price">
                                哎呀...沒有商品...
                                </div>
                                </div>
                            )
                        }
                        
                        
                    </div>
                </div>
                <Link to="/MyCart" type="button" className="add_cart" href="#">TO CART</Link>
            </section>
        </Fragment>
    )

}
export default withRouter(MyNavBar);