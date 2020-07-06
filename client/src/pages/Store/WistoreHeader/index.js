import React, { useEffect,useState, useRef  } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import MarkerClusterGroup from "react-leaflet-markercluster";
import 'leaflet/dist/leaflet.css'
import 'react-leaflet-markercluster/dist/styles.min.css'
import L from 'leaflet'
import picja from '../../../assets/img/japen.jpg'
import pictw from '../../../assets/img/tw.jpg'
import {Place} from './config'
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
  const popupText = {
    fontSize: "15px",

  };
  const Wih1 = {
    fontSize: "36px",

  };
 
  const [maporder, setMaporder] = useState('1')

const coo = Place.map((data, index) => data.coo)

const CountrySelect = Place.map((data, index) =>
<option    value={data.value}>{data.CountryName}</option>)

  return ( 
    <>
    
    {maporder === '1' && (
    <Map center={[25.101332, 121.549841]} zoom={6}>
        <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
  {Place.map((data, index)=>{
      return(
     <MarkerClusterGroup>
    
        <Marker position={[data.AreaList[0].coordinates[0],data.AreaList[0].coordinates[1]]}>
        <Popup ><h1 style={popupText}>{data.AreaList[0].Des}</h1></Popup>
        </Marker>
        <Marker position={[data.AreaList[1].coordinates[0],data.AreaList[1].coordinates[1]]}>
        <Popup ><h1 style={popupText}>{data.AreaList[1].Des}</h1></Popup>
        </Marker>
            
    </MarkerClusterGroup>
         )})}
    </Map>
   
    )}
    
    
    {maporder === '2' && (
    <Map center={[35.726156, 139.808742]} zoom={6}>

    
        <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
  {Place.map((data, index)=>{
      return(
     <MarkerClusterGroup>
    
        <Marker position={[data.AreaList[0].coordinates[0],data.AreaList[0].coordinates[1]]}>
        <Popup ><h1 style={popupText}>{data.AreaList[0].Des}</h1></Popup>
        </Marker>
        <Marker position={[data.AreaList[1].coordinates[0],data.AreaList[1].coordinates[1]]}>
        <Popup ><h1 style={popupText}>{data.AreaList[1].Des}</h1></Popup>
        </Marker>
            
    </MarkerClusterGroup>
         )})}
   
 
    </Map>
    )}
  
    {maporder === '3' && (
    <Map center={[37.551331, 126.988194]} zoom={6}>

    
        <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
  {Place.map((data, index)=>{
      return(
     <MarkerClusterGroup>
    
        <Marker position={[data.AreaList[0].coordinates[0],data.AreaList[0].coordinates[1]]}>
        <Popup ><h1 style={popupText}>{data.AreaList[0].Des}</h1></Popup>
        </Marker>
        <Marker position={[data.AreaList[1].coordinates[0],data.AreaList[1].coordinates[1]]}>
        <Popup ><h1 style={popupText}>{data.AreaList[1].Des}</h1></Popup>
        </Marker>
            
    </MarkerClusterGroup>
         )})}
   
 
    </Map>
    )}
    {maporder === '4' && (
    <Map center={[40.754532, -73.983634]} zoom={6}>

    
        <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
  {Place.map((data, index)=>{
      return(
     <MarkerClusterGroup>
    
       <Marker position={[data.AreaList[0].coordinates[0],data.AreaList[0].coordinates[1]]}>
        <Popup ><h1 style={popupText}>{data.AreaList[0].Des}</h1></Popup>
        </Marker>
        <Marker position={[data.AreaList[1].coordinates[0],data.AreaList[1].coordinates[1]]}>
        <Popup ><h1 style={popupText}>{data.AreaList[1].Des}</h1></Popup>
        </Marker>
            
    </MarkerClusterGroup>
         )})}
   
 
    </Map>
    )}

    <div className="storeselect">
    <h1>請選擇國家</h1>
     <select
      className="select-input"
      value={maporder}
      onChange={(event)=> {
        const v = event.target.value
        setMaporder(v)
      }}
     >
     {CountrySelect}
     </select>
   </div> 
    {maporder === '1' && (
      <div className="wiheaderna">
        <img src={pictw}></img>
        <h1 style={Wih1}>Otis台北本店</h1>
        <p>做為發源地，我們的在挑高的格局表現了接受人群的氣派大方。屋頂、樓梯、
        柱子或其他裝潢，風格都和西方建築很接近，中西混合體的柱頭更是最大的特色。<br></br>
        <br></br>
        <h2>地址</h2>
        台北市復興南路一段390號2樓
        </p>
        <h1 style={Wih1}>Otis左營分店</h1>
        <p  className="wistorep">
        <h2>地址</h2>
        高雄市左營區蓮潭路36號
        </p>
      </div>
      )}
      {maporder === '2' && (
      <div className="wiheaderna">
        <img src={picja}></img>
        <p></p>
        <h1 style={Wih1}>Otis東京本店</h1>
        <p>做為發源地，我們的在挑高的格局表現了接受人群的氣派大方。屋頂、樓梯、
        柱子或其他裝潢，風格都和西方建築很接近，中西混合體的柱頭更是最大的特色。<br></br>
        <br></br>
        <h2>地址</h2>
        台北市復興南路一段390號2樓
        </p>
        <h1 style={Wih1}>Otis大阪分店</h1>
        <p  className="wistorep">
        <h2>地址</h2>
        台北市復興南路一段390號2樓
        </p>
      </div>
      )}
  </>
  )
}
export default withRouter(WiMap)
