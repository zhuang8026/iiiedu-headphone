// 函式元件
import React, { Fragment, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
  NavLink,
  withRouter,
} from 'react-router-dom'

// -------------------- components --------------------
// import MyNavBar from '../../../components/Navbar'
// import MyMenu from '../../../components/NavbarMenu'
// import MyFooter from '../../../components/Footer'
//blog
import BlogUser from '../Blog-1-main-components/BlogUser'
// -------------------- scss --------------------

// -------------------- imgs --------------------

// -------------------- func --------------------

function YongMyBlog(props) {
  const { userdata, setUserdata, name, setName } = props.allprops;
  const updateCheckoutInfoToLocalStorage = (value) => {
    const Blogman = JSON.parse(localStorage.getItem('memberData')) || []
    console.log('====================', Blogman)
    // const currentCart = JSON.parse(localStorage.getItem('CheckoutInfo')) || []
    // const newCheckoutInfo = [...currentCart, value]
    // localStorage.setItem('CheckoutInfo', JSON.stringify(newCheckoutInfo))
  }
  return (
    <Route>
      <Fragment>
        <main>
          <BlogUser
            allprops={{
              userdata,
              setUserdata,
              name,
              setName
            }}
          />
        </main>
      </Fragment>
    </Route>
  )
}
export default withRouter(YongMyBlog)
