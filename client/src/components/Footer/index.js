// 函式元件
import React, { useState } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

import Complete from './FooterInput.js';

// scss
import './_footer.scss'

// logo 
import OtisGift from "../../assets/img/gift.png";

// nav img 
// import {NavItems} from './config';
// import {NavIcon} from './config';
// import {NavItemsAir} from './config';


function MyFooter(props) {
    return (
        <footer>
            <div class="footer_content">
                <div class="footer_one_msg"> 
                    <div class="footer_send footer_common">
                        <h5>訂閱我們</h5>
                        <p>訂閱並獲得新收藏10％的折扣</p>
                        <div class="pcform">
                            <form action="" method="post" class="" novalidate="novalidate">
                                <div class="pc_email">
                                    <span>
                                        {/* <input type="email" name="your_email" id="your_email" size="40" placeholder="輸入郵件"/> */}
                                        <Complete/>
                                    </span>
                                    <button class="button_submit" type="submit">
                                        <span>發送</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="footer_gift footer_common">
                        <a href="#">
                            <div class="footer_inner">
                                <div class="inner-icon"><img src={OtisGift} alt="icon"/></div>
                            </div>
                            <div class="footer_bottom_holder">
                                <h5>訂購禮品卡</h5>
                                <p>立即訂購您的禮品卡，即可享受10％的折扣</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div class="footer_bottom">
                <div class="footer-top-holder">
                    <div class="footer-top-inner">
                        <div class="footer-top-row">

                            <div class="footer-column">
                                <div class="footer-column-content">
                                    <div class="widget-title-holder">
                                        <h5>如何聯繫</h5>
                                    </div>
                                    <div class="textwidget">
                                        <p><a href="#"><span>(886)02-2999666</span></a></p>
                                        <p><a href="#"><span>2432 TAIPEI DAAN</span></a></p>
                                        <p><a href="#"><span>TAIWAN 2432</span></a></p>
                                    </div>
                                    <div class="textwidget-icon">
                                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                        <a href="#"><i class="fab fa-instagram"></i></a>
                                        <a href="#"><i class="far fa-comments"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="footer-column">
                                <div class="footer-column-content">
                                    <div class="widget-title-holder">
                                        <h5>關於我們</h5>
                                    </div>
                                    <div class="textwidget">
                                        <p><a href="#"><span>OTIS商店</span></a></p>
                                        <p><a href="#"><span>工作機會</span></a></p>
                                        <p><a href="#"><span>商店在哪?</span></a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="footer-column">
                                <div class="footer-column-content">
                                    <div class="widget-title-holder">
                                        <h5>需要幫助</h5>
                                    </div>
                                    <div class="textwidget">
                                        <p><a href="#"><span>常見問題</span></a></p>
                                        <p><a href="#"><span>訂單追踪</span></a></p>
                                        <p><a href="#"><span>你的訂單</span></a></p>
                                        <p><a href="#"><span>退貨</span></a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="footer-column">
                                <div class="footer-column-content">
                                    <div class="widget-title-holder">
                                        <h5>客戶服務</h5>
                                    </div>
                                    <div class="textwidget">
                                        <p><a href="#"><span>我的帳戶</span></a></p>
                                        <p><a href="#"><span>使用條款</span></a></p>
                                        <p><a href="#"><span>交貨和退貨</span></a></p>
                                        <p><a href="#"><span>禮物卡</span></a></p>
                                        <p><a href="#"><span>保固卡</span></a></p>
                                    </div> 
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="footer-bot-holder">
                    <div class="footer-bot-inner">
                        <span>Copyright © 2020 Otis Technology Co. | All Rights Reserved Development by</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default withRouter(MyFooter);