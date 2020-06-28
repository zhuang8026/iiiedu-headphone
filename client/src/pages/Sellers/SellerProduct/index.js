// import React, { Fragment,useState,useRef,useEffect } from 'react'
// import { withRouter, BrowserRouter as Router,useParams } from 'react-router-dom'

// //import components
// import LeftNav from '../Leftnav'

// //import image
// import searchImg from '../../../assets/img/seller/my-sale/search.svg'

// function SellerProduct(props) {
//   const{
//     userdata,
//     setUserdata,
//     name,
//     setName,
//     id,
//     page
//   }= props.allprops;
//   const [SellerProductData, setSellerProductData] = useState([]) 
// //reset用
//   const productSearchBar = useRef(null);
//   const startdate = useRef(null);
//   const enddate = useRef(null);
//   const minquan = useRef(null);
//   const maxquan = useRef(null);
//   const soldminquan = useRef(null);
//   const soldmaxquan = useRef(null);
//   let SellerDataInner=[];
//   // let {id} = useParams();
  
//   const handleSellerProductData = ()=>{
//     fetch("http://localhost:3009/sellers/listSellerUserProduct",{
//       method: 'post',
//       Origin: `http://localhost:3000`,
//       headers: new Headers({
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//       }),
//       body:{
//         id:userdata.id,
//         username:userdata.username
//       }
//   })
//     .then((response)=>{
//       return response.json()
//     })
//     .then((response)=>{
//       console.log('response', response.rows);
//       setSellerProductData(response.rows)
//   }
// }

//   useEffect(
//       handleSellerProductData()
//   , [userdata])


//   // const SellerProductDataFetch =()=>{
//     // fetch('http://localhost:3009/products/list',{

//   // }

//   // useEffect(()=>{
//   //   SellerProductDataFetch()
//   // },[userdata])

//  const handleReset=(e)=>{
//   document.getElementById("product-search-bar").value = "";
//   document.getElementById("startdate").value = "";
//   document.getElementById("enddate").value = "";
//   document.getElementById("minquan").value = "";
//   document.getElementById("maxquan").value = "";
//   document.getElementById("soldminquan").value = "";
//   document.getElementById("soldmaxquan").value = "";
//   }
  
//   return (
//     <Router>
//       <Fragment>
//         <div>
//           <div className="h-100"></div>
//           <span className="breadcrumb">
//             首頁 &nbsp;/ 訂單管理/ &nbsp;我的訂單
//           </span>
//           <div className="seller-container">
//             <LeftNav />
//             <div className="seller-w100-main">
//               <div className="seller-myproduct">
//                 <div className="w-90">
//                   <div className="seller-toggle">
//                     <div>全部</div>
//                     <div>架上商品</div>
//                     <div>已售完</div>
//                     <div>未上架</div>
//                   </div>
//                   <form id="seller-product-form" className="seller-form" action="" method="post">
//                     <div className="product-wrapper">
//                       <div className="search-wrapper">
//                         <div className="product-search">
//                           <input
//                             className="product-search-bar"
//                             id="product-search-bar"
//                             type="text"
//                             name="search"
//                             placeholder="搜尋訂單"
//                             alt=""
//                           />
//                           <img
//                             className="product-search-img icon-size"
//                             src={searchImg}
//                             alt=""
//                           />
//                         </div>
//                       </div>
//                       <div className="product-createdate">
//                         <label htmlFor="createdate">訂單成立時間</label>
//                         <input type="date" id="startdate" ref={startdate} />
//                         &nbsp;-&nbsp;
//                         <input type="date" id="enddate" ref={enddate} />
//                         <button className="seller-btn seller-exportbtn">
//                           匯出
//                         </button>
//                       </div>

//                       <div className="seller-quantity">
//                         <label>商品數量</label>
//                         <input type="text" id="minquan" placeholder="請輸入" ref={minquan} />
//                         &nbsp;-&nbsp;
//                         <input type="text" id="maxquan" placeholder="請輸入" ref={maxquan} />
//                       </div>
//                       <div className="seller-soldproduct">
//                         <label>已售出</label>
//                         <input
//                           type="text"
//                           id="soldminquan"
//                           placeholder="請輸入"
//                           ref={soldminquan}
//                         />
//                         &nbsp;-&nbsp;
//                         <input
//                           type="text"
//                           id="soldmaxquan"
//                           placeholder="請輸入"
//                           ref={soldmaxquan}
//                         />
//                       </div>
//                     </div>
//                     <div className="seller-btnset">
//                       <button type="reset" onClick={handleReset} className="seller-btn-style seller-resetbtn">
//                         重置
//                       </button>
//                       <button type="submit" className="seller-btn-style seller-searchbtn">
//                         搜尋
//                       </button>
//                     </div>
//                   </form>
//                   <div className="seller-item-wrapper">
//                     <h1>0項商品</h1>
//                     <div className="seller-btnset">
//                       <button className="seller-btn-style seller-addproduct">
//                         新增商品
//                       </button>
//                       <button className="seller-btn-style seller-addtool">
//                         批次工具
//                       </button>
//                     </div>
//                   </div>
//                   <div className="product-table">
//                     <table className="product-seller-table">
//                       <thead>
//                         <tr>
//                           <th>
//                             <input
//                               type="checkbox"
//                               name="selectAll"
//                               id="seller-selectAll"
//                             />
//                           </th>
//                           <th>商品名稱</th>
//                           <th>商品選項貨號</th>
//                           <th>規格</th>
//                           <th>價格</th>
//                           <th>商品數量</th>
//                           <th>已售出</th>
//                           <th>操作</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                       {SellerProductData.map((data,index)=>{
//                           return(
//                             <>
//                               <tr>
//                               <td><input type="checkbox" /></td>
//                               <td>{data.itemName}</td>
//                               <td>{data.itemId}</td>
//                               <td>{data.itemstype}</td>
//                               <td>{data.itemPrice}</td>
//                               <td>{data.itemQty}</td>
//                               <td>{data.itemsales}</td>
//                               <td></td>
//                             </tr>
//                             </>
//                           )
//                         })}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Fragment>
//     </Router>
//   )
// }

// export default withRouter(SellerProduct)
