import React, { useEffect,useState } from 'react';

import { withRouter, Link } from 'react-router-dom';
import Aboutimg4 from '../../../assets/img/About/A04.jpg'
import Aboutimg5 from '../../../assets/img/About/A05.jpg'
import Aboutimg6 from '../../../assets/img/About/A06.jpg'
import BlogA1 from '../../../assets/img/About/BlogA1.jpg'
//antd
// import { message } from 'antd';

function AboutIntroduce(props) {


  return (
    <>
 <div className="WiIntroduce">
 <p>
 我們與每一位滿懷理想的人徜徉在音樂的海洋裡。
 你可以帶著我們的耳機，聽著你最喜歡的音樂去欣賞大自然做所有你喜歡的事情並享受人生的旅程。
 <br></br>
 我們團隊整合了跨品牌的資訊，並且將買家、賣家以及產品的庫存之間的關聯進行數據分析，讓消費者能夠快速了解產品的差異性並找出符合自己需求的產品。

 </p>
 <div className="Introduce_pic">
<img src={Aboutimg4}></img>
<img src={Aboutimg5}></img>
 </div>

 </div>
 <div className="Introduce_fashion">
<img src={Aboutimg6}></img>
<p>讓聽音樂變成一個很fashion的事情</p>
 </div>
<div className="Introduce_way">
<img src={BlogA1}></img>
<div>
    <p className="Wipway">任何場景</p>
<p>都能與朋友同樂<br></br>
當朋友希望你把音響調大聲一點，基本上他已經認同了你的品味。
</p>
</div>

</div>
  
    </>
  )
}
export default withRouter(AboutIntroduce)
