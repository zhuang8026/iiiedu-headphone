// 函式元件
import React from 'react';
import { withRouter } from 'react-router-dom';

// components
import ProductCrumb from './ProductCrumb';
import ProductMain from './ProductMain';

function YyProduct(props) {
    const { itemsdata, setItemsdata, itemsid, setItemsid,setlovechange, setcompareschange, setcartchange } = props;
    return (
        <main>
          <ProductCrumb />
          <ProductMain 
            itemsdata = {itemsdata}
            setItemsdata = {setItemsdata}
            itemsid = {itemsid}
            setItemsid = {setItemsid}
            setlovechange={setlovechange}
            setcompareschange={setcompareschange}
            setcartchange={setcartchange}
          />
        </main>
      )

}
export default withRouter(YyProduct);