// 函式元件
import React from 'react';
import {withRouter} from 'react-router-dom'

import { notification } from 'antd';


function ProductDetailBtn(props) {

  // 點擊 新增優惠卷
  const openProductDetailBottom = type => {
    notification[type]({
      message: '優惠卷權限消息',
      description:
        '您已經是本站會員，請請用 "MFEE0706NICE" 優惠碼',
    });
    localStorage.setItem('code',JSON.stringify({
      "code": "MFEE0706NICE",
      "discount": 0.9
    }))
  };
  return (
    <div 
      className="codeCard"
      onClick={()=>{
          openProductDetailBottom('success')
      }}
    >
      <div className="card">
        <input className="h2" type="text" defaultValue="MFEE0706NICE"/>
        <i className="fas fa-arrow-right"></i>
        <p>Discount code copy!</p>
        <div className="pic"></div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        {/* <div className="social">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-github"></i>
        </div> */}
        <button>
        </button>
      </div>
    </div>
  )

};
export default withRouter(ProductDetailBtn)
