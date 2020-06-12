import React from 'react';
import Swiper from 'react-id-swiper';

import SwiperAnimation from '@cycjimmy/swiper-animation';
import "animate.css/animate.min.css";

// scss
import 'swiper/css/swiper.css'
import './_swiperImg.scss'

import {SwiperImg} from './config.js';

import a from '../../assets/items_img/MDR-Z7M2-01.png'

const swiperAnimation = new SwiperAnimation();
const SpaceBetweenSlides = () => {
    const params = {
        slidesPerView: 1,
        spaceBetween: 30,
        effect: 'fade',
        lazy: true,
        loop: true,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false
        // },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
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
                    <div key={index}>
                        {/* <h1 
                            data-swiper-animation="animate__fadeInRight" 
                            data-duration=".5s" 
                            data-delay=".5s" 
                            data-swiper-out-animation="animate__fadeOut"
                            data-out-duration=".2s"
                        >{data.h1text}</h1> */}
                        <div 
                            className="swiper_items"
                            data-swiper-animation="animate__fadeInUp" 
                            data-duration=".3s" 
                            data-delay=".3s"
                            // data-swiper-out-animation="animate__fadeOut"
                            // data-out-duration=".2s"
                        >
                            <div 
                                className="swiper_items_inner"
                                data-swiper-animation="animate__zoomIn" 
                                data-duration=".5s" 
                                data-delay=".5s" 
                                // data-swiper-out-animation="animate__fadeOut"
                                // data-out-duration=".2s"
                            >
                                <img src={a} className="swiper-lazy" alt="product"/>
                                <h2>威廉的耳機</h2>
                                <p>威廉的耳機牌</p>
                                <p>NT : 100000</p>
                            </div>
                        </div>
                        <img src={data.picUrl} className="swiper-lazy" alt="AKG"/>
                    </div>
                )
            }) }
        </Swiper>
    
    )
};
export default SpaceBetweenSlides;