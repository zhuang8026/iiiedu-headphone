import React, { useEffect,useState } from 'react';

import { withRouter, Link } from 'react-router-dom';
import Aboutimg from '../../../assets/img/About/A01.jpg'
import brand1 from '../../../assets/img/sony.png'
import brand2 from '../../../assets/img/shure.png'
import brand3 from '../../../assets/img/SEN.png'
import brand4 from '../../../assets/img/akg.png'
import brand5 from '../../../assets/img/GRADO.png'
import brand6 from '../../../assets/img/at.png'
import brand7 from '../../../assets/img/b&O.png'
import brand8 from '../../../assets/img/beat.png'

function ClientInside(props) {

     
    
  
    return (
   <>
  <div className="Wicooperate">
   <div className="WiBrand">
      <div className="Wicopic">
        <img src={brand1}></img>
      </div>
      <div className="Wicoinner">
        <p>索尼公司是世界上民用/專業視聽產品、游戲產品、通訊產品和信息技術等領域的先導之一。</p>
      </div>
   </div>
   <div className="WiBrand">
      <div className="Wicopic">
        <img src={brand2}></img>
      </div>
      <div className="Wicoinner">
        <p>索尼公司是世界上民用/專業視聽產品、游戲產品、通訊產品和信息技術等領域的先導之一。</p>
      </div>
   </div>
   <div className="WiBrand">
      <div className="Wicopic">
        <img src={brand3}></img>
      </div>
      <div className="Wicoinner">
        <p>索尼公司是世界上民用/專業視聽產品、游戲產品、通訊產品和信息技術等領域的先導之一。</p>
      </div>
   </div>
   <div className="WiBrand">
      <div className="Wicopic">
        <img src={brand4}></img>
      </div>
      <div className="Wicoinner">
        <p>索尼公司是世界上民用/專業視聽產品、游戲產品、通訊產品和信息技術等領域的先導之一。</p>
      </div>
   </div>
   <div className="WiBrand">
      <div className="Wicopic">
        <img src={brand5}></img>
      </div>
      <div className="Wicoinner">
        <p>索尼公司是世界上民用/專業視聽產品、游戲產品、通訊產品和信息技術等領域的先導之一。</p>
      </div>
   </div>
   <div className="WiBrand">
      <div className="Wicopic">
        <img src={brand6}></img>
      </div>
      <div className="Wicoinner">
        <p>索尼公司是世界上民用/專業視聽產品、游戲產品、通訊產品和信息技術等領域的先導之一。</p>
      </div>
   </div>
   <div className="WiBrand">
      <div className="Wicopic">
        <img src={brand7}></img>
      </div>
      <div className="Wicoinner">
        <p>索尼公司是世界上民用/專業視聽產品、游戲產品、通訊產品和信息技術等領域的先導之一。</p>
      </div>
   </div>
   <div className="WiBrand">
      <div className="Wicopic">
        <img src={brand8}></img>
      </div>
      <div className="Wicoinner">
        <p>索尼公司是世界上民用/專業視聽產品、游戲產品、通訊產品和信息技術等領域的先導之一。</p>
      </div>
   </div>





   
  </div>
  
   
  </>
    )
  }
  export default withRouter(ClientInside)