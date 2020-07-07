import React, { useEffect,useState } from 'react';


import { withRouter, Link } from 'react-router-dom';



function WiProblemcenter(props) {
 useEffect(()=>{
let Wiq = document.querySelectorAll('.wiQ');
let WiA = document.querySelectorAll('.WiA');
var i;
console.log(Wiq[1])
Wiq[0].addEventListener('click',()=>{
    WiA[0].classList.toggle('Wiappear');
})
Wiq[1].addEventListener('click',()=>{
    WiA[1].classList.toggle('Wiappear');
})
Wiq[2].addEventListener('click',()=>{
    WiA[2].classList.toggle('Wiappear');
})
Wiq[3].addEventListener('click',()=>{
    WiA[3].classList.toggle('Wiappear');
})
Wiq[4].addEventListener('click',()=>{
    WiA[4].classList.toggle('Wiappear');
})
Wiq[5].addEventListener('click',()=>{
    WiA[5].classList.toggle('Wiappear');
})
},[])




    return (
        
  <div className="commonquestion">
      <ul>
            <li>
                <div className="wiQ">
                搬不動家具怎麼半 <span class="iconfont icon-down_3"></span>
                </div>
                <div className="WiA">
                大部份的商品都是平整包裝，你可以在商品頁面找到包裝的尺寸大小、重量等相關資訊，方便你在購買後自己搬回家，同時省下更多費用。
                </div>
            </li>
            <li>
                <div className="wiQ">
                我需要退換貨 <span class="iconfont icon-down_3"></span>
                </div>
                <div className="WiA">
                在 Otis，如果你對於購買的產品不滿意，你可在 365 天內，攜帶完好的商品、原始包裝、統一發票及明細（刷卡購買者需信用卡與簽單）到 Otis 分店退換貨。完整退換貨資訊請點選這裡。 或是你也可以與Otis客服連繫確認，請點選這裡確認各分店連絡方式。
                </div>
            </li>
            <li>
               <div className="wiQ">
                我想知道我需要的貨品有沒有貨 <span class="iconfont icon-down_3"></span>
                </div>
                <div className="WiA">
                在點入商品的詳細介紹頁面後，你可以使用查詢貨況功能確認想購買商品之貨況，你也可以致電給各分店詢問。
                </div>
            </li>
            <li>
               <div className="wiQ">
                禮物卡有儲值限制嗎 <span class="iconfont icon-down_3"></span>
                </div>
                <div className="WiA">
                是的，每張禮物卡每次儲值最少 100 元，最多 10,000 元。但不限制儲值次數。
                </div>
            </li>
            <li>
               <div className="wiQ">
                購買的東西缺了配件如何處理 <span class="iconfont icon-down_3"></span>
                </div>
                <div className="WiA">
                若你購買的商品發生缺少配件的情況，請聯繫客服人員，並提供購買資訊以確認缺失配件型號，我們將後續為你安排郵寄配件或者更換配件的服務。
                </div>
            </li>
            <li className="WiQuestion">
               <div className="wiQ">
                我的個人資料安全嗎 <span class="iconfont icon-down_3"></span>
                </div>
                <div className="WiA">
                對於你的個人資料，Otis 線上購物將遵守「個人資料保護法」相關規範，依據國家法令標準進行網路安全監控作業，確保你的資料安全和隱私權不被侵犯，你亦可以參考
                </div>
            </li>
      </ul>
     
  </div>
  

  
  
    )     
}
  
  export default withRouter(WiProblemcenter)