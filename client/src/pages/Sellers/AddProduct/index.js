import React from 'react'
import { withRouter, BrowserRouter as Router } from 'react-router-dom'
import LeftNav from '../Leftnav'
import AddProductForm from '../AddProductForm/index'

function SellerAddProduct(props) {
  const {                    
    itemName, 
    setItemName, 
    itemImg, 
    setItemImg, 
    colorid, 
    setColorId, 
    itemsbrand, 
    setItemsBrand, 
    itemstype, 
    setItemstype, 
    itemPrice, 
    setItemPrice, 
    itemQty, 
    setItemQty, 
    itemsales, 
    setItemsales, 
    itemscontent, 
    setItemscontent, 
    itemsweight, 
    setItemsweight, 
    itemsdrive, 
    setItemsDrive, 
    itemfrequency, 
    setitemsfrequency, 
    itemsSensitivity, 
    setItemsSensitivity, 
    itemsconnect, 
    setItemsconnect, 
    itemsmains, 
    setItemsmains, 
    itemsEndurance, 
    setItemsEndurance, 
    itemswaterlight, 
    setItemswatertight, 
    itemsfeature, 
    setItemsFeature
          } = props.allprops;
    return (
      <>
        <div>
          <div className="h-100"></div>
          <span className="breadcrumb">
            首頁 &nbsp;/ 訂單管理/ &nbsp;我的訂單
           </span>
          <div className="seller-container">
            <LeftNav />
            <div className="seller-w100-main">
              <div className="add-product card">
                <div className="w-90">
                  <div className="seller-header">
                    <h1>新增商品</h1>
                    <p>請為您的商品選擇一個正確的分類。</p>
                  </div>
                  <AddProductForm allprops={{
                    itemName, setItemName, itemImg, setItemImg, colorid, setColorId, itemsbrand, setItemsBrand, itemstype, setItemstype, itemPrice, setItemPrice, itemQty, setItemQty, itemsales, setItemsales, itemscontent, setItemscontent, itemsweight, setItemsweight, itemsdrive, setItemsDrive, itemfrequency, setitemsfrequency, itemsSensitivity, setItemsSensitivity, itemsconnect, setItemsconnect, itemsmains, setItemsmains, itemsEndurance, setItemsEndurance, itemswaterlight, setItemswatertight, itemsfeature, setItemsFeature
                  }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  
}
export default withRouter(SellerAddProduct)