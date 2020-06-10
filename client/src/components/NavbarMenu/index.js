// 函式元件
import React, { Fragment } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

import OtisGif from "../../assets/img/Otis.gif";
import Otispng from '../../assets/img/Otis.png';
import ticket from '../../assets/img/ticket.png';

// scss
import './_menu.scss'

function MyNavBar(props) {
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
                        <div className="cart_row">
                            <figure>
                                <img src={Otispng} alt="商品圖片"/>
                            </figure>
                            <div className="cart_text">
                                <div className="cart_price">
                                    <span className="item_name">MDR-XB950N1</span>
                                    <span className="item_num">1/副</span>
                                    <span className="item_price">NT. 6999</span>
                                </div>
                                <div className="cart_btn">
                                    <button className="btn_wish btn_width">加入願望</button>
                                    <button className="btn_booking btn_width">加入比較</button>
                                </div>
                            </div>
                        </div>

                        <div className="cart_row">
                            <figure>
                                <img src={Otispng} alt="商品圖片"/>
                            </figure>
                            <div className="cart_text">
                                <div className="cart_price">
                                    <span className="item_name">MDR-XB950N1</span>
                                    <span className="item_num">1/副</span>
                                    <span className="item_price">NT. 6999</span>
                                </div>
                                <div className="cart_btn">
                                    <button className="btn_wish btn_width">加入願望</button>
                                    <button className="btn_booking btn_width">加入比較</button>
                                </div>
                            </div>
                        </div>
                        <div className="cart_row">
                            <figure>
                                <img src={Otispng} alt="商品圖片"/>
                            </figure>
                            <div className="cart_text">
                                <div className="cart_price">
                                    <span className="item_name">MDR-XB950N1</span>
                                    <span className="item_num">1/副</span>
                                    <span className="item_price">NT. 6999</span>
                                </div>
                                <div className="cart_btn">
                                    <button className="btn_wish btn_width">加入願望</button>
                                    <button className="btn_booking btn_width">加入比較</button>
                                </div>
                            </div>
                        </div>
                        <div className="cart_row">
                            <figure>
                                <img src={Otispng} alt="商品圖片"/>
                            </figure>
                            <div className="cart_text">
                                <div className="cart_price">
                                    <span className="item_name">MDR-XB950N1</span>
                                    <span className="item_num">1/副</span>
                                    <span className="item_price">NT. 6999</span>
                                </div>
                                <div className="cart_btn">
                                    <button className="btn_wish btn_width">加入願望</button>
                                    <button className="btn_booking btn_width">加入比較</button>
                                </div>
                            </div>
                        </div>
                        <div className="cart_row">
                            <figure>
                                <img src={Otispng} alt="商品圖片"/>
                            </figure>
                            <div className="cart_text">
                                <div className="cart_price">
                                    <span className="item_name">MDR-XB950N1</span>
                                    <span className="item_num">1/副</span>
                                    <span className="item_price">NT. 6999</span>
                                </div>
                                <div className="cart_btn">
                                    <button className="btn_wish btn_width">加入願望</button>
                                    <button className="btn_booking btn_width">加入比較</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a type="button" className="add_cart" href="#">TO CART</a>
            </section>
        </Fragment>
    )

}
export default withRouter(MyNavBar);