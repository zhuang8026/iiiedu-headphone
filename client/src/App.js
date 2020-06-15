import React ,{ Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

import WiHome from './pages/Home'
import YyProduct from './pages/Product'
import WiAbout from './pages/About'
import YongBlog from './pages/BLog'
import KMembers from './pages/Members'
import AliceSellers from './pages/Sellers'
import YfangCart from './pages/Cart'

// 靜態頁面
import WiStore from './pages/Store'
import WiConnect from './pages/Connect'
import WiGift from './pages/Gift'
import WiProblem from './pages/Problem'
import WiOurClients from './pages/OurClients'
import WiWarranty from './pages/Warranty'

function App() {
    return (
        <Router>
            <Fragment>
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

                    <Route path="/YongBlog">
                        <YongBlog />
                    </Route>

                    <Route path="/KMembers">
                        <KMembers />
                    </Route>

                    <Route path="/AliceSellers">
                        <AliceSellers />
                    </Route>

                    <Route path="/YfangCart">
                        <YfangCart />
                    </Route>

                    {/* 靜態頁面 */}
                    <Route path="/WiGift">
                        <WiGift />
                    </Route>
                    <Route path="/WiWarranty">
                        <WiWarranty />
                    </Route>
                    <Route path="/WiAbout">
                        <WiAbout />
                    </Route>
                    <Route path="/WiConnect">
                        <WiConnect />
                    </Route>  
                    <Route path="/WiStore">
                        <WiStore />
                    </Route>
                    <Route path="/WiProblem">
                        <WiProblem />
                    </Route>
                    <Route path="/WiOurClients">
                        <WiOurClients />
                    </Route>
                    


                    {/* ProtectdRoute 這是 utils */}
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
            </Fragment>
        </Router>
    );
}

export default App
