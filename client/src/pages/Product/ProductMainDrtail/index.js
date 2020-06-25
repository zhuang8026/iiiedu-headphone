// 函式元件
import React ,{useEffect} from 'react';

import { withRouter } from 'react-router-dom';
// 測試
import logo from '../../../assets/img/tw.jpg';
import logo2 from '../../../assets/img/usa.jpg';

// Swiper
import Swiper from 'react-id-swiper';
import SwiperAnimation from '@cycjimmy/swiper-animation';
import "animate.css/animate.min.css";
const swiperAnimation = new SwiperAnimation();


function ProductMainDrtail(props) {

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
    <div className="items-quick-view-modal">
      <div className="items-quick-view-overlay">我是遮罩層</div>
      <div className="items-wrapper">
        <div className="items-main">
          <div className="items-close-head">
            <div className="items-close"><span class="iconfont icon-error"></span></div>
          </div>
          <div className="items-product" id="items-product-view">
            <div className="items-inner">
              <div id="items-simple">
                <div className="items-img">
                  <Swiper {...params}>
                    <div className="items-img-swiper">
                      <img src={logo} className="swiper-lazy" alt="商品圖片"/>
                    </div>
                    <div className="items-img-swiper">
                      <img src={logo2} className="swiper-lazy" alt="商品圖片"/>
                    </div>
                  </Swiper>
                </div>
                <div className="items-content">
                  <h1>Beoplay_H3</h1>
                  <p className="items-price">$ 200.00</p>
                  <p className="items-text">在旅途中或在家中，都能透過 HD 350BT. 享受絕佳的無線音頻。</p>
                  <p className="items-text">重量:</p>
                  <p className="items-text">單體驅動:</p>
                  <p className="items-text">頻率響應:</p>
                  <p className="items-text">靈敏度:</p>
                  <p className="items-text">連接端子:</p>
                  <p className="items-text">電源:</p>
                  <p className="items-text">電池續航力:</p>
                  <p className="items-text">防水性:</p>
                  <div className="items-btn">
                    <div className="items-cart-btn items-btn-margin">
                      <span class="iconfont icon-wuliu"></span>
                      <span class="items-wish-text">加入購物車</span>
                    </div>
                    <div className="items-wish-btn items-btn-margin">
                      <span class="iconfont icon-like"></span>
                      <span class="items-wish-text">加入最愛</span>
                    </div>
                    <div className="items-wish-com items-btn-margin">
                      <span class="iconfont icon-binding"></span>
                      <span class="items-wish-text">加入比較</span>
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
