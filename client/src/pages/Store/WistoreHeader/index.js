import React, { useEffect,useState, useRef  } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

// import Aboutimg from '../../../assets/img/About/A01.jpg'
//antd
// import { message } from 'antd';

function WiMap() {
   
   
  return ( 
    <Map center={[25.034041, 121.533798]} zoom={15}>
    <Marker
         
          position={
            [25.032956, 121.534895]
          } 
          
    />
     <Marker
         
          position={
            [25.034619, 121.532953]
          }
       
     ><Popup>森林店</Popup>
     </Marker>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    
  </Map>
  )
}
export default withRouter(WiMap)
