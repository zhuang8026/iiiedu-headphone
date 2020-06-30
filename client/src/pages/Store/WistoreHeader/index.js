import React, { useEffect,useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
// import Aboutimg from '../../../assets/img/About/A01.jpg'
//antd
// import { message } from 'antd';

function WistoreHeader() {
    const position = [51.505, -0.09]



  return ( <>
<div className="AboutgiftCrumb">
<Link to="/">首頁</Link>/  <Link to="/WiGift">禮物卡</Link>
</div>
<Map center={position} zoom={13}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
     
    />
    <Marker position={position}>
      <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
    </Marker>
  </Map>


 

</>
  )
}
export default withRouter(WistoreHeader)
