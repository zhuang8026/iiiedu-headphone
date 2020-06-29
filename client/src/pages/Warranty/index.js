// 函式元件
import React, { Fragment } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

// scss
// import './_menu.scss'
import WarrantyHeader from './WarrantyHeader'
function WiWarranty(props) {
    return (
        <Fragment>
        <WarrantyHeader />
        </Fragment>
    )

}
export default withRouter(WiWarranty);