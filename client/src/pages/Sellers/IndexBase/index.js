import React from 'react'
import { withRouter } from 'react-router-dom'
//import css
import '../../../assets/css/AliceSeller/IndexBase.css'

//import main
import LeftNav from '../Leftnav'
import IndexMain from '../IndexMain'
import News from '../News'

function IndexBase(props) {
  return (
    <>
      <div className="h-100"></div>
      <div className="seller-container">
        <LeftNav />
        <IndexMain />
        <News />
      </div>
    </>
  )
}
export default withRouter(IndexBase)
