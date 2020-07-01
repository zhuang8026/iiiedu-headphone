// 函式元件
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

// Swiper
import Swiper from 'react-id-swiper';

//antd
import { message } from 'antd';

function ProductMainDrtail(props) {
  const { detailitems, setlovechange, setcompareschange, setcartchange} = props;
  const params = {
    slidesPerView: 1,
    lazy: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
  }

  // 加入購物車
  const updateCartToLocalStorage = (value) => {
    // const Memberman = JSON.parse(localStorage.getItem('memberData'))|| []
    // console.log(Memberman)
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []
    const newCart = [...currentCart, value]
    localStorage.setItem('cart', JSON.stringify(newCart))

    setcartchange(newCart);
  }
  
  // 加入最愛
  const currentLove = JSON.parse(localStorage.getItem('love')) || []
  const updateLoveToLocalStorage = (value) => {
    const newcLove = [...currentLove, value]
    localStorage.setItem('love', JSON.stringify(newcLove))

    currentLove.map(element => {
      if(element.itemName === value.itemName){
        window.localStorage.setItem('love', JSON.stringify(currentLove));
        message.warning(`商品"${element.itemName}"重複了`)
        return 
      }
    });

    setlovechange(newcLove)

  }

  // 加入比較
  const updateCompareToLocalStorage = (value) => {
    const currentCompare = JSON.parse(localStorage.getItem('compare')) || []
    const newcCompare = [...currentCompare, value]
    localStorage.setItem('compare', JSON.stringify(newcCompare))
    
    currentCompare.map(element => {
      if(element.itemName === value.itemName){
        window.localStorage.setItem('compare', JSON.stringify(currentCompare));
        message.warning(`商品"${element.itemName}"重複了`)
        return 
      }
    });
    
    setcompareschange(newcCompare)
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
                  <h1>{detailitems.itemName}</h1>
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
                    <div 
                      className="items-cart-btn items-btn-margin"
                      onClick={() => {
                        message.success(`商品"${detailitems.itemName}"加入購物車`)
                        updateCartToLocalStorage({
                            id: detailitems.itemId,
                            itemName:detailitems.itemName,
                            itemBrand:detailitems.itemsbrand,
                            itemImg:detailitems.itemImg,
                            itemPrice:detailitems.itemPrice,
                            amount:1,
                        })
                      }}
                    >
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
                    <div 
                      className="items-wish-btn items-btn-margin"
                      onClick={() => {
                        message.success(`商品"${detailitems.itemName}"加入最愛`)
                        updateLoveToLocalStorage({
                          itemid: detailitems.itemId,
                          itemName:detailitems.itemName,
                          itemBrand: detailitems.itemsbrand,
                          itemImg: detailitems.itemImg,
                          itemPrice: detailitems.itemPrice,
                          created_at: detailitems.created_at,
                          itemQty: detailitems.itemQty,
                          itemsEndurance: detailitems.itemsEndurance,
                          itemsSensitivity: detailitems.itemsSensitivity,
                          itemsales: detailitems.itemsales,
                          itemsconnect: detailitems.itemsconnect,
                          itemscontent: detailitems.itemscontent,
                          itemsdrive: detailitems.itemsdrive,
                          itemsfeature: detailitems.itemsfeature,
                          itemsfrequency: detailitems.itemsfrequency,
                          itemsmains: detailitems.itemsmains,
                          itemsstar: detailitems.itemsstar,
                          itemstoreNumber: detailitems.itemstoreNumber,
                          itemstype: detailitems.itemstype,
                          itemswatertight: detailitems.itemswatertight,
                          itemsweight: detailitems.itemsweight
                        })
                      }}
                    >
                      <span className="iconfont icon-like"></span>
                      <span className="items-wish-text">加入最愛</span>
                    </div>
                    <div 
                      className="items-wish-com items-btn-margin"
                      onClick={() => {
                        message.success(`商品"${detailitems.itemName}"加入比較`)
                        updateCompareToLocalStorage({
                          itemid: detailitems.itemId,
                          itemName:detailitems.itemName,
                          itemBrand: detailitems.itemsbrand,
                          itemImg: detailitems.itemImg,
                          itemPrice: detailitems.itemPrice,
                          created_at: detailitems.created_at,
                          itemQty: detailitems.itemQty,
                          itemsEndurance: detailitems.itemsEndurance,
                          itemsSensitivity: detailitems.itemsSensitivity,
                          itemsales: detailitems.itemsales,
                          itemsconnect: detailitems.itemsconnect,
                          itemscontent: detailitems.itemscontent,
                          itemsdrive: detailitems.itemsdrive,
                          itemsfeature: detailitems.itemsfeature,
                          itemsfrequency: detailitems.itemsfrequency,
                          itemsmains: detailitems.itemsmains,
                          itemsstar: detailitems.itemsstar,
                          itemstoreNumber: detailitems.itemstoreNumber,
                          itemstype: detailitems.itemstype,
                          itemswatertight: detailitems.itemswatertight,
                          itemsweight: detailitems.itemsweight
                        })
                      }}
                    >
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
