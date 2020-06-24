// 函式元件
import React from 'react'
import {withRouter} from 'react-router-dom'

import MembersLeft from './ComponentMembersLeft'
import MembersRight from './ComponentMembersRight'

function KMembers(props) {
  const {userdata, setUserdata} = props.allprops;
  return (
      <main>
        <div className="members_all">
          <MembersLeft 
            userdata = {userdata}
            setUserdata = {setUserdata}
          />
          <MembersRight 
            allprops={{
                userdata,
                setUserdata
              }}
          />
        </div>
      </main>
  )
}
export default withRouter(KMembers)
