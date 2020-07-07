// 函式元件
import React, { Fragment } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

// scss
// import './_menu.scss'
import WiProblemheader from './WiProblemheader'
import WiProblemcenter from './Wiproblemcenter'
function WiProblem(props) {
    return (
<>
   <WiProblemheader />
   <WiProblemcenter />
</>

    )

}
export default withRouter(WiProblem);