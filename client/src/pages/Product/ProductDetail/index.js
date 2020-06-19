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
import ProductCrumb from '../ProductCrumb'
import ProductDetailLeft from '../ProductDetail/ProductDetailLeft'
import ProductDetailRight from '../ProductDetail/ProductDetailRight'
import ProductDetailBottom from '../ProductDetail/ProductDetailBottom'

function ProductDetail(props) {
  return (
    <Fragment>
      <main>
        <ProductCrumb />
      </main>
      <div className="Yybodyin">
        <ProductDetailLeft />
        <ProductDetailRight />
        <ProductDetailBottom />
      </div>
    </Fragment>
  )
}
export default withRouter(ProductDetail)
