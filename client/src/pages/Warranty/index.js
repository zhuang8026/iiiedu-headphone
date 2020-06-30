// 函式元件
import React, { Fragment } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

// scss
// import './_menu.scss'
import WarrantyHeader from './WarrantyHeader'
import WarrantyAbout from './WarrantyAbout'
function WiWarranty(props) {
    return (
        <Fragment>
        <WarrantyHeader />
        <WarrantyAbout />
        </Fragment>
    )

}
export default withRouter(WiWarranty);