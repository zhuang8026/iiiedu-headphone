import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import { message } from 'antd';

// navbar & footer
import MyNavBar from './components/Navbar'
import MyMenu from './components/NavbarMenu'
import MyFooter from './components/Footer'

// home 
import WiHome from './pages/Home'

// Product
import YyProduct from './pages/Product'
import ProductDetail from './pages/Product/ProductDetail'

// Blog
import YongBlog from './pages/BLog/YongBlog'
import YongMyBlog from './pages/BLog/YongMyBlog'
import BlogDetail from './pages/BLog/Blog-1-main-components/BlogDetail'
import BlogAdd from './pages/BLog/Blog-1-main-components/BlogAdd'
import BlogEdit from './pages/BLog/Blog-1-main-components/BlogEdit'

// 會員使用
import KMembers from './pages/Members'
import MembersLogin from './pages/Members/MembersLogin'
import MembersRegister from './pages/Members/MembersRegister'
import MembersPwa from './pages/Members/MembersPwa'
import MembersBank from './pages/Members/MembersBank'
import MembersAdress from './pages/Members/MembersAdress'
import MembersCartList from './pages/Members/MembersCartList'
import MembersCartDetail from './pages/Members/MembersCartDetail'
import MembersForget from './pages/Members/MembersForget'

// Alice's part
import AliceSellers from './pages/Sellers'
import MySale from './pages/Sellers/MySale'
import Order from './pages/Sellers/Order'
import Refund from './pages/Sellers/Refund'
import SellerProduct from './pages/Sellers/SellerProduct'
import SellerAccount from './pages/Sellers/SellerAccount'
import SellerAddress from './pages/Sellers/SellerAddress'

//我的最愛
import MyFav from './pages/MyFav'

// yafang
import YfangCart from './pages/Cart'

// 靜態頁面
// import WiAbout from './pages/About'
// import WiStore from './pages/Store'
// import WiConnect from './pages/Connect'
// import WiGift from './pages/Gift'
// import WiProblem from './pages/Problem'
// import WiOurClients from './pages/OurClients'
// import WiWarranty from './pages/Warranty'
import NotFoundPage404 from './pages/404'

function App() {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginErrors, setLoginErrors] = useState([])
  const [userdata, setUserdata] = useState([])

  // 登入 & 狀態判斷
  const loginProcess = (loginSuccessCallback) => {
    const errors = []

    if (username === '') errors.push('帳號沒填！')
    if (password === '') errors.push('密碼沒填！')

    if (errors.length > 0) {
      setLoginErrors(errors)
      message.warning(errors);
      return
    }
    // 清空錯誤訊息陣列 + 登入
    setLoginErrors([])

    loginSuccessCallback()
  }

  // 登入 & 狀態判斷
  const RegisterProcess = (addFromServer) => {
    const errors = []

    if (name === '') errors.push('暱稱沒填！')
    if (username === '') errors.push('帳號沒填！')
    if (password === '') errors.push('密碼沒填！')

    if (errors.length > 0) {
      setLoginErrors(errors)
      message.warning(errors);
      return
    }
    // 清空錯誤訊息陣列 + 登入
    setLoginErrors([])

    addFromServer()
  }

  return (
    <Router>
      <header>
        <MyNavBar />
        <MyMenu />
      </header>

      <Switch>
        {/* 首頁 */}
        <Route exact path="/">
          <WiHome />
        </Route>

        {/* 產品列表 */}
        <Route exact path="/YyProduct/:head?">
          <YyProduct />
        </Route>

        <Route exact path="/YyProduct/:air?">
          <YyProduct />
        </Route>

        <Route exact path="/YyProduct/:box?">
          <YyProduct />
        </Route>
        <Route path="/ProductDetail">
          <ProductDetail />
        </Route>

        {/* 靜態頁面 */}
        {/* <Route path="/about/WiGift">
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
        </Route> */}

        {/* 會員 */}
        <Route exact path="/KMembers">
          <KMembers 
            userdata={userdata}
            setUserdata={setUserdata}
          />
        </Route>
        <Route path="/KMembers/MembersLogin">
          <MembersLogin
            allprops={{
              username,
              setUsername,
              password,
              setPassword,
              loginProcess,
            }}
          />
        </Route>
        <Route path="/KMembers/MembersRegister">
          <MembersRegister 
            allprops={{
              name,
              setName,
              username,
              setUsername,
              password,
              setPassword,
              RegisterProcess
            }}
          />
        </Route>
        <Route path="/KMembers/MembersForget">
          <MembersForget 
            userdata={userdata}
            setUserdata={setUserdata}/>
        </Route>

        <Route path="/KMembers/MembersRegister">
          <MembersRegister 
            userdata={userdata}
            setUserdata={setUserdata}/>
        </Route>

        <Route path="/KMembers/MembersPwa">
          <MembersPwa 
            userdata={userdata}
            setUserdata={setUserdata}/>
        </Route>

        <Route path="/KMembers/MembersBank">
          <MembersBank 
            userdata={userdata}
            setUserdata={setUserdata}/>
        </Route>

        <Route path="/KMembers/MembersAdress">
          <MembersAdress 
            userdata={userdata}
            setUserdata={setUserdata}/>
        </Route>

        <Route path="/KMembers/MembersCartList">
          <MembersCartList 
            userdata={userdata}
            setUserdata={setUserdata}/>
        </Route>

        <Route path="/KMembers/MembersCartDetail">
          <MembersCartDetail 
            userdata={userdata}
            setUserdata={setUserdata}/>
        </Route>

        {/* <Route
          exact
          path="/about/WiOurClients"
          render={() => <WiOurClients allprops={{ username, setUsername }} />}
        /> */}

        {/* Blog */}
        <Route path="/Blog/YongBlog">
          <YongBlog />
        </Route>
        <Route path="/Blog/YongMyBlog">
          <YongMyBlog />
        </Route>
        <Route path="/Blog/BlogDetail">
          <BlogDetail />
        </Route>
        <Route path="/Blog/BlogAdd">
          <BlogAdd />
        </Route>
        <Route path="/Blog/BlogEdit">
          <BlogEdit />
        </Route>

        {/* 賣家 */}
        <Route exact path="/AliceSellers">
          <AliceSellers />
        </Route>
        <Route path="/AliceSellers/my-sale">
          <MySale />
        </Route>
        <Route path="/AliceSellers/order">
          <Order />
        </Route>
        <Route path="/AliceSellers/refund">
          <Refund />
        </Route>
        <Route path="/AliceSellers/seller-product">
          <SellerProduct />
        </Route>
        <Route path="/AliceSellers/seller-account">
          <SellerAccount />
        </Route>
        <Route path="/AliceSellers/seller-address">
          <SellerAddress />
        </Route>

        {/* 我的最愛 */}
        <Route path="/MyFav">
          <MyFav />
        </Route>

        {/* 購物車 */}
        <Route path="/YfangCart" exact>
          <YfangCart />
        </Route>

        {/* ProtectdRoute 這是 utils */}
        {/* <ProtectedRoute path="/todoapp">
                            <TodoApp todos={todos} setTodos={setTodos} isAuth={auth}/>
                        </ProtectedRoute> */}

        {/* 404 必须放在最后一个 */}
        {/* Redirect 重新導向 / 需要先引入 */}

        <Route path="/404">
          <NotFoundPage404 />
        </Route>
        <Redirect to="/404" />
      </Switch>

      <MyFooter />
    </Router>
  )
}

export default App
