// 函式元件
import React, { useState } from 'react'
import {withRouter, Link} from 'react-router-dom'

import ProductDetailBtn from '../ProductDetailBtn'

function ProductDetailRight(props) {
  const [total, setTotal] = useState(1);
  const {detaildata} = props;
  let memberdatacallback = localStorage.getItem('memberData');

  return (
    <>
      <div className="YyDetailRight">
        {/* 細節內容 */}
        <div className="DetailContent">
          <h1 className="DetailName">{ detaildata.itemName }</h1>
          <p className="Detailprice DetailText"><span>價格</span> ｜ { detaildata.itemPrice }.00 NT</p>
          <p className="DetailText"><span>品牌</span> ｜ {detaildata.itemsbrand}</p>
          <p className="DetailRightText DetailText"><span>介紹</span> ｜{ detaildata.itemscontent }...</p>
          <p className="DetailText"><span>重量</span> ｜ {detaildata.itemsweight}</p>
          <p className="DetailText"><span>單體驅動</span> ｜ {detaildata.itemsdrive}</p>
          <p className="DetailText"><span>頻率響應</span> ｜ {detaildata.itemsfrequency}</p>
          <p className="DetailText"><span>靈敏度</span> ｜ {detaildata.itemsSensitivity}</p>
          <p className="DetailText"><span>連接端子</span> ｜ {detaildata.itemsconnect}</p>
          <p className="DetailText"><span>電源</span> ｜ {detaildata.itemsmains}</p>
          <p className="DetailText"><span>電池續航力</span> ｜ {detaildata.itemsEndurance}</p>
          <p className="DetailText"><span>防水性</span> ｜ {detaildata.itemswatertight}</p>
        </div>
        
        {/* 按鈕細節 */}
        <div className="DetailButton">
          <div className="DetailButtonInner">
            <div className="DetailButtonGroup">
              <div className="DetailButtonAdd">
                <button
                  className="DetailBtnEdit"
                  onClick={() => {
                    setTotal(total - 1)
                  }}
                > <i className="iconfont icon-reduce_1"></i> </button>
                <span>{total}</span>
                <button
                  className="DetailBtnAdd"
                  onClick={() => {
                    setTotal(total + 1)
                  }}
                > <i className="iconfont icon-add_1"></i> </button>
              </div>
              <p>庫存：{ detaildata.itemQty } / 副</p>
            </div>

            <div className="DetailAddbtn">
              <button type="button" className="addbtn">加入比較</button>
              <button type="button" className="addbtn">加入最愛</button>
              <button type="button" className="addbtn">加入購物車</button>
            </div>
            <div className="DetailAddbtn">
              <h2>折扣碼</h2>
              {memberdatacallback? (
                <>
                  <ProductDetailBtn/>
                </>
              ):(
                  <Link className="DetailAddInput" type="button" to='/KMembers/MembersLogin'>請登入會員</Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default withRouter(ProductDetailRight)
