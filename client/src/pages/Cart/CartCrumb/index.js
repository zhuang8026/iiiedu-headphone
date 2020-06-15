// 函式元件
import React ,{ Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect,Link, NavLink, withRouter} from "react-router-dom"
import '../../../assets/css/Cart/CartCrumb.css'


// scss
// import './_menu.scss'

function CartCrumb(props) {
    return (
       <>
       <aside className="cart-aside">
            <div></div>
            <span className="crumb">
            <a href="../">首頁</a>
            <a href="./YfangCart">/ 購物車</a>
            </span>
       </aside>
      
       </>
    )

}
export default withRouter(CartCrumb);