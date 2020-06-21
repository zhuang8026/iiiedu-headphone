// 函式元件
import React from 'react'
import {withRouter} from 'react-router-dom'

import MembersLeft from './ComponentMembersLeft'
import MembersRight from './ComponentMembersRight'

function KMembers() {
  return (
      <main>
        <div className="members_all">
          <MembersLeft />
          <MembersRight />
        </div>
      </main>
  )
}
export default withRouter(KMembers)
