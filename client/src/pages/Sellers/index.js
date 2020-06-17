// 函式元件
import React, { Fragment } from 'react'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'

//import components
import MyNavBar from '../../components/Navbar'
import MyMenu from '../../components/NavbarMenu'
import MyFooter from '../../components/Footer'

//import scss
import '../../assets/scss/index.scss'
//import main
import IndexBase from './IndexBase'

function AliceSellers(props) {
  return (
    <Router>
      <Fragment>
        <header>
          <MyNavBar />
          <MyMenu />
        </header>

        <div>
          <IndexBase />
        </div>

        <MyFooter />
      </Fragment>
    </Router>
  )
}
export default withRouter(AliceSellers)
