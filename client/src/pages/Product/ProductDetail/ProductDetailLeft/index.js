// 函式元件
import React, { useState, useEffect } from 'react';
import {withRouter} from 'react-router-dom'

// Swiper
import Swiper from 'react-id-swiper';

import WHH8101 from '../../../../assets/img/tw.jpg'
function ProductDetailLeft() {
  // return (
  //   <>
  //     <div className="YyDetailleft">
  //       <div className="DetailImg">
  //         <img src={WHH8101} />
  //       </div>
  //       <div className="DetailSmallPic">
  //         <img src={WHH8101} />
  //         <img src={WHH8101} />
  //         <img src={WHH8101} />
  //         <img src={WHH8101} />
  //       </div>
  //     </div>
  //   </>
  // )
    const [gallerySwiper, getGallerySwiper] = useState(null);
    const [thumbnailSwiper, getThumbnailSwiper] = useState(null);
    const gallerySwiperParams = {
      getSwiper: getGallerySwiper,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    };
    const thumbnailSwiperParams = {
      getSwiper: thumbnailSwiper,
      spaceBetween: 10,
      centeredSlides: true,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true
    };
    useEffect(() => {
      if (
        gallerySwiper !== null &&
        gallerySwiper.controller &&
        thumbnailSwiper !== null &&
        thumbnailSwiper.controller
      ) {
        gallerySwiper.controller.control = thumbnailSwiper;
        thumbnailSwiper.controller.control = gallerySwiper;
      }
    }, [gallerySwiper, thumbnailSwiper]);
    return (
      <div>
        <Swiper {...gallerySwiperParams}>
        
          <div class="swiper-slide">
            <img src={WHH8101}/>
          </div>
          <div class="swiper-slide">
            <img src={WHH8101}/>
          </div>
          <div class="swiper-slide">
            <img src={WHH8101}/>
          </div>
        </Swiper>
        <Swiper {...thumbnailSwiperParams}>
        <div class="swiper-slide">
            <img src={WHH8101}/>
          </div>
          <div class="swiper-slide">
            <img src={WHH8101}/>
          </div>
          <div class="swiper-slide">
            <img src={WHH8101}/>
          </div>
          <div class="swiper-slide">
            <img src={WHH8101}/>
          </div>
        </Swiper>
      </div>
    );
  };
export default withRouter(ProductDetailLeft)
