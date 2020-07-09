import React, { useEffect,useState } from 'react';

import { withRouter, Link } from 'react-router-dom';
import Aboutimg4 from '../../../assets/img/About/BRAND.png'
import Aboutimg5 from '../../../assets/img/About/ques.jpg'
import Aboutimg6 from '../../../assets/img/About/A06.jpg'
import BlogA1 from '../../../assets/img/About/BlogA1.jpg'
//antd
// import { message } from 'antd';

function AboutIntroduce(props) {


  return (
    <>
    <div className="Aboutcrumb">
    <Link to="/">首頁</Link>/  <Link to="/WiAbout">關於我們</Link>
    </div>
 <div className="WiIntroduce">
 <p>
 我們團隊整合了跨品牌的資訊，並且將買家、賣家以及產品的庫存之間的關聯進行數據分析，讓消費者能夠快速了解產品的差異性並找出符合自己需求的產品。 <br></br>
 {/* <Link to="/WiOurClients">我們的合作客戶</Link> */}
 </p>

 <div className="Introduce_pic">
 <a href="/about/WiOurClients"><img src={Aboutimg4}></img></a>
 <a href="/about/WiProblem"><img src={Aboutimg5}></img></a>
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
