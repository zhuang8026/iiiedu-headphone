// 函式元件
import React, { Fragment } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'



function MyNavBar(props) {
    return (
        <Fragment>
            {/* navbar */}
            <div className="nav-page-header">
                {/* 遮招層 */}
                <div className="nav-page-cover"></div>
                {/* nav body */}
                <div className="nav-containers">
                    <div className="nav-left">
                        <figure>
                            <img src="./asset/img/Otis.png" alt="logo" />
                        </figure>
                    </div>
                    <div className="nav-right">
                        <div className="nav-inner-left">
                            <nav>
                                <ul className="menu-otis-menu">
                                    <li>
                                        <a href="#" className="meaulist">
                                            <span>首頁</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="meaulist">
                                            <span>頭戴式耳機</span>
                                        </a>
                                        <div className="inner hidden-meau">
                                            <ul>
                                                <li className="nav-menu-object nav-menu-border ">
                                                    <img src="./asset/img/akg.png" alt="AKG" />
                                                    <a href="#"><span>AKG</span></a>
                                                </li>
                                                <li className="nav-menu-object nav-menu-border ">
                                                    <img src="./asset/img/at.png" alt="Audio-Technica" />
                                                    <a href="#"><span>Audio-Technica</span></a>
                                                </li>
                                                <li className="nav-menu-object nav-menu-border ">
                                                    <img src="./asset/img/b&O.png" alt="Bang & Olufsen" />
                                                    <a href="#"><span>Bang & Olufsen</span></a>
                                                </li>
                                                <li className="nav-menu-object nav-menu-border ">
                                                    <img src="./asset/img/beat.png" alt="Beats pro" />
                                                    <a href="#"><span>Beats pro</span></a>
                                                </li>
                                                <li className="nav-menu-object nav-menu-border ">
                                                    <img src="./asset/img/shure.png" alt="Shure" />
                                                    <a href="#"><span>Shure</span></a>
                                                </li>
                                                <li className="nav-menu-object nav-menu-border ">
                                                    <img src="./asset/img/sony.png" alt="SONY" />
                                                    <a href="#"><span>SONY</span></a>
                                                </li>
                                                <li className="nav-menu-object nav-menu-border ">
                                                    <img src="./asset/img/SEN.png" alt="SENNHEISER" />
                                                    <a href="#"><span>SENNHEISER</span></a>
                                                </li>
                                            </ul>
                                            {/* <div className="meau_img">
                                                <a href="#"><img src="./asset/items_img/SRH1840-01.png" alt="SRH1840"><span>SRH1840-01</span></a>
                                                <a href="#"><img src="./asset/items_img/SRH240A-01.png" alt="SRH240A"><span>SRH240A-01</span></a>
                                                <a href="#"><img src="./asset/items_img/SRH940-02.png" alt="SRH940"><span>SRH940-02</span></a>
                                                <a href="#"><img src="./asset/items_img/MDR-XB950N1-01.png" alt="XB950N1"><span>MDR-XB950N1-01</span></a>
                                                <a href="#"><img src="./asset/items_img/MDR-Z7M2-01.png" alt="MDR-Z7M2-01"><span>MDR-Z7M2-01</span></a>
                                                <a href="#"><img src="./asset/items_img/WH-H810-01.png" alt="WH-H810-01"><span>WH-H810-01</span></a>
                                            </div> */}
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#" className="meaulist">
                                        <span>耳戴式耳機</span>
                                        </a>
                                        <div className="inner hidden-meau">
                                            <ul>
                                                <li className="nav-menu-object nav-menu-border ">
                                                    <img src="./asset/img/akg.png" alt="AKG" />
                                                    <a href="#"><span>AKG</span></a>
                                                </li>
                                                <li className="nav-menu-object nav-menu-border ">
                                                    <img src="./asset/img/at.png" alt="Audio-Technica" />
                                                    <a href="#"><span>Audio-Technica</span></a>
                                                </li>
                                                <li className="nav-menu-object nav-menu-border ">
                                                    <img src="./asset/img/b&O.png" alt="Bang & Olufsen" />
                                                    <a href="#"><span>Bang & Olufsen</span></a>
                                                </li>
                                                <li className="nav-menu-object nav-menu-border ">
                                                    <img src="./asset/img/beat.png" alt="Beats pro" />
                                                    <a href="#"><span>Beats pro</span></a>
                                                </li>
                                                <li className="nav-menu-object nav-menu-border ">
                                                    <img src="./asset/img/shure.png" alt="Shure" />
                                                    <a href="#"><span>Shure</span></a>
                                                </li>
                                                <li className="nav-menu-object nav-menu-border ">
                                                    <img src="./asset/img/sony.png" alt="SONY" />
                                                    <a href="#"><span>SONY</span></a>
                                                </li>
                                                <li className="nav-menu-object nav-menu-border ">
                                                    <img src="./asset/img/SEN.png" alt="SENNHEISER" />
                                                    <a href="#"><span>SENNHEISER</span></a>
                                                </li>
                                                
                                            </ul>
                                            {/* <div className="meau_img">
                                                <a href="#"><img src="./asset/items_img/Beoplay_E8-01.png" alt="Beoplay_E8-01"><span>Beoplay_E8-01</span></a>
                                                <a href="#"><img src="./asset/items_img/Beoplay_E8_3rd_Gen-02.png" alt="Beoplay_E8_3rd_Gen-02"><span>Beoplay_E8_3rd_Gen-02</span</a>
                                                <a href="#"><img src="./asset/items_img/Beoplay_E8_2.0-01.png" alt="Beoplay_E8_2.0-01"><span>Beoplay_E8_2.0-01</span</a>
                                                <a href="#"><img src="./asset/items_img/SE846-04.png" alt="SE846-04"><span>SE846-04</span</a>
                                                <a href="#"><img src="./asset/items_img/Beoplay_H3-03.png" alt="eoplay_H3-03"><span>eoplay_H3-03</span</a>
                                                <a href="#"><img src="./asset/items_img/Beoplay_E4-01.png" alt="Beoplay_E4-01"><span>Beoplay_E4-01</span</a>
                                            </div> */}
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#" className="meaulist">
                                            <span>揚聲器</span>
                                        </a>
                                        <div className="inner hidden-meau">
                                            <ul>
                                                <li className="nav-menu-object nav-menu-border ">
                                                    <img src="./asset/img/akg.png" alt="AKG" />
                                                    <a href="#"><span>AKG</span></a>
                                                </li>
                                                <li className="nav-menu-object nav-menu-border ">
                                                    <img src="./asset/img/at.png" alt="Audio-Technica" />
                                                    <a href="#"><span>Audio-Technica</span></a>
                                                </li>
                                                <li className="nav-menu-object nav-menu-border ">
                                                    <img src="./asset/img/b&O.png" alt="Bang & Olufsen" />
                                                    <a href="#"><span>Bang & Olufsen</span></a>
                                                </li>
                                                <li className="nav-menu-object nav-menu-border ">
                                                    <img src="./asset/img/beat.png" alt="Beats pro" />
                                                    <a href="#"><span>Beats pro</span></a>
                                                </li>
                                                <li className="nav-menu-object nav-menu-border ">
                                                    <img src="./asset/img/shure.png" alt="Shure" />
                                                    <a href="#"><span>Shure</span></a>
                                                </li>
                                                <li className="nav-menu-object nav-menu-border ">
                                                    <img src="./asset/img/sony.png" alt="SONY" />
                                                    <a href="#"><span>SONY</span></a>
                                                </li>
                                                <li className="nav-menu-object nav-menu-border ">
                                                    <img src="./asset/img/SEN.png" alt="SENNHEISER" />
                                                    <a href="#"><span>SENNHEISER</span></a>
                                                </li>
                                                
                                            </ul>
                                            {/* <div className="meau_img">
                                                <a href="#"><img src="./asset/items_img/Beoplay_E8-01.png" alt="Beoplay_E8-01"><span>Beoplay_E8-01</span></a>
                                                <a href="#"><img src="./asset/items_img/Beoplay_E8_3rd_Gen-02.png" alt="Beoplay_E8_3rd_Gen-02"><span>Beoplay_E8_3rd_Gen-02</span</a>
                                                <a href="#"><img src="./asset/items_img/Beoplay_E8_2.0-01.png" alt="Beoplay_E8_2.0-01"><span>Beoplay_E8_2.0-01</span</a>
                                                <a href="#"><img src="./asset/items_img/SE846-04.png" alt="SE846-04"><span>SE846-04</span</a>
                                                <a href="#"><img src="./asset/items_img/Beoplay_H3-03.png" alt="eoplay_H3-03"><span>eoplay_H3-03</span</a>
                                                <a href="#"><img src="./asset/items_img/Beoplay_E4-01.png" alt="Beoplay_E4-01"><span>Beoplay_E4-01</span</a>
                                            </div> */}
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#" className="meaulist">
                                            <span>關於我們</span>
                                        </a>
                                        <div className="inner hidden-meau">
                                        <ul>
                                            <li className="nav-menu-object">
                                                <i className="fas fa-gift"></i>
                                                <a href=""><span>禮物卡</span></a>
                                            </li>
                                            <li className="nav-menu-object">
                                                <i className="fas fa-user-shield"></i>
                                                <a href=""><span>保固卡</span></a>
                                            </li>
                                            <li className="nav-menu-object">
                                                <i className="fas fa-smile"></i>
                                                <a href=""><span>關於我們</span></a>
                                            </li>
                                            <li className="nav-menu-object">
                                                <i className="fas fa-headset"></i>
                                                <a href=""><span>聯係我們</span></a>
                                            </li>
                                            <li className="nav-menu-object">
                                                <i className="fas fa-store"></i>
                                                <a href=""><span>商店定位</span></a>
                                            </li>
                                            <li className="nav-menu-object">
                                                <i className="fas fa-question-circle"></i>
                                                <a href=""><span>常見問題</span></a>
                                            </li>
                                            <li className="nav-menu-object">
                                                <i className="fas fa-user-tag"></i>
                                                <a href=""><span>我們的客戶</span></a>
                                            </li>
                                        </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#" className="meaulist">
                                            <span>BLOG</span>
                                        </a>
                                        <div className="inner hidden-meau">
                                        <ul>
                                            <li className="nav-menu-object">
                                                <i className="fab fa-blogger"></i>
                                                <a href="#" type="button"><span>所有 Blog</span></a>
                                            </li>
                                            <li className="nav-menu-object">
                                                <i className="fab fa-blogger"></i>
                                                <a href="#" type="button"><span>我的 Blog</span></a>
                                            </li>
                                        </ul>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="nav-inner-right">
                            <nav>
                                <ul className="menu-otis-icon">
                                <li>
                                    <div id="search">
                                    <form
                                        method="get"
                                        id="searchform"
                                        className="searchform"
                                        action="#"
                                    >
                                        <label className="screen-reader-text">Search for:</label>
                                        <div className="input-holder clearfix">
                                        <input
                                            type="search"
                                            className="search-field"
                                            required=""
                                            // value=""
                                            name="s"
                                            title="Search for:"
                                        />
                                        <button type="submit" className="otis-search-submit">
                                            <i className="iconfont icon-search"></i>
                                        </button>
                                        </div>
                                    </form>
                                    </div>
                                </li>
                                <li>
                                    <div id="members" className="otis-members">
                                    <a className="otis-login-opener">
                                        <span className="otis-login-text">
                                            <i className="iconfont icon-user_2"></i>
                                        </span>
                                    </a>
                                    </div>
                                </li>
                                <li>
                                    <div id="wishlist" className="otis-wishlist">
                                        <a className="otis-wishlist-widget-link">
                                            <span className="otis-wishlist-widget-icon">
                                                <i className="iconfont icon-like"></i>
                                            </span>
                                            <span className="otis-wishlist-widget-count">0</span>
                                        </a>
                                        <input
                                            type="hidden"
                                            id="nille_select_product_wishlist_nonce_7874"
                                            name="nille_select_product_wishlist_nonce_7874"
                                            // value="790326ca63"
                                        /><input
                                            type="hidden"
                                            name="_wp_http_referer"
                                            // value="/"
                                        />
                                    </div>
                                </li>
                                <li>
                                    <div id="shopping" className="otis-shopping">
                                        <div className="otis-shopping-cart-inner">
                                            <a
                                                itemProp="url"
                                                className="qodef-header-cart"
                                            >
                                                <span className="otis-sc-opener-icon">
                                                    <i className="iconfont icon-cart"></i>
                                                </span>
                                                <span className="otis-sc-opener-count">5</span>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a
                                    className="qodef-side-menu-button-opener qodef-icon-has-hover qodef-side-menu-button-opener-predefined"
                                    >
                                    <span className="qodef-side-menu-icon">
                                        <span className="qodef-hm-lines">
                                        <span className="qodef-hm-line qodef-line-1"></span>
                                        <span className="qodef-hm-line qodef-line-2"></span>
                                        </span>
                                    </span>
                                    </a>
                                </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
export default withRouter(MyNavBar);