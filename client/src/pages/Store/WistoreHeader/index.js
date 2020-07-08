import React, { useEffect,useState, useRef  } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import MarkerClusterGroup from "react-leaflet-markercluster";
import 'leaflet/dist/leaflet.css'
import 'react-leaflet-markercluster/dist/styles.min.css'
import L from 'leaflet'
import picja from '../../../assets/img/japen.jpg'
import pictw from '../../../assets/img/tw.jpg'
import pickoa from '../../../assets/img/koa.jpg'
import picusa from '../../../assets/img/usa.jpg'
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
    fontSize: "24px",
    color:'midnightblue'

  };
  const Wih1 = {
    fontSize: "28px",

  };
 
  const [maporder, setMaporder] = useState('1')

const coo = Place.map((data, index) => data.coo)

const CountrySelect = Place.map((data, index) =>
<option    value={data.value}>{data.CountryName}</option>)

  return ( 
    <>
    <div className ="mapin">
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
        <p>在日本造屋基本結構上添加許多西方元素，門廊與門廳以華麗的希臘立柱打造，繁複的花紋、勛章、彩帶，以泥塑工法雕琢，細節精緻，引人入勝。<br></br>
        <br></br>
        <h2>地址</h2>
        東京都港區白金台5-20-2
        </p>
        <h1 style={Wih1}>Otis大阪分店</h1>
        <p  className="wistorep">
        <h2>地址</h2>
        大阪市中央區難波5丁目1番5號
        </p>
      </div>
      )}
      {maporder === '3' && (
      <div className="wiheaderna">
        <img src={pickoa}></img>
        <p></p>
        <h1 style={Wih1}>Otis首爾本店</h1>
        <p>在日本造屋基本結構上添加許多西方元素，門廊與門廳以華麗的希臘立柱打造，繁複的花紋、勛章、彩帶，以泥塑工法雕琢，細節精緻，引人入勝。<br></br>
        <br></br>
        <h2>地址</h2>
        首爾特別市中區乙支路66
        </p>
        <h1 style={Wih1}>Otis釜山分店</h1>
        <p  className="wistorep">
        <h2>地址</h2>
        釜山廣域市海雲臺區海雲臺海邊路264
        </p>
      </div>
      )}
      {maporder === '4' && (
      <div className="wiheaderna">
        <img src={picusa}></img>
        <p></p>
        <h1 style={Wih1}>Otis紐約本店</h1>
        <p>雙重斜坡屋頂是其重要特色，通常使用魚鱗狀瓦片覆蓋，屋頂頂部邊緣有鐵制裝飾環繞，屋檐下有裝飾型的托架<br></br>
        <br></br>
        <h2>地址</h2>
        1 E. 42nd Street New York , NY 10017 U.S.A.
        </p>
        <h1 style={Wih1}>Otis俄亥俄分店</h1>
        <p  className="wistorep">
        <h2>地址</h2>
        he Ohio State University，1653 Enarson Hall ，154 W 12th Avenue， Columbus, Ohio 43210
        </p>
      </div>
      )}
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

    
    
      </div>
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
  </>
  )
}
export default withRouter(WiMap)
