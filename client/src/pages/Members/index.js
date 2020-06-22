// 函式元件
import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom'

import MembersLeft from './ComponentMembersLeft'
import MembersRight from './ComponentMembersRight'

function KMembers(props) {
  const {userdata, setUserdata} = props;
  const localUser = JSON.parse(localStorage.getItem('memberData')); // 取得localStorage資料
  const getUserData = (usernameData,pwdData )=> {
      fetch(`http://localhost:3009/members/user/${usernameData}/${pwdData}`, {
          method: 'get',
          headers: new Headers({
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          })
      })
          .then((res)=>{
              return res.json()
          })
          .then((res)=>{
              console.log(res)
              setUserdata(res[0]);
              // console.log(userdata);
          })
  }
  useEffect(()=>{
      getUserData(localUser['username'], localUser['password'])
  },[])

  return (
      <main>
        <div className="members_all">
          <MembersLeft 
            userdata={userdata}
            setUserdata={setUserdata}
          />
          <MembersRight 
            userdata={userdata}
            setUserdata={setUserdata}/>
        </div>
      </main>
  )
}
export default withRouter(KMembers)
