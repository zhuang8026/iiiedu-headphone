// 函式元件
import React from 'react'
import {withRouter} from 'react-router-dom'

import ComponentSuperSellerLeft from './ComponentSuperSellerLeft'
import SuperSellerOrder from './SuperSellerOrder'

function KMembers(props) {
  const {userdata, setUserdata, sellerOrderData, setSellerOrderData} = props.allprops;
  return (
      <main>
        <div className="members_all">
          <ComponentSuperSellerLeft 
            userdata = {userdata}
            setUserdata = {setUserdata}
          />
          <SuperSellerOrder 
            allprops={{
              userdata,
              setUserdata,
              sellerOrderData, 
              setSellerOrderData
            }}
          />
        </div>
      </main>
  )
}
export default withRouter(KMembers)
