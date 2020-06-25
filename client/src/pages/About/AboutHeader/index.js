import React, { useEffect,useState } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { withRouter, Link } from 'react-router-dom';
import Aboutimg from '../../../assets/img/About/A01.jpg'
import Aboutimg2 from '../../../assets/img/About/A02.jpg'
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
      <div><img src={Aboutimg}></img>
      <h1>About us</h1>
      </div>
       <div><img src={Aboutimg2}></img>
       <h1>About us</h1>
       </div>
  </Swiper>
    </div>

 


  )
}
export default withRouter(AboutHeader)
