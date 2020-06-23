// 函式元件
import React, { Fragment } from 'react'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'

//import scss
import '../../assets/scss/index.scss'
//import main
import IndexBase from './IndexBase'

function AliceSellers(props) {
  return (
    <Router>
      <Fragment>
        <div>
          <IndexBase/>
        </div>
      </Fragment>
    </Router>
  )
}
export default withRouter(AliceSellers)
