// 函式元件
import React, { Fragment } from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    Link,
    NavLink,
    withRouter,
 } from 'react-router-dom'

// components
import ProductCrumb from './ProductCrumb'
import ProductMain from './ProductMain'

function YyProduct(props) {
    return (
        <main>
          <ProductCrumb />
          <ProductMain />
        </main>
      )

}
export default withRouter(YyProduct);