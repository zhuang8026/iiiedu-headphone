import React, { useEffect,useState } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { withRouter, Link } from 'react-router-dom';
import Aboutimg from '../../../assets/img/About/A01.jpg'
import Aboutimg2 from '../../../assets/img/About/A02.jpg'
import Aboutimg3 from '../../../assets/img/About/A07.jpg'
import Aboutimg4 from '../../../assets/img/About/A04.jpg'
import Aboutimg5 from '../../../assets/img/About/wearing.jpg'
import Aboutimg6 from '../../../assets/img/About/A05.jpg'
//antd
// import { message } from 'antd';

function AboutHeader(props) {
  const params = {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
  },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
   
  }

  return (
    <div className="WiHeader">
      <Swiper {...params}>
      <div><img className="Wiheaderimg" src={Aboutimg}></img>
      <div><img  src={Aboutimg4}></img></div>
      <h1>About us</h1>
      </div>
       <div><img  className="Wiheaderimg" src={Aboutimg2}></img>
       <div><img src={Aboutimg5}></img></div>
       <h1>About us</h1>
       </div>
       <div id="Aboutimg3">
       <img className="Wiheaderimg" src={Aboutimg3}></img>
       <div><img src={Aboutimg6} className="WiRWD"></img></div>
       <h1>About us</h1>
       </div>
  </Swiper>
    </div>

 


  )
}
export default withRouter(AboutHeader)
