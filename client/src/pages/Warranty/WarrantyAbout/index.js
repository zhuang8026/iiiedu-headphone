import React, { useEffect,useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
// import Aboutimg from '../../../assets/img/About/A01.jpg'
//antd
// import { message } from 'antd';

function WarrantyAbout() {
  
  

  return ( <>
<div className="AboutWarrantyCrumb">
<Link to="/">首頁</Link>/  <Link to="/about/WiWarranty">保固卡</Link>
</div>
<div className="AboutWarrantyCard">
  <h1>關於保固卡</h1>

  <div>
   <p>
  Otis的禮物卡內含購物金，只要在結帳時，輸入卡片上方的號碼便可抵扣等值消費金額，<br></br>
  一共有一年、三年、五年三種面額。
   </p>
  </div>

</div>



 

</>
  )
}
export default withRouter(WarrantyAbout)