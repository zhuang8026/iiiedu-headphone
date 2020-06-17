import React, { Fragment, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import WiHome from './pages/Home'
import YyProduct from './pages/Product'
import WiAbout from './pages/About'
import YongBlog from './pages/BLog/YongBlog'
import YongMyBlog from './pages/BLog/YongMyBlog'

// 會員使用
import KMembers from './pages/Members'

import MembersPwa from './pages/Members/MembersPwa/index.js'

// Alice's part
import AliceSellers from './pages/Sellers'
import MySale from './pages/Sellers/MySale'
import Order from './pages/Sellers/Order'

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
            {/* 首頁 */}
            <Route exact path="/">
                <WiHome />
            </Route>

            {/* 產品列表 */}
            <Route path="/YyProduct/:head?">
                <YyProduct />
            </Route>

            <Route path="/YyProduct/:air?">
                <YyProduct />
            </Route>

            <Route path="/YyProduct/:box?">
                <YyProduct />
            </Route>

            {/* 靜態頁面 */}
            <Route path="/about/WiGift">
                <WiGift />
            </Route>
            <Route path="/about/WiWarranty">
                <WiWarranty />
            </Route>
            <Route path="/about/WiAbout">
                <WiAbout />
            </Route>
            <Route path="/about/WiConnect">
                <WiConnect />
            </Route>
            <Route path="/about/WiStore">
                <WiStore />
            </Route>
            <Route path="/about/WiProblem">
                <WiProblem />
            </Route>
            <Route path="/about/WiOurClients">
                <WiOurClients />
            </Route>

            {/* 會員 */}
            {/* <Route path="/KMembers">
                <KMembers />
            </Route> */}
            {/* 會員 */}
            <Route
                path="/KMembers"
                render={({ match: { url } }) => (
                <>
                    <Route path={`${url}/`} component={KMembers} exact />
                    <Route path={`${url}/MembersPwa`} component={MembersPwa} />
                    {/* <Route path={`${url}/MembersVisa`} component={MembersVisa} /> */}
                    {/* <Route path={`${url}/MembersAddress`} component={MembersAddress} /> */}
                </>
                )}
            />
                    
            {/* Blog */}
            <Route path="/Blog/YongBlog">
                <YongBlog />
            </Route>
            <Route path="/Blog/YongMyBlog">
                <YongMyBlog />
            </Route>

            {/* 會員 */}
            <Route path="/KMembers">
                <KMembers />
            </Route>

            {/* 賣家 */}
            <Route path="/AliceSellers" exact>
                <AliceSellers />
            </Route>
            <Route path="/AliceSellers/MySale" exact>
                <MySale />
            </Route>
            <Route path="/AliceSellers/order">
                <Order />
            </Route>
            {/* 購物車 */}
            <Route path="/YfangCart">
                <YfangCart />
            </Route>

            {/* ProtectdRoute 這是 utils */}
            {/* <ProtectedRoute path="/todoapp">
                            <TodoApp todos={todos} setTodos={setTodos} isAuth={auth}/>
                        </ProtectedRoute> */}

            {/* 404 必须放在最后一个 */}
            {/* Redirect 重新導向 / 需要先引入 */}
            <Route path="/404">{/* <NotFoundPage404/> */}</Route>
            <Redirect to="/404" />
            </Switch>
        </Fragment>
        </Router>
    )
}

export default App
