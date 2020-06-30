// 函式元件
import React, { Fragment } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'
import WiMap from './WistoreHeader'
import GiftHeader from '../Gift/GiftHeader'
// scss
// import './_menu.scss'

function WiStore(props) {
    return (
        <Fragment>
        <div id="williammap">

            <WiMap></WiMap>
    
        </div>
        </Fragment>
    )

}
export default withRouter(WiStore);