import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import { message } from 'antd'

// ScrollToTop
import ScrollToTop from './components/ScrollToTop';

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
// import MembersForget from './pages/Members/MembersForget'

// Alice's part
import AliceSellers from './pages/Sellers'
import MySale from './pages/Sellers/MySale'
import Order from './pages/Sellers/Order'
import Refund from './pages/Sellers/Refund'
import SellerProduct from './pages/Sellers/SellerProduct'
import SellerAddProduct from './pages/Sellers/AddProduct'


//我的最愛
import MyFav from './pages/MyFav'

// 購物車
import MyCart from './pages/Cart/MyCart' //購物車
import CheckoutInfo from './pages/Cart/CheckoutInfo' //訂單個人資料填寫
import CheckoutDelivery from './pages/Cart/CheckoutDelivery' //選擇配送方式
import CheckoutPayment from './pages/Cart/CheckoutPayment' //選擇付款方式
import OrderComplete from './pages/Cart/OrderComplete' //購買完成頁

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
  // 會員
  const [userdata, setUserdata] = useState([])
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginErrors, setLoginErrors] = useState([])

  // 產品列表
  const [itemsdata, setItemsdata] = useState([])
  const [itemsid, setItemsid] = useState("")

  //賣家中心
  // const [SellerData, setSellerData] = useState([]) 
  const [SellerProductId, setsellerProductId] = useState([])
  // 登入 & 狀態判斷
  const loginProcess = (loginSuccessCallback) => {
    const errors = []

    if (username === '') errors.push('帳號沒填！')
    if (password === '') errors.push('密碼沒填！')

    if (errors.length > 0) {
      setLoginErrors(errors)
      message.warning(errors)
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
      message.warning(errors)
      return
    }
    // 清空錯誤訊息陣列 + 登入
    setLoginErrors([])

    addFromServer()
  }

  const localUser = JSON.parse(localStorage.getItem('memberData')) || '';  // 取得localStorage資料
  const getUserData = (usernameData, pwdData) => {
    fetch(`http://localhost:3009/members/user/${usernameData}/${pwdData}`, {
      method: 'get',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        setUserdata(res[0])
      })
  }

  useEffect(() => {
    getUserData(localUser['username'], localUser['pwd'])
  }, [])

  return (
    <Router>
      <header>
        <MyNavBar />
        <MyMenu />
      </header>

      {/* ScrollToTop是為了讓連到另一頁內容時，頁面回到最上方 */}
      <ScrollToTop>

        <Switch>
          {/* 首頁 */}
          <Route exact path="/">
            <WiHome />
          </Route>

          {/* 產品列表 */}
          <Route exact path="/YyProduct">
            <YyProduct
              itemsdata={itemsdata}
              setItemsdata={setItemsdata}
              itemsid={itemsid}
              setItemsid={setItemsid}
            />
          </Route>
          <Route exact path="/YyProduct/:air?">
            <YyProduct />
          </Route>
          <Route exact path="/YyProduct/:box?">
            <YyProduct />
          </Route>

          {/* 產品細節 */}
          <Route path="/ProductDetail/:id?">
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
              allprops={{
                userdata,
                setUserdata,
              }}
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
          {/* <Route path="/KMembers/MembersForget">
            <MembersForget userdata={userdata} setUserdata={setUserdata} />
          </Route> */}

          <Route path="/KMembers/MembersRegister">
            <MembersRegister userdata={userdata} setUserdata={setUserdata} />
          </Route>

          <Route path="/KMembers/MembersPwa">
            <MembersPwa userdata={userdata} setUserdata={setUserdata} />
          </Route>

          <Route path="/KMembers/MembersBank">
            <MembersBank userdata={userdata} setUserdata={setUserdata} />
          </Route>

          <Route path="/KMembers/MembersAdress">
            <MembersAdress
              allprops={{
                userdata,
                setUserdata,
              }}
            />
          </Route>

          <Route path="/KMembers/MembersCartList">
            <MembersCartList userdata={userdata} setUserdata={setUserdata} />
          </Route>

          <Route path="/KMembers/MembersCartDetail">
            <MembersCartDetail
              allprops={{
                userdata,
                setUserdata,
                name,
                setName,
              }}
            />
          </Route>


          {/* Blog */}
          <Route path="/Blog/YongBlog">
            <YongBlog
              allprops={{
                userdata,
                setUserdata,
                name,
                setName
              }}
            />
          </Route>
          <Route path="/Blog/YongMyBlog">
            <YongMyBlog
              allprops={{
                userdata,
                setUserdata,
                name,
                setName
              }} />
          </Route>
          <Route path="/Blog/BlogDetail">
            <BlogDetail
              allprops={{
                userdata,
                setUserdata,
                name,
                setName
              }} />
          </Route>
          <Route path="/Blog/BlogAdd">
            <BlogAdd
              allprops={{
                userdata,
                setUserdata,
                name,
                setName
              }} />
          </Route>
          <Route path="/Blog/BlogEdit">
            <BlogEdit
              allprops={{
                userdata,
                setUserdata,
                name,
                setName
              }} />
          </Route>

          {/* 賣家 */}
          <Route exact path="/AliceSellers">
            <AliceSellers />
          </Route>
          <Route path="/AliceSellers/my-sale" >
            <MySale />
          </Route>
          <Route path="/AliceSellers/order"  >
            <Order />
          </Route>
          <Route path="/AliceSellers/refund" >
            <Refund />
          </Route>
          <Route path="/AliceSellers/seller-product">
            <SellerProduct
              SellerProductId={SellerProductId}
              setsellerProductId={setsellerProductId} />
          </Route>
          <Route path="/AliceSellers/add-product">
            <SellerAddProduct />
          </Route>

          {/* 我的最愛 */}
          <Route path="/MyFav">
            <MyFav />
          </Route>
          {/* 購物車 */}
          <Route path="/MyCart">
            <MyCart userdata={userdata} setUserdata={setUserdata} />
          </Route>
          <Route path="/CheckoutInfo">
            <CheckoutInfo userdata={userdata} setUserdata={setUserdata} />
          </Route>
          <Route path="/CheckoutDelivery">
            <CheckoutDelivery userdata={userdata} setUserdata={setUserdata} />
          </Route>
          <Route path="/CheckoutPayment">
            <CheckoutPayment userdata={userdata} setUserdata={setUserdata} />
          </Route>
          <Route path="/OrderComplete">
            <OrderComplete userdata={userdata} setUserdata={setUserdata} />
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
      </ScrollToTop>

      <MyFooter />
    </Router>
  )
}

export default App
