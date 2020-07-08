import React, { useEffect,useState } from 'react';

import { withRouter, Link } from 'react-router-dom';
import Aboutimg from '../../../assets/img/About/A01.jpg'
import brand1 from '../../../assets/img/sony.png'
import brand2 from '../../../assets/img/shure.png'
import brand3 from '../../../assets/img/SEN.png'
import brand4 from '../../../assets/img/akg.png'
import brand5 from '../../../assets/img/apple.png'
import brand6 from '../../../assets/img/at.png'
import brand7 from '../../../assets/img/b&O.png'
import brand8 from '../../../assets/img/beat.png'

function ClientInside(props) {

     
    
  
    return (
   <>
  <div class="Wicooperate">
      <img src={brand1}></img>
      <img src={brand2}></img>
      <img src={brand3}></img>
      <img src={brand4}></img>
      <img src={brand5}></img>
      <img src={brand6}></img>
      <img src={brand7}></img>
      <img src={brand8}></img>
  </div>
   
  </>
    )
  }
  export default withRouter(ClientInside)