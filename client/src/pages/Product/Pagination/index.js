// 函式元件
import React, { useState } from 'react';

import { withRouter, Link } from 'react-router-dom';
//antd
// import { message } from 'antd';


function ProductMain(props) {
  const { currentTotalPages, currentPage, setCurrentPage } = props;
  console.log('currentTotalPages',currentTotalPages)
  console.log('currentPage',currentPage) //此刻的頁數

  let maxPages = currentTotalPages; // totalPages 一共幾頁
  let items = [];
  let leftSide = currentPage - 1;
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
