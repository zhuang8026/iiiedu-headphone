import React from 'react'
import { withRouter, BrowserRouter as Router } from 'react-router-dom'
import LeftNav from '../Leftnav'
import AddProductForm from '../AddProductForm/index'
class SellerAddProduct extends React.Component{

render(){
    return(
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
                         <AddProductForm />
                    </div>
              </div>
            </div>
          </div>
        </div>
        
        </>
    )
}
}
export default withRouter(SellerAddProduct)