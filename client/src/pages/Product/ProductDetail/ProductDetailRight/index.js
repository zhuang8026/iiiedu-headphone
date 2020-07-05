// 函式元件
import React, { useState } from 'react'
import {withRouter} from 'react-router-dom'

//antd
import { message } from 'antd';

function ProductDetailRight(props) {
  const {setlovechange, setcompareschange, setcartchange} = props;
  const [total, setTotal] = useState(1);
  const {detaildata} = props;
  
  // 加入購物車
  const updateCartToLocalStorage = (value) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []
    const newCart = [...currentCart, value]
    localStorage.setItem('cart', JSON.stringify(newCart))

    setcartchange(newCart);
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

  return (
    <>
      <div className="YyDetailRight">
        {/* 細節內容 */}
        <div className="DetailContent">
          <h1 className="DetailName">{ detaildata.itemName }</h1>
          <p className="Detailprice DetailText"><span>價格</span> ｜ { detaildata.itemPrice }.00 NT</p>
          <p className="DetailText"><span>品牌</span> ｜ {detaildata.itemsbrand}</p>
          <p className="DetailRightText DetailText"><span>介紹</span> ｜<span className="DetailTextSapn">{ detaildata.itemName } 無線耳機是旅途中提供絕佳環繞音效的理想音樂夥伴。透過藍牙 5.0、AAC 和 AptX™ Low Latency 低延遲等最新藍牙技術的支援，{ detaildata.itemName } 提供您絕佳聆聽體驗。Sennheiser Smart Control app應用程式中的提供EQ自訂功能，同時也提供軟體更新和 podcast 模式。</span></p>
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
              <button 
                type="button" 
                className="addbtn"
                onClick={() => {
                  message.success(`商品"${detaildata.itemName}"加入比較`)
                  updateCompareToLocalStorage({
                    itemid: detaildata.itemId,
                    itemName:detaildata.itemName,
                    itemBrand: detaildata.itemsbrand,
                    itemImg: detaildata.itemImg,
                    itemPrice: detaildata.itemPrice,
                    created_at: detaildata.created_at,
                    itemQty: detaildata.itemQty,
                    itemsEndurance: detaildata.itemsEndurance,
                    itemsSensitivity: detaildata.itemsSensitivity,
                    itemsales: detaildata.itemsales,
                    itemsconnect: detaildata.itemsconnect,
                    itemscontent: detaildata.itemscontent,
                    itemsdrive: detaildata.itemsdrive,
                    itemsfeature: detaildata.itemsfeature,
                    itemsfrequency: detaildata.itemsfrequency,
                    itemsmains: detaildata.itemsmains,
                    itemsstar: detaildata.itemsstar,
                    itemstoreNumber: detaildata.itemstoreNumber,
                    itemstype: detaildata.itemstype,
                    itemswatertight: detaildata.itemswatertight,
                    itemsweight: detaildata.itemsweight
                  })
                }}
              >加入比較</button>
              <button 
                type="button" 
                className="addbtn"
                onClick={() => {
                  message.success(`商品"${detaildata.itemName}"加入最愛`)
                  updateLoveToLocalStorage({
                    itemid: detaildata.itemId,
                    itemName:detaildata.itemName,
                    itemBrand: detaildata.itemsbrand,
                    itemImg: detaildata.itemImg,
                    itemPrice: detaildata.itemPrice,
                    created_at: detaildata.created_at,
                    itemQty: detaildata.itemQty,
                    itemsEndurance: detaildata.itemsEndurance,
                    itemsSensitivity: detaildata.itemsSensitivity,
                    itemsales: detaildata.itemsales,
                    itemsconnect: detaildata.itemsconnect,
                    itemscontent: detaildata.itemscontent,
                    itemsdrive: detaildata.itemsdrive,
                    itemsfeature: detaildata.itemsfeature,
                    itemsfrequency: detaildata.itemsfrequency,
                    itemsmains: detaildata.itemsmains,
                    itemsstar: detaildata.itemsstar,
                    itemstoreNumber: detaildata.itemstoreNumber,
                    itemstype: detaildata.itemstype,
                    itemswatertight: detaildata.itemswatertight,
                    itemsweight: detaildata.itemsweight
                  })
                }}
              >加入最愛</button>
              <button 
                type="button" 
                className="addbtn"
                id={detaildata.itemId}
                  onClick={() => {
                    message.success(`商品"${detaildata.itemName}"加入購物車`)
                    updateCartToLocalStorage({
                        id: detaildata.itemId,
                        itemName: detaildata.itemName,
                        itemBrand: detaildata.itemsbrand,
                        itemImg: detaildata.itemImg,
                        itemPrice: detaildata.itemPrice,
                        amount:1,
                    })
                  }}
              >加入購物車</button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}
export default withRouter(ProductDetailRight)
