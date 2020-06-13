import React ,{ Fragment, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom"

// Swiper
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

// scss
import './hottrue.scss';

import a from '../../../assets/img/bg_6p_1.png'

function HotTrue() {
    const params = {
        slidesPerView: 4,
        spaceBetween: 10,
        // freeMode: true,
        lazy: true,
        loop: true,
        // pagination: {
        //     el: '.swiper-pagination',
        //     type: 'fraction',
        //     clickable: true,
        // },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
    }

    return (
        <Fragment>
            <div className="MyHotTrue">
                {/* 熱門標題 */}
                <div className="true_title">
                    <h2>TRUE WIRELESS EARBUDS</h2>
                    <p>True wireless earbuds engineered for superior calls & music</p>
                </div>

                {/* 熱門商品 */}
                <div className="true_items">
                    <Swiper {...params}>
                        <div className="true_items_inner">
                            <div className="true_items_card swiper-lazy">
                                <h3>RS2e</h3>
                                <a>
                                    <img src={a} alt="商品列表"/>
                                </a>
                                <ul>
                                    <li><i className="iconfont icon-correct"></i>Great for motion</li>
                                    <li><i className="iconfont icon-correct"></i>Up to 15 hours battery life*</li>
                                    <li><i className="iconfont icon-correct"></i>Motion sensor</li>
                                    <li><i className="iconfont icon-correct"></i>Sweat & dust protected</li>
                                </ul>
                            </div>
                        </div>
                        <div className="true_items_inner">
                            <div className="true_items_card swiper-lazy">
                                <h3>RS2e</h3>
                                <a>
                                    <img src={a} alt="商品列表"/>
                                </a>
                                <ul>
                                    <li><i className="iconfont icon-correct"></i>Great for motion</li>
                                    <li><i className="iconfont icon-correct"></i>Up to 15 hours battery life*</li>
                                    <li><i className="iconfont icon-correct"></i>Motion sensor</li>
                                    <li><i className="iconfont icon-correct"></i>Sweat & dust protected</li>
                                </ul>
                            </div>
                        </div>
                        <div className="true_items_inner">
                            <div className="true_items_card swiper-lazy">
                                <h3>RS2e</h3>
                                <a>
                                    <img src={a} alt="商品列表"/>
                                </a>
                                <ul>
                                    <li><i className="iconfont icon-correct"></i>Great for motion</li>
                                    <li><i className="iconfont icon-correct"></i>Up to 15 hours battery life*</li>
                                    <li><i className="iconfont icon-correct"></i>Motion sensor</li>
                                    <li><i className="iconfont icon-correct"></i>Sweat & dust protected</li>
                                </ul>
                            </div>
                        </div>
                        <div className="true_items_inner">
                            <div className="true_items_card swiper-lazy">
                                <h3>RS2e</h3>
                                <a>
                                    <img src={a} alt="商品列表"/>
                                </a>
                                <ul>
                                    <li><i className="iconfont icon-correct"></i>Great for motion</li>
                                    <li><i className="iconfont icon-correct"></i>Up to 15 hours battery life*</li>
                                    <li><i className="iconfont icon-correct"></i>Motion sensor</li>
                                    <li><i className="iconfont icon-correct"></i>Sweat & dust protected</li>
                                </ul>
                            </div>
                        </div>
                    </Swiper>
                </div>
            </div>
            <section></section>
        </Fragment>
    );
}

export default withRouter(HotTrue);
