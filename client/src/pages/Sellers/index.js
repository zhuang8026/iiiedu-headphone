// 函式元件
import React, { Fragment } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

// scss
import './test.scss'

function AliceSellers(props) {
    return (
        <Fragment>
        <div className="test"/>
        我是 賣家 / Alice 負責
        </Fragment>
    )

}
export default withRouter(AliceSellers);