import React from 'react';
import Swiper from 'react-id-swiper';

// scss
import 'swiper/css/swiper.css'
import './_swiperImg.scss'

import {SwiperImg} from './config.js';

const SpaceBetweenSlides = () => {
    const params = {
        spaceBetween: 30,
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    }
    return (
    <Swiper {...params}>
        { SwiperImg.map((data, index)=>{
            return (
                <div>
                    <img src={data.picUrl} alt="AKG"/>
                </div>
            )
        }) }
    </Swiper>
    )
};
export default SpaceBetweenSlides;