// 函式元件
import React, { Fragment } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'
import GiftHeader from './GiftHeader/index'
import GiftAbout from './GiftAbout/index'
import GiftBuy from './GiftBuy/index'
// scss
// import './_menu.scss'

function WiGift(props) {
    return (
        <Fragment>
        <GiftHeader />
        <GiftAbout />
        <GiftBuy />
        </Fragment>
    )

}
export default withRouter(WiGift);