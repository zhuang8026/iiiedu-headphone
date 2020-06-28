import React, { useEffect,useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
// import Aboutimg from '../../../assets/img/About/A01.jpg'
//antd
// import { message } from 'antd';

function GiftAbout() {
  
  

  return ( <>
<div className="AboutgiftCrumb">
<Link to="/">首頁</Link>/  <Link to="/WiGift">禮物卡</Link>
</div>
<div className="AboutGiftCard">
  <h1>關於禮物卡</h1>

  <div>
   <p>
  Otis的禮物卡內含購物金，只要在結帳時，輸入卡片上方的號碼便可抵扣等值消費金額，<br></br>
  一共有3000、6000、9000三種面額。
   </p>
  </div>

</div>



 

</>
  )
}
export default withRouter(GiftAbout)
