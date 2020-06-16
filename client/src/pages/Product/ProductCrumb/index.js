// 函式元件
import React ,{ Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, 
    Redirect,Link, NavLink, withRouter} from "react-router-dom"
import './ProductCrumb.scss'


// scss
// import './_menu.scss'

function ProductCrumb(props) {
    return (
       <>
       <div className="Productaside">
            <div></div>
            <span className="yycrumb">
            <a href="../">首頁</a>
            <a href="./YyProduct">/ 商品列表</a>
            </span>
       </div>
      
       </>
    )

}
export default withRouter(ProductCrumb);