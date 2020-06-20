// 函式元件
import React, { useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

function BlogCrumb(props) {
  return (
    <>
      <div className="blog-crumb">
        <div></div>
        <Link to ="../">首頁</Link>/<Link to="#">部落格</Link>
      </div>
    </>
  )
}
export default withRouter(BlogCrumb)
