// // 函式元件
// import React, { useEffect, useState } from 'react';

// import { withRouter } from 'react-router-dom';
// //antd
// import { message } from 'antd';

// import Swiper from 'react-id-swiper';
// import a from '../../assets/img/bg_6p_1.png'

//     const params = {
//         slidesPerView: 4,
//         spaceBetween: 10,
//         // freeMode: true,
//         lazy: true,
//         loop: true,
//         // pagination: {
//         //     el: '.swiper-pagination',
//         //     type: 'fraction',
//         //     clickable: true,
//         // },
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev'
//         },
//     }

// function CompareMain(props) {
//     //   const [mycart, setMycart] = useState([])
//     //   const [dataLoading, setDataLoading] = useState(false)
//     //   const updateCompareToLocalStorage = (value) => {
//     //     // 開啟載入指示
//     //     //setDataLoading(true)
//     //     const Memberman = JSON.parse(localStorage.getItem('memberData'))|| []
//     //     console.log(Memberman)
//     //     const currentCart = JSON.parse(localStorage.getItem('cart')) || []
//     //     const newCart = [...currentCart, value]
//     //     localStorage.setItem('cart', JSON.stringify(newCart))
//     //   }


//     const { itemsdata, setItemsdata, itemsid, setItemsid } = props;

//     console.log('itemsid:', itemsid) // text button id 



//     // const goToDetail = (id) => {
//     //     fetch(`http://localhost:3009/products/detail/${id}`, {
//     //         method: 'get',
//     //         headers: new Headers({
//     //             'Accept': 'application/json',
//     //             'Content-Type': 'application/json',
//     //         })
//     //     })
//     //         .then((res) => {
//     //             return res.json()
//     //         })
//     //         .then((res) => {
//     //             console.log(res)
//     //             // setUserdata(res[0]);
//     //             // console.log(userdata);
//     //         })
//     // }

//     // useEffect(() => {
//     //     goToDetail(itemsid)
//     //     fetch('http://localhost:3009/products/listpage/1', {
//     //         method: 'get',
//     //         headers: new Headers({
//     //             'Accept': 'application/json',
//     //             'Content-Type': 'application/json',
//     //         }),
//     //     })
//     //         .then((response) => {
//     //             return response.json()
//     //         })
//     //         .then((response) => {
//     //             console.log(response.rows)
//     //             setItemsdata(response.rows)
//     //         })
//     // }, [])

//     // const onChange = (event) => {
//     //   console.log('radio checked', event.target.value)
//     // }

//     return (
//         <>
//             <div className="Yybodyin">
//                 <div className="true_items">

//                         <div className="true_items_inner">
//                             <div className="true_items_card swiper-lazy">
//                                 <h3>RS2e</h3>
//                                 <a>
//                                     <img src={a} alt="商品列表" />
//                                 </a>
//                                 <ul>
//                                     <li><i className="iconfont icon-correct"></i>非常適合運動</li>
//                                     <li><i className="iconfont icon-correct"></i>電池續航時間長達 15 小時 *</li>
//                                     <li><i className="iconfont icon-correct"></i>運動傳感器</li>
//                                     <li><i className="iconfont icon-correct"></i>防汗防塵</li>
//                                     <button  onClick={(e)=>{props.history.push(`/detail/${e.target.id}`)}}>more</button>
//                                 </ul>
//                             </div>
//                         </div>

//                 </div>

//                 {/* <div className="Yybrand">
//                     <div className="Yywearstyle">配戴方式</div>
//                     <ul>
//                         <li>
//                             <input id='check-2' type="checkbox" name='check-1' />
//                             <label for="check-2">入耳</label>
//                         </li>
//                         <li>
//                             <input id='check-3' type="checkbox" name='check-1' />
//                             <label for="check-3">非入耳</label>
//                         </li>
//                         <li>

//                         </li>
//                     </ul>
//                 </div> */}
//                 </div>

//                 <div className="Yysubmit">
//                     <button className="btn" type="button">
//                         送出勾選資料
//             </button>
//                 </div>
//                 <div className="Yysearch_container">
//                     {/* <span class="iconfont icon-search"></span> */}
//                     <input type="text" placeholder=" search..." />
//                 </div>
//             {/* </div>
//             </div> */}
//             <div className="Yybodyright">
//                 <div className="Yybodyheader">
//                     <span>一共12筆結果</span>
//                     <select className="Yyorder">
//                         <option>按價格排序-由高到低</option>
//                         <option>按價格排序-由低到高</option>
//                     </select>
//                 </div>

//                 <div className="Yyasidebody">

//                     {/* {itemsdata.map((data, index) => {
//                         // console.log(data)
//                         return (
//                             <div className="Yyaside_pro">
//                                 <div className="item_image">
//                                     <img className="item_images" src={`/items_img/${data.itemImg}`} />
//                                     <div className="item_imagebtnout">
//                                         <button className="item_imagebtn btn"
//                                             id={data.itemId}
//                                         //    onClick={() => {
//                                         //    updateCartToLocalStorage({
//                                         //       id: `${data.itemId}`,
//                                         //       itemName:`${data.itemName}`,
//                                         //       itemBrand:`${data.itemsbrand}`,
//                                         //       itemImg:`${data.itemImg}`,
//                                         //       itemPrice:`${data.itemPrice}`,
//                                         //       amount:1,
//                                         //        })
//                                         //     }}
//                                         >
//                                             加入購物車</button>
//                                         <button
//                                             className="item_imagebtn2 btn"
//                                             id={data.itemId}
//                                             onClick={e => {
//                                                 setItemsid(e.target.id)
//                                                 goToDetail(e.target.id)
//                                                 props.history.push(`/ProductDetail/${e.target.id}`)
//                                             }}
//                                         >立即查看</button>
//                                     </div>
//                                 </div>
//                                 <div className="item_cover"></div>
//                                 <ul className="itemul">
//                                     <li className="pro_name">
//                                         <p>{data.itemName}</p>
//                                         <div className="pro_new">NEW</div>
//                                     </li>

//                                     <li>
//                                         <div className="pro_c"></div>
//                                     </li>
//                                 </ul>
//                                 <p> {data.itemsbrand} </p>
//                                 <p>{data.itemPrice}</p>
//                             </div>
//                         )
//                     })} */}


//                     {/* <div class="Yypagination">
//               <Pagination simple defaultCurrent={2} total={50} />
//             </div> */}
//                 </div>
//             </div>
//         {/* </div> */}
//     </>
//   )
// }
// export default withRouter(CompareMain)
