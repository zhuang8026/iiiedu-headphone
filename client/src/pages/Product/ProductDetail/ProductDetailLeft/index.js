// 函式元件
import React, { useState } from 'react';
import {withRouter} from 'react-router-dom'

// Swiper
import Swiper from 'react-id-swiper';
function ProductDetailLeft(props) {
  const params = {
    slidesPerView: 1,
    spaceBetween: 10,
    lazy: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        clickable: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false
    }
  }

  const {detaildata} = props;

  return (
    <>
      <div className="YyDetailleft">
        <div className="DetailImg">
          <Swiper {...params}>
            <div className="">
              <img src={`/items_img/${detaildata.itemImg}`} className="swiper-lazy" alt="商品圖片"/>
            </div>
            <div className="">
              <img src={`/items_img/${detaildata.multiple_Image01}`} className="swiper-lazy" alt="商品圖片"/>
            </div>
            <div className="">
              <img src={`/items_img/${detaildata.multiple_Image02}`} className="swiper-lazy" alt="商品圖片"/>
            </div>
            <div className="">
              <img src={`/items_img/${detaildata.multiple_Image03}`} className="swiper-lazy" alt="商品圖片"/>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  )

};
export default withRouter(ProductDetailLeft)
