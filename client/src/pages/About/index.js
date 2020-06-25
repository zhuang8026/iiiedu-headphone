// 函式元件
import React, { Fragment } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'
import AboutHeader from './AboutHeader';
// scss
// import './_menu.scss'

function WiAbout(props) {
    return (
        <Fragment>
      <main>
            <AboutHeader />
     </main>
        </Fragment>
    )

}
export default withRouter(WiAbout);