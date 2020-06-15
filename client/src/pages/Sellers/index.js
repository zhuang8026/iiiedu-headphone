// 函式元件
import React, { Fragment } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

// scss
// import './test.scss'

import SellerALiceNav from '../../components/UseAlice'

function AliceSellers(props) {
    return (
        <Fragment>
            <div className="test"/>
            <SellerALiceNav/>
        </Fragment>
    )
}
export default withRouter(AliceSellers);