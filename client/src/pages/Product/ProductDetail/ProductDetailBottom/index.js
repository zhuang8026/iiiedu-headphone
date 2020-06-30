// 函式元件
import React, { useState } from 'react';
import {withRouter} from 'react-router-dom'

function ProductDetailBottom(props) {

  return (
    <div className="ProductDetailBottom">
      <div class="card">
        <input className="h2" type="text" defaultValue="MFEE0706NICE"/>
        <i class="fas fa-arrow-right"></i>
        <p>Discount code copy!</p>
        <div class="pic"></div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div class="social">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-github"></i>
        </div>
        <button>
        </button>
      </div>
    </div>
  )

};
export default withRouter(ProductDetailBottom)
