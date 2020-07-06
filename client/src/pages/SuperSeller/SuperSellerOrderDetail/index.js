// // 函式元件
// import React from 'react';
// import { Link, withRouter } from 'react-router-dom';

// // Swiper
// import Swiper from 'react-id-swiper';

// //antd
// import { message } from 'antd';

// function SuperSellerOrderDetail(props) {
//   const { orderdetailitems,detailitems, setlovechange, setcompareschange, setcartchange} = props;
//   console.log(orderdetailitems)
//   const params = {
//     slidesPerView: 1,
//     lazy: true,
//     pagination: {
//         el: '.swiper-pagination',
//         type: 'fraction',
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev'
//     }
//   }


//   return (
//     <div className="orders-quick-view-modal">
//       <div className="orders-quick-view-overlay">我是遮罩層</div>
//       <div className="orderss-wrapper">
//         <div className="orders-main">
//           <div className="orders-close-head">
//             <div className="orders-close"><span className="iconfont icon-error"></span></div>
//           </div>
//           <div className="orders-product" id="items-product-view">
//             <div className="orders-inner">
//               <div id="orders-simple">
//                 <div className="orders-img">
//                 </div>
//                 <div className="items-content">
//                   <h1>{orderdetailitems.itemName}</h1>
//                   <p className="items-price">$ {orderdetailitems.checkPrice}</p>
//                   <p className="items-text">{orderdetailitems.checkQty}</p>
//                   <p className="items-text">品牌 ｜ {orderdetailitems.itemsbrand}</p>
//                   <p className="items-text">購買數量 ｜ {orderdetailitems.checkQty}</p>
//                   <p className="items-text">單體驅動 ｜ {orderdetailitems.itemsdrive}</p>
//                   <p className="items-text">頻率響應 ｜ {orderdetailitems.itemsfrequency}</p>
//                   <p className="items-text">靈敏度 ｜ {orderdetailitems.itemsSensitivity}</p>
//                   <p className="items-text">連接端子 ｜ {orderdetailitems.itemsconnect}</p>
//                   <p className="items-text">電源 ｜ {orderdetailitems.itemsmains}</p>
//                   <p className="items-text">電池續航力 ｜ {orderdetailitems.itemsEndurance}</p>
//                   <p className="items-text">防水性 ｜ {orderdetailitems.itemswatertight}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default withRouter(SuperSellerOrderDetail)
