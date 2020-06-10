// 函式元件
import React, { Fragment } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

// import '../assets/js/MyNavBarFun';

function MyNavBar(props) {
    return (
        <Fragment>
            <section className="header-side-menu">
                <div className="side-menu-close">
                    <i className="fas fa-times"></i>
                </div>
                <div className="menu_name">
                    <a href="#">
                        <img src="./asset/img/Otis.gif" alt="Otis icon"/>
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
                                    <img src="./asset/img/ticket.png" alt="headphone"/>
                                </li>
                                <li>
                                    <div className="otis_instagram_code">
                                        <img className="otis_padding" src="./asset/img/Otis.png" alt="otis_icon"/>
                                        <div className="otis_num otis_padding">10%</div>
                                        <div className="otis_code otis_padding"><font>MFEE0706NICE</font></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <a type="button" className="add_cart" href="#">TO CART</a>
            </section>
        </Fragment>
    )

}
export default withRouter(MyNavBar);