import React from 'react';
import { Link } from 'react-router-dom'

// Swiper
import Swiper from 'react-id-swiper';

import SwiperAnimation from '@cycjimmy/swiper-animation';
import "animate.css/animate.min.css";

// scss
import 'swiper/css/swiper.css';
import './_swiperImg.scss';

import {SwiperImg} from './config.js';

// components
import LInkButton from '../../../components/LInkButton';

const swiperAnimation = new SwiperAnimation();

const HomeSlider = () => {
    const params = {
        slidesPerView: 1,
        spaceBetween: 30,
        effect: 'fade',
        lazy: true,
        loop: true,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            // clickable: true,
            // dynamicBullets: true
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },

        // swiper-animation --use--> animate.css
        on: {
            init: function () {
                swiperAnimation.init(this).animate();
            },
            slideChange: function () {
                swiperAnimation.init(this).animate();
            }
        }
    }
    return (
        <Swiper {...params}>
            { SwiperImg.map((data, index)=>{
                return (
                    <div className="swiper_data" key={index}>
                        <div className="swiper_card">
                            <div 
                                className="swiper_items"
                                data-swiper-animation="animate__fadeInRight" 
                                data-duration=".3s" 
                                data-delay=".3s"
                            >
                                <div 
                                    className="swiper_items_inner"
                                    data-swiper-animation="animate__zoomIn" 
                                    data-duration=".5s" 
                                    data-delay=".5s" 
                                    // data-swiper-out-animation="animate__fadeOut"
                                    // data-out-duration=".2s"
                                >
                                    <Link to={data.itemslinkUrl}>
                                        <img src={data.itemsUrl} className="swiper-lazy" alt="product"/>
                                        <div className="items_inner_text">
                                            <h2>{data.itemsName}</h2>
                                            <p>{data.itemsText}</p>
                                            <p>$. {data.itemsPrice} NT</p>
                                        </div>
                                        <span className="swiper_more">
                                            MORE<i className="iconfont icon-right_2"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div 
                                className="swiper_items_title"
                                data-swiper-animation="animate__fadeInLeft" 
                                data-duration=".6s" 
                                data-delay=".6s"
                            >
                                <ul>
                                    <li className="items_card_right">
                                        <h1>{data.h1text}</h1>
                                        <p>{data.ptext}</p>
                                    </li>
                                    <li 
                                        data-swiper-animation="animate__fadeInUp" 
                                        data-duration="1s" 
                                        data-delay="1s"
                                    >
                                        <LInkButton 
                                            linkUrl= {data.itemslinkUrl}
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <img src={data.picUrl} className="swiper-lazy" alt="background image"/>
                    </div>
                )
            }) }
        </Swiper>
    
    )
};
export default HomeSlider;