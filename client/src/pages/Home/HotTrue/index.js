import React ,{ Fragment, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom"

// Swiper
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

// scss
import './hottrue.scss'


function HotTrue() {
    const params = {
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true,
        lazy: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            clickable: true,
        },
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
                        <div className="swiper-lazy">
                            <h3>Elite Active 65t</h3>
                            <img src="" alt=""/>
                            <ul>
                                <li><i class="iconfont icon-correct"></i>Great for motion</li>
                                <li><i class="iconfont icon-correct"></i>Up to 15 hours battery life*</li>
                                <li><i class="iconfont icon-correct"></i>Motion sensor</li>
                                <li><i class="iconfont icon-correct"></i>Sweat & dust protected</li>
                            </ul>
                        </div>
                        <div className="swiper-lazy">
                            <h3>Elite Active 65t</h3>
                            <img src="" alt=""/>
                            <ul>
                                <li><i class="iconfont icon-correct"></i>Great for motion</li>
                                <li><i class="iconfont icon-correct"></i>Up to 15 hours battery life*</li>
                                <li><i class="iconfont icon-correct"></i>Motion sensor</li>
                                <li><i class="iconfont icon-correct"></i>Sweat & dust protected</li>
                            </ul>
                        </div>
                        <div className="swiper-lazy">
                            <h3>Elite Active 65t</h3>
                            <img src="" alt=""/>
                            <ul>
                                <li><i class="iconfont icon-correct"></i>Great for motion</li>
                                <li><i class="iconfont icon-correct"></i>Up to 15 hours battery life*</li>
                                <li><i class="iconfont icon-correct"></i>Motion sensor</li>
                                <li><i class="iconfont icon-correct"></i>Sweat & dust protected</li>
                            </ul>
                        </div>
                        <div className="swiper-lazy">
                            <h3>Elite Active 65t</h3>
                            <img src="" alt=""/>
                            <ul>
                                <li><i class="iconfont icon-correct"></i>Great for motion</li>
                                <li><i class="iconfont icon-correct"></i>Up to 15 hours battery life*</li>
                                <li><i class="iconfont icon-correct"></i>Motion sensor</li>
                                <li><i class="iconfont icon-correct"></i>Sweat & dust protected</li>
                            </ul>
                        </div>
                    </Swiper>
                </div>
            </div>
        </Fragment>
    );
}

export default withRouter(HotTrue);
