// 函式元件
import React, { useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

function BlogCrumb(props) {
  return (
    <>
      <div className="blog-crumb">
        <div></div>
        <a href="../">首頁</a>/<a href="#">部落格</a>
      </div>
    </>
  )
}
export default withRouter(BlogCrumb)
