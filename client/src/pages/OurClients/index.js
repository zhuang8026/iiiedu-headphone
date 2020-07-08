// 函式元件
import React, { Fragment } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'
import ClientHeader from './Clientheader'
import ClientInside from './ClientInside'
// scss
// import './_menu.scss'

function WiOurClients(props) {
    console.log(props);
    return (
        <Fragment>
        <ClientHeader />
        <ClientInside />
        </Fragment>
    )

}
export default withRouter(WiOurClients);