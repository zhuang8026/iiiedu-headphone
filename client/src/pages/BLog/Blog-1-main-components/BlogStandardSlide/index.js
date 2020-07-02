// 函式元件
import React, { Fragment, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    Link,
    NavLink,
    withRouter,
} from 'react-router-dom'
// Swiper
import Swiper from 'react-id-swiper';
// import SwiperAnimation from '@cycjimmy/swiper-animation';
// import "animate.css/animate.min.css";
// import testSlider from '../testSlider'

// -------------------- components --------------------

// -------------------- scss --------------------
// import '../../../assets/scss/blog_standard.scss'

// -------------------- imgs --------------------
import slide from '../../../../assets/img/blog-img/blog-standard/slide.png'
import top from '../../../../assets/img/blog-img/blog-standard/top.png'
import { SwiperImg } from './config.js';

// -------------------- func --------------------

function BlogMainStandardSlide(props) {
    const { userdata, setUserdata } = props
    // const swiperAnimation = new SwiperAnimation();
    const mySwiper = {
        slidesPerView: 3,
        centeredSlides: true,
        centeredSlidesBounds: true,
        // spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,


        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    }



    return (
        <>
            <div className="carouselWall-blog">
                <div className="imageWall-blog">
                    <figure className="blog-standard-fig wallFig blog-cover">
                        <img src={top} alt="" />
                    </figure>
                </div>
                <div className="slideWall">
                    <div className="slides slider-container" id="sliderContainer">

                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <Swiper {...mySwiper}>
                                    <div className="swiper-slide">
                                        <figure className="s-f">
                                            <img className="s-f-i blog-cover" src={slide} alt="" />
                                        </figure>
                                    </div>
                                    <div className="swiper-slide">
                                        <figure className="s-f">
                                            <img className="s-f-i blog-cover" src={slide} alt="" />
                                        </figure>
                                    </div>
                                    <div className="swiper-slide">
                                        <figure className="s-f">
                                            <img className="s-f-i blog-cover" src={slide} alt="" />
                                        </figure>
                                    </div>
                                    <div className="swiper-slide">
                                        <figure className="s-f">
                                            <img className="s-f-i blog-cover" src={slide} alt="" />
                                        </figure>
                                    </div>
                                </Swiper>
                            </div>


                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}
export default withRouter(BlogMainStandardSlide)
