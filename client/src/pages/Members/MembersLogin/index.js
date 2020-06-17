// 函式元件
import React, { Fragment,useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link, NavLink, withRouter} from 'react-router-dom'

 // components
import MyNavBar from '../../../components/Navbar'
import MyMenu from '../../../components/NavbarMenu'
import MyFooter from '../../../components/Footer'


function MembersLogin() {
    return (
        <Fragment>
            <header>
                <MyNavBar />
                <MyMenu />
            </header>
            <main>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </main>
            <MyFooter />
        </Fragment>
    )

}
export default withRouter(MembersLogin);