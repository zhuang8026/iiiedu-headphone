// 函式元件
import React, { Fragment, useState, useEffect } from 'react'
import { withRouter, useParams } from 'react-router-dom'

// components
import ProductCrumb from '../ProductCrumb'
import ProductDetailLeft from '../ProductDetail/ProductDetailLeft'
import ProductDetailRight from '../ProductDetail/ProductDetailRight'
import ProductDetailBottom from '../ProductDetail/ProductDetailBottom'

function ProductDetail(props) {
  let { id } = useParams()
  // console.log(id);
  const { userdata }=props;
  const [detaildata, setDetaildata] = useState([]);
  // console.log('detaildata-16', detaildata)

  // 商品細節資料
  useEffect(()=>{
    fetch(`http://localhost:3009/products/detail/${id}`, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
    })
    .then((response)=>{
      return response.json()
    })
    .then((response)=>{
      // console.log(response)
      setDetaildata(response);
    })
  },[])

  return (
    <Fragment>
      <main>
        <ProductCrumb />
      </main>
      <div className="Yybodyin">
        <ProductDetailLeft 
          detaildata={detaildata}
        />
        <ProductDetailRight 
          detaildata={detaildata}
          userdata={userdata}
        />
      </div>
      <div className="WiDetailBottom">
        <ProductDetailBottom
          detaildata={detaildata}
        />
      </div>
    </Fragment>
  )
}
export default withRouter(ProductDetail)
