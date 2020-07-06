import React, { useEffect,useState, useRef  } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import MarkerClusterGroup from "react-leaflet-markercluster";
import 'leaflet/dist/leaflet.css'
import 'react-leaflet-markercluster/dist/styles.min.css'
import L from 'leaflet'
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
  const [maporder, setMaporder] = useState('1')
//  const marker = Place.map((data, index) => <Marker position={[data.AreaList[i].coordinates[0],data.AreaList[i].coordinates[1]]}>
//  </Marker>) 
 
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
        <Popup>{data.AreaList[0].Des}</Popup>
        </Marker>
        <Marker position={[data.AreaList[1].coordinates[0],data.AreaList[1].coordinates[1]]}>
        <Popup>{data.AreaList[1].Des}</Popup>
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
        <Popup>{data.AreaList[0].Des}</Popup>
        </Marker>
        <Marker position={[data.AreaList[1].coordinates[0],data.AreaList[1].coordinates[1]]}>
        <Popup>{data.AreaList[1].Des}</Popup>
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
        <Popup>{data.AreaList[0].Des}</Popup>
        </Marker>
        <Marker position={[data.AreaList[1].coordinates[0],data.AreaList[1].coordinates[1]]}>
        <Popup>{data.AreaList[1].Des}</Popup>
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
        <Popup>{data.AreaList[0].Des}</Popup>
        </Marker>
        <Marker position={[data.AreaList[1].coordinates[0],data.AreaList[1].coordinates[1]]}>
        <Popup>{data.AreaList[1].Des}</Popup>
        </Marker>
            
    </MarkerClusterGroup>
         )})}
   
 
    </Map>
    )}
    <div class="storeselect">
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
  </>
  )
}
export default withRouter(WiMap)
