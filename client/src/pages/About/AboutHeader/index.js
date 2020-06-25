import React, { useEffect,useState } from 'react';

import { withRouter, Link } from 'react-router-dom';
import Aboutimg from '../../../assets/img/About/A01.jpg'
import Aboutimg2 from '../../../assets/img/About/A01.jpg'
//antd
// import { message } from 'antd';

function AboutHeader(props) {


  return (
    <>
    <div className="Aboutus_Header">
           <img src={Aboutimg}></img>  
           <h1>About us</h1>
    </div>
    </>
  )
}
export default withRouter(AboutHeader)
