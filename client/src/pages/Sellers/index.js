// 函式元件
import React, { Fragment } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

// scss
// import './test.scss'

import LeftNav from './Leftnav/LeftNav'
import IndexMain from './IndexMain/IndexMain'


function AliceSellers(props) {
    return (
        <Fragment>
            <div className="seller_body">
                <LeftNav />
                <IndexMain />
            </div>
        </Fragment>
    )
}
export default withRouter(AliceSellers);