// 函式元件
import React from 'react';
import {Link, withRouter} from 'react-router-dom'

import ProductDetailBtn from '../ProductDetailBtn'

// import { notification } from 'antd';


function ProductDetailBottom(props) {
  const {detaildata} = props;
  let memberdatacallback = localStorage.getItem('memberData');

  return (
    <div className="ProductDetailBottom">
      <div className="ProductDetailBottomLeft">
        <h2>產品特色</h2>
        <div className="BottomDetailTextInner">
          <div className="BottomDetailText">
            <p className="DetailText"><span>品牌</span> ｜ {detaildata.itemsbrand}</p>
            <p className="DetailText"><span>重量</span> ｜ {detaildata.itemsweight}</p>
            <p className="DetailText"><span>單體驅動</span> ｜ {detaildata.itemsdrive}</p>
            <p className="DetailText"><span>頻率響應</span> ｜ {detaildata.itemsfrequency}</p>
            <p className="DetailText"><span>靈敏度</span> ｜ {detaildata.itemsSensitivity}</p>
            <p className="DetailText"><span>連接端子</span> ｜ {detaildata.itemsconnect}</p>
            <p className="DetailText"><span>電源</span> ｜ {detaildata.itemsmains}</p>
            <p className="DetailText"><span>電池續航力</span> ｜ {detaildata.itemsEndurance}</p>
            <p className="DetailText"><span>防水性</span> ｜ {detaildata.itemswatertight}</p>
          </div>
          <div className="BottomDetailImg">
            <img src={`/items_img/${detaildata.multiple_Image02}`}/>
            <img src={`/items_img/${detaildata.multiple_Image03}`}/>
          </div>
        </div>
      </div>
      <div className="ProductDetailBottomRight">
        <div className="DetailAddbtn">
          <h2>新折扣碼</h2>
          <div className="BottomDetailCard">
            {memberdatacallback? (
              <>
                <ProductDetailBtn/>
                <ProductDetailBtn/>
                <ProductDetailBtn/>
                <ProductDetailBtn/>
              </>
            ):(
              <Link className="DetailAddInput" type="button" to='/KMembers/MembersLogin'>請登入會員</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )

};
export default withRouter(ProductDetailBottom)
