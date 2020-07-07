import React, { useEffect,useState } from 'react';

import { withRouter, Link } from 'react-router-dom';
import picja from '../../../assets/img/japen.jpg'
import pictw from '../../../assets/img/tw.jpg'
import pickoa from '../../../assets/img/koa.jpg'
import picusa from '../../../assets/img/usa.jpg'
import { CommentOutlined } from '@ant-design/icons';
function Connectus() {
  


  return ( <>
  <div className="AboutWarrantyCrumb">

<Link to="/">首頁</Link>/  <Link to="/about/WiConnect">聯絡方式</Link>
</div>

  <div className="WiconnectUs">
  <CommentOutlined style={{ fontSize: '46px', color: '#08c' }}/>
  <br></br>
 <p >
     需要協助？有任何問題？歡迎先看看我們的【常見問題】，為你快速解答！
關於商品及服務相關問題，可透過客服專線或客服信箱聯繫原購買之OTIS分店，我們將盡速提供協助！<br></br>
Otis客服專線 412-8869 (手機用戶，需加上02)

 </p>
  </div>
   <div className="shopphone">
     <div className="shopphoneinner">
        <img src={picja}></img>
        <div className="shopperphoneinner">
             <h1>Otis台北本店</h1>
            <p>
            專線: 412-8869 #7<br></br>
            E-mail: serviceXDS@Otis.com.tw
            </p>
            <h1>Otis左營分店</h1>
            <p>
            專線: 412-8869 #7<br></br>
            E-mail: serviceXDS@Otis.com.tw
            </p>
        </div>
       
     </div>
     <div className="shopphoneinner">
        <img src={pictw}></img>
        <div className="shopperphoneinner">
             <h1>Otis東京本店</h1>
            <p>
            專線: 412-8869 #7<br></br>
            E-mail: serviceXDS@Otis.com.tw
            </p>
            <h1>Otis大阪分店</h1>
            <p>
            專線: 412-8869 #7<br></br>
            E-mail: serviceXDS@Otis.com.tw
            </p>
        </div>
     </div>
     <div className="shopphoneinner">
        <img src={pickoa}></img>
        <div className="shopperphoneinner">
             <h1>Otis首爾本店</h1>
            <p>
            專線: 412-8869 #7<br></br>
            E-mail: serviceXDS@Otis.com.tw
            </p>
            <h1>Otis釜山分店</h1>
            <p>
            專線: 412-8869 #7<br></br>
            E-mail: serviceXDS@Otis.com.tw
            </p>
        </div>
     </div>
     <div className="shopphoneinner">
        <img src={picusa}></img>
        <div className="shopperphoneinner">
             <h1>Otis紐約本店</h1>
            <p>
            專線: 412-8869 #7<br></br>
            E-mail: serviceXDS@Otis.com.tw
            </p>
            <h1>Otis俄亥俄分店</h1>
            <p>
            專線: 412-8869 #7<br></br>
            E-mail: serviceXDS@Otis.com.tw
            </p>
        </div>
     </div>
   </div>
   <div className="Wicallus">
   <h1>客服專線/客服信箱 服務時間</h1>
   <p>分店客服：週一至週日 10:00 - 21:00
    <br></br>線上購物：週一至週日 09:00 - 18:00</p>
   </div>
</>
  )
}
export default withRouter(Connectus)