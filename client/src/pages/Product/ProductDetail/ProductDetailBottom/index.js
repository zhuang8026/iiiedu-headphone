// 函式元件
import React from 'react';
import {withRouter} from 'react-router-dom'

import { notification } from 'antd';


function ProductDetailBottom(props) {

  const openProductDetailBottom = type => {
    notification[type]({
      message: '優惠卷權限消息',
      description:
        '您已經是本站會員，請請用 "MFEE0706NICE" 優惠碼',
    });
  };
  return (
    <div className="ProductDetailBottom">
      1
    </div>
  )

};
export default withRouter(ProductDetailBottom)
