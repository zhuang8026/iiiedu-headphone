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
import MyNavBar from '../../components/Navbar'
import MyMenu from '../../components/NavbarMenu'
import MyFooter from '../../components/Footer'
import ProductCrumb from './ProductCrumb'
import ProductMain from './ProductMain'
// scss
// import './_menu.scss'

function YyProduct(props) {
    return (
        <Router>
          <Fragment>
            <header>
              <MyNavBar />
              <MyMenu />
            </header>
            <main>
            <ProductCrumb />
            <ProductMain />
            </main>
    
            <MyFooter />
          </Fragment>
        </Router>
      )

}
export default withRouter(YyProduct);