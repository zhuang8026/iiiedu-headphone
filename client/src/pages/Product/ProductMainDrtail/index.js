// 函式元件
import React from 'react';

import { Link, withRouter } from 'react-router-dom';
// 測試
// import logo from '../../../assets/img/tw.jpg';
// import logo2 from '../../../assets/img/usa.jpg';

// Swiper
import Swiper from 'react-id-swiper';
// import SwiperAnimation from '@cycjimmy/swiper-animation';
// import "animate.css/animate.min.css";
// const swiperAnimation = new SwiperAnimation();


function ProductMainDrtail(props) {
  const { detailitems } = props;
  const params = {
    slidesPerView: 1,
    // spaceBetween: 30,
    // effect: 'fade',
    lazy: true,
    // loop: true,
    // autoplay: {
    //     delay: 7000,
    //     disableOnInteraction: false
    // },
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
    // on: {
    //     init: function () {
    //         swiperAnimation.init(this).animate();
    //     },
    //     slideChange: function () {
    //         swiperAnimation.init(this).animate();
    //     }
    // }
  }

  return (
    <div className="items-quick-view-modal">
      <div className="items-quick-view-overlay">我是遮罩層</div>
      <div className="items-wrapper">
        <div className="items-main">
          <div className="items-close-head">
            <div className="items-close"><span className="iconfont icon-error"></span></div>
          </div>
          <div className="items-product" id="items-product-view">
            <div className="items-inner">
              <div id="items-simple">
                <div className="items-img">
                  <Swiper {...params}>
                    <div className="items-img-swiper">
                      <img src={`/items_img/${detailitems.itemImg}`} className="swiper-lazy" alt="商品圖片"/>
                    </div>
                    <div className="items-img-swiper">
                      <img src={`/items_img/${detailitems.multiple_Image01}`} className="swiper-lazy" alt="商品圖片"/>
                    </div>
                    <div className="items-img-swiper">
                      <img src={`/items_img/${detailitems.multiple_Image02}`} className="swiper-lazy" alt="商品圖片"/>
                    </div>
                    <div className="items-img-swiper">
                      <img src={`/items_img/${detailitems.multiple_Image03}`} className="swiper-lazy" alt="商品圖片"/>
                    </div>
                    <div className="items-img-swiper">
                      <img src={`/items_img/${detailitems.multiple_Image04}`} className="swiper-lazy" alt="商品圖片"/>
                    </div>
                  </Swiper>
                </div>
                <div className="items-content">
                  <h1>Beoplay_H3</h1>
                  <p className="items-price">$ {detailitems.itemPrice}</p>
                  <p className="items-text">{detailitems.itemscontent}</p>
                  <p className="items-text">品牌 ｜ {detailitems.itemsbrand}</p>
                  <p className="items-text">重量 ｜ {detailitems.itemsweight}</p>
                  <p className="items-text">單體驅動 ｜ {detailitems.itemsdrive}</p>
                  <p className="items-text">頻率響應 ｜ {detailitems.itemsfrequency}</p>
                  <p className="items-text">靈敏度 ｜ {detailitems.itemsSensitivity}</p>
                  <p className="items-text">連接端子 ｜ {detailitems.itemsconnect}</p>
                  <p className="items-text">電源 ｜ {detailitems.itemsmains}</p>
                  <p className="items-text">電池續航力 ｜ {detailitems.itemsEndurance}</p>
                  <p className="items-text">防水性 ｜ {detailitems.itemswatertight}</p>
                  <div className="items-btn">
                    <div className="items-cart-btn items-btn-margin">
                      <span className="iconfont icon-wuliu"></span>
                      <span className="items-wish-text">加入購物車</span>
                    </div>
                    <Link 
                      id={detailitems.itemId}
                      className="items-wish-btn items-btn-margin"
                      to={"/ProductDetail/"+detailitems.itemId}
                    >
                      <span className="iconfont icon-search"></span>
                      <span className="items-wish-text">查看細節</span>
                    </Link>
                    <div className="items-wish-btn items-btn-margin">
                      <span className="iconfont icon-like"></span>
                      <span className="items-wish-text">加入最愛</span>
                    </div>
                    <div className="items-wish-com items-btn-margin">
                      <span className="iconfont icon-binding"></span>
                      <span className="items-wish-text">加入比較</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default withRouter(ProductMainDrtail)
