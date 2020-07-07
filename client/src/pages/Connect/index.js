// 函式元件
import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom'
import ConnectHeader from './Connectheader'
import Connectus from './Connectus'

// scss
// import './_menu.scss'

function WiConnect(props) {
    return (
        <Fragment>
       <ConnectHeader />
       <Connectus />
        </Fragment>
    )

}
export default withRouter(WiConnect);