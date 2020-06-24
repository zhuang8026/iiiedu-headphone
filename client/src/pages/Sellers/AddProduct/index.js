import React, { Fragment,useState,useEffect } from 'react'
import { withRouter, BrowserRouter as Router } from 'react-router-dom'

//import components
import MyNavBar from '../../../components/Navbar'
import MyMenu from '../../../components/NavbarMenu'
import MyFooter from '../../../components/Footer'
import LeftNav from '../../Sellers/Leftnav'

//import image
import searchImg from '../../../assets/img/seller/my-sale/search.svg'

function SellerAddProduct(props) {
//   console.log(props)
  const [addItem, setAddItem] = useState('')
  const [ItemClassification, setItemClassification] = useState('')
  const [addItemDescription, setAddItemDescription] = useState('')
  const [addItemSize, setAddItemSize] = useState('')
  const [addItemColor, setAddItemColor] = useState('')
//const [addItemstorage, setAddItemstorage] = useState('')
  const [addItemPrice, setAddItemPrice] = useState('')
//   const [addItemBtn, setAddItemBtn] = useState('')

    const datasent = {                
    'itemName':addItem,
    'itemstype':ItemClassification,
    'itemscontent':addItemDescription,
    'itemsweight':addItemSize,
    'colorid':addItemColor,
    'itemPrice':addItemPrice}


    const handleSubmit =(e)=>{
        e.preventDefault();
        fetch('https://localhost:3009/sellers/add-product',{
            method:'post',
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json'
            },
            body:JSON.stringify(datasent)
        })
        .then(result=>result.json())
        .then(obj=>{
          console.log(obj);
      })
    }


  return (
    <Router>
      <Fragment>
        <div>
          <div className="h-100"></div>
          <span className="breadcrumb">
            首頁 &nbsp;/ 訂單管理/ &nbsp;我的訂單
          </span>
          <div className="seller-container">
            <LeftNav />
            <div className="seller-w100-main">
            <div class="add-product card">
                    <div class="w-90">
                        <div class="seller-header">
                            <h1>新增商品</h1>
                            <p>請為您的商品選擇一個正確的分類。</p>
                        </div>
                        <htmlForm >
                            <div class="seller-productname">
                                <label>新增商品</label>
                                <input type="text" class="seller-addinput" placeholder="例：藍牙耳機" onChange={e=>setAddItem({addItem:e.target.value})}/>
                            </div>
                            <input type="text" class="seller-productclassname" placeholder="分類名稱" onChange={e=>setItemClassification({ItemClassification:e.target.value})}/>
                            <div>
                                <img class="seller-addproductimg" src="./asset/img/index/seller-center-png/blog-revenue.png"
                                    alt="" />
                            </div>
                            <div>
                                <label>商品描述</label>
                                <textarea class="seller-addinput" placeholder="例：大明星愛用款" onChange={e=>setAddItemDescription({addItemDescription:e.target.value})}></textarea>
                            </div>
                            <div>
                                <label>商品規格</label>
                                <div class="d-flex">
                                    <div>
                                        <label for="seller-productsize">規格/尺寸</label>
                                        <input class="addinput" id="seller-productsize" placeholder="例：大明星愛用款" onChange={e=>setAddItemSize({addItemSize:e.target.value})}/>     
                                    </div>
                                    <div>
                                        <label for="seller-productcolor">顏色</label>
                                        <input class="addinput" id="seller-productcolor" onChange={e=>setAddItemColor({addItemColor:e.target.value})}/>     
                                    </div>
                                    <div>
                                        <label for="seller-productreserve">商品庫存</label>
                                        <input class="addinput" id="seller-productreserve" />     
                                    </div>
                                    <div>
                                        <label for="seller-productsoldprice">售價</label>
                                        <input class="addinput" id="seller-productsoldprice" onChange={e=>setAddItemPrice({addItemPrice:e.target.value})}/>     
                                    </div>
                                </div>
                            </div>
                        <button type="submit" class="seller-add" onClick={handleSubmit}>新增</button>
                        </htmlForm>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </Router>
  )
}

export default withRouter(SellerAddProduct);
