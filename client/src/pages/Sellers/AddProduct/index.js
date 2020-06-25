import React,{useState} from 'react'
import { withRouter, BrowserRouter as Router } from 'react-router-dom'
import LeftNav from '../Leftnav'
import AddProductForm from '../AddProductForm/index'

function SellerAddProduct(props) {
  const {                    
    userdata, setUserdata, name, setName
          } = props.allprops;

    const [itemName,setItemName] = useState('')
    const [itemImg,setItemImg] = useState([])
    const[colorid,setColorId] = useState('')
    const [itemsbrand,setItemsBrand] = useState('')
    const [itemstype,setItemstype] = useState('')
    const [itemPrice,setItemPrice] = useState('')
    const [itemQty,setItemQty] = useState('')
    const[itemsales,setItemsales] = useState('')
    const[itemscontent,setItemscontent] = useState('')
    const[itemsweight,setItemsweight] = useState('')
    const[itemsdrive,setItemsDrive] = useState('')
    const[itemsfrequency,setitemsfrequency] = useState('')
    const[itemsSensitivity,setItemsSensitivity] = useState('')
    const[itemsconnect,setItemsconnect] = useState('')
    const[itemsmains,setItemsmains] = useState('')
    const[itemsEndurance,setItemsEndurance] = useState('')
    const[itemswatertight,setItemswatertight] = useState('')
    const[itemsfeature,setItemsFeature] = useState('')
    
    return (
      <>
        <div>
          {/* <div className="h-100"></div> */}
          <span className="breadcrumb">
            首頁 &nbsp;/ 訂單管理/ &nbsp;我的訂單
           </span>
          <div className="seller-container">
            <LeftNav />
            <div className="seller-header">
                    {/* <h1>新增商品</h1>
                    <p>請為您的商品選擇一個正確的分類。</p> */}
                  </div>
                  <AddProductForm 
                  allprops={{
                  userdata,
                  setUserdata,
                  name,
                  setName
                    }}               
              itemName={itemName} setItemName={setItemName}
              itemImg={itemImg} setItemImg={setItemImg}
              colorid={colorid} setColorId={setColorId}
              itemsbrand={itemsbrand} setItemsBrand={setItemsBrand}
              itemstype={itemstype} setItemstype={setItemstype}
              itemPrice={itemPrice} setItemPrice={setItemPrice}
              itemQty={itemQty} setItemQty={setItemQty}
              itemsales={itemsales} setItemsales={setItemsales}
              itemscontent={itemscontent} setItemscontent={setItemscontent}
              itemsweight={itemsweight} setItemsweight={setItemsweight}
              itemsdrive={itemsdrive} setItemsDrive={setItemsDrive}
              itemsfrequency={itemsfrequency} setitemsfrequency={setitemsfrequency}
              itemsSensitivity={itemsSensitivity} setItemsSensitivity={setItemsSensitivity}
              itemsconnect={itemsconnect} setItemsconnect={setItemsconnect}
              itemsmains={itemsmains} setItemsmains={setItemsmains}
              itemsEndurance={itemsEndurance} setItemsEndurance={setItemsEndurance}
              itemswatertight={itemswatertight} setItemswatertight={setItemswatertight}
              itemsfeature={itemsfeature} setItemsFeature={setItemsFeature}/>
                </div>
        </div>
      </>
    )
  
}
export default withRouter(SellerAddProduct)