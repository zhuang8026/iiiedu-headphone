// 函式元件
import React, { useState } from 'react';

import { withRouter, Link } from 'react-router-dom';
//antd
// import { message } from 'antd';


function ProductMain(props) {
  // const { currentPage } = props;
  const [currentPage, setCurrentPage] = useState(4); // 一開始 只顯示 4page
  let maxPages = 10;
  let items = [];
  let leftSide = currentPage - 2;
  if(leftSide <= 0 ) leftSide=1;
  let rightSide = currentPage + 2;
  if(rightSide>maxPages) rightSide = maxPages;
  for (let number = leftSide ; number <= rightSide; number++) {
    items.push(
      <div key={number} className={(number === currentPage ? 'round-effect activepage' : 'round-effect')} onClick={()=>{ setCurrentPage(number)}}>
        {number}
      </div>,
    );
  }
  const nextPage = () => {
    if(currentPage<maxPages){
      setCurrentPage(currentPage+1)
    }
  }
  const prevPage = () => {
    if(currentPage>1){
      setCurrentPage(currentPage-1)
    }
  }
  return (
    <div className="flex-container">
      <div> 測試 currentPage : { currentPage } </div>
        
      <div className="paginate-ctn">
        <div className="round-effect" onClick={prevPage}> &lsaquo; </div>
        {items}
        <div className="round-effect" onClick={nextPage}> &rsaquo; </div>
      </div>
    </div>
  )
}
export default withRouter(ProductMain)
