// 函式元件
import React, { Fragment } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'
import WistoreHeader from './WistoreHeader'
// scss
// import './_menu.scss'

function WiStore(props) {
    return (
        <Fragment>
        我們在哪？
        <WistoreHeader />
        </Fragment>
    )

}
export default withRouter(WiStore);