// 函式元件
import React, { Fragment } from 'react'
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
import MyNavBar from '../../../components/Navbar'
import MyMenu from '../../../components/NavbarMenu'
import MyFooter from '../../../components/Footer'
import ProductCrumb from '../ProductCrumb'
import ProductDetailLeft from '../ProductDetail/ProductDetailLeft'
import ProductDetailRight from '../ProductDetail/ProductDetailRight'
import ProductDetailBottom from '../ProductDetail/ProductDetailBottom'

// scss
// import './_menu.scss'

function ProductDetail(props) {
  return (
    <Router>
      <Fragment>
        <header>
          <MyNavBar />
          <MyMenu />
        </header>
        <main>
          <ProductCrumb />
        </main>
        <div className="Yybodyin">
          <ProductDetailLeft />
          <ProductDetailRight />
          <ProductDetailBottom />
        </div>
        <MyFooter />
      </Fragment>
    </Router>
  )
}
export default withRouter(ProductDetail)
