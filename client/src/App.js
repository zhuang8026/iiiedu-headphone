import React ,{ Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

// components
import MyNavBar from './components/Navbar';
import MyMenu from './components/NavbarMenu';
import MyFooter from './components/Footer';

import WiHome from './pages/Home'
import YyProduct from './pages/Product'
import WiAbout from './pages/About'
import YongBlog from './pages/BLog'
// import KMembers from './pages/Members'
import AliceSellers from './pages/Sellers'

function App() {
    return (
        <Router>
            <Fragment>
                <header>
                    <MyNavBar/>
                    <MyMenu/>
                </header>
                <Switch>
                    
                    <Route exact path="/">
                        <WiHome />
                    </Route>

                    <Route path="/YyProduct">
                        <YyProduct />
                    </Route>

                    <Route path="/YyProduct">
                        <YyProduct />
                    </Route>

                    <Route path="/YyProduct">
                        <YyProduct />
                    </Route>

                    <Route path="/WiAbout">
                        <WiAbout />
                    </Route>

                    <Route path="/YongBlog">
                        <YongBlog />
                    </Route>

                    <Route path="/AliceSellers">
                        <AliceSellers />
                    </Route>

                    {/* ProtectdRoute */}
                    {/* <ProtectedRoute path="/todoapp">
                        <TodoApp todos={todos} setTodos={setTodos} isAuth={auth}/>
                    </ProtectedRoute> */}

                    {/* 404 必须放在最后一个 */}
                    {/* Redirect 重新導向 / 需要先引入 */}
                    <Route path="/404">
                        {/* <NotFoundPage404/> */}
                    </Route>
                    <Redirect to="/404" />

                </Switch>
                <MyFooter/>
            </Fragment>
        </Router>
    );
}

export default App
