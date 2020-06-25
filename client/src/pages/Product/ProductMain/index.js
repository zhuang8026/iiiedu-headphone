// 函式元件
import React, { useEffect,useState } from 'react';

import { withRouter, Link } from 'react-router-dom';
//antd
// import { message } from 'antd';

import ProductMainDrtail from '../ProductMainDrtail';

function ProductMain(props) {
  const updateCartToLocalStorage = (value) => {
    // const Memberman = JSON.parse(localStorage.getItem('memberData'))|| []
    // console.log(Memberman)
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []
    const newCart = [...currentCart, value]
    localStorage.setItem('cart', JSON.stringify(newCart))
  }


  const { itemsdata, setItemsdata, itemsid, setItemsid } = props;

  console.log('itemsid:', itemsid) // text button id 

  // 點擊 css 樣式變換
  const itemsChangeFunction =()=>{
    
  }
  
  const goToDetail = ( id )=> {
    fetch(`http://localhost:3009/products/detail/${id}`, {
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
            // setUserdata(res[0]);
            // console.log(userdata);
        })
  }
  
  const addCsstyle =() =>{
    let quick_view_modal = document.getElementsByClassName('items-quick-view-modal')[0];
    let items_wrapper = document.getElementsByClassName('items-wrapper')[0];
    quick_view_modal.classList.add('quick_view_modal_open');
    items_wrapper.classList.add('items_wrapper_open');
  }

  useEffect(()=>{
      goToDetail(itemsid)
      fetch('http://localhost:3009/products/listpage/1',  {
          method: 'get',
          headers: new Headers({
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          }),
      })
      .then((response)=>{
          return response.json()
      })
      .then((response)=>{
        console.log(response.rows)
        setItemsdata(response.rows)
      })

      let quick_view_modal = document.getElementsByClassName('items-quick-view-modal')[0];
      let items_close_head = document.getElementsByClassName('items-close-head')[0];
      let items_wrapper = document.getElementsByClassName('items-wrapper')[0];
      let items_quick_view_overlay = document.getElementsByClassName('items-quick-view-overlay')[0];
      items_quick_view_overlay.addEventListener('click', () => {
        quick_view_modal.classList.remove('quick_view_modal_open')
        items_wrapper.classList.remove('items_wrapper_open')
      })
      items_close_head.addEventListener('click', () => {
        quick_view_modal.classList.remove('quick_view_modal_open')
        items_wrapper.classList.remove('items_wrapper_open')
      })

  },[])

  return (
    <>
      <div className="Yybodyin">
        
        {/* 左側menu */}
        <div className="Yybodyleft">
          <div className="Yybrand">
              <div className="Yywearstyle">BRAND</div>
              <ul className="Yybrand_ul">
                <li><Link to='/'> AUDIOTECHNICA (1) </Link></li>
                <li><Link to='/'> AKG (1) </Link></li>
                <li><Link to='/'> BANGOLUFSEN (1) </Link></li>
                <li><Link to='/'> FINAL (1) </Link></li>
                <li><Link to='/'> GRADO (1) </Link></li>
                <li><Link to='/'> SHURE (1) </Link></li>
                <li><Link to='/'> SONY (1) </Link></li>
                <li><Link to='/'> SENHEIER (1) </Link></li>
              </ul>
          </div>
        
          <div className="Yysearch_container">
            <input type="text" placeholder=" search..." />
            <button>
              <i class="iconfont icon-search"></i>
            </button>
          </div>
        </div>

        {/* 右側商品 */}
        <div className="Yybodyright">
          <div className="Yybodyheader">
            <span>SHOWING 1–12 OF 130 RESULTS</span>
            <div className="item_change">
              <div className="item_css_change" onClick={()=>{
                itemsChangeFunction()
              }}> 
                <span class="iconfont icon-more_1"></span>
              </div>
              <select className="Yyorder">
                <option value="high">Price: Low to High</option>
                <option value="low">Price: High to Low</option>
              </select>
            </div>
          </div>

          <ProductMainDrtail/>

          <div className="Yyasidebody">
            {itemsdata.map((data, index)=>{
              return(
                <div className="Yyaside_pro" key={index}>
                  <div className="item_image">
                    <img className="item_img" src={`/items_img/${data.itemImg}`} />
                  </div>
                  <ul className="item_inner">
                    <li className="item_inner_li item_inner_flex">
                      <p>{data.itemName}</p>
                      {/* <p className="item_inner_new">NEW</p> */}
                      <i className="item_inner_like iconfont icon-like"></i>
                    </li>
                    <li className="item_inner_li">
                      <p className="">{data.itemsbrand}</p>
                    </li>
                    <li className="item_inner_li">
                      <p className="">$ {data.itemPrice}.00</p>
                    </li>
                  </ul>
                  
                  <div className="item_btn_inner_all">
                      <div className="item_btn_inner">
                        {/* <button className="item_add item_btn"btn-navy btn-fill-vert-o */}
                        <button className="item_btn_an btn-navy btn-fill-vert-o"
                          id={data.itemId}
                          onClick={() => {
                          updateCartToLocalStorage({
                              id: `${data.itemId}`,
                              itemName:`${data.itemName}`,
                              itemBrand:`${data.itemsbrand}`,
                              itemImg:`${data.itemImg}`,
                              itemPrice:`${data.itemPrice}`,
                              amount:1,
                              })
                            }}
                        >加入購物車</button>
                        <button 
                          className="item_btn_an btn-navy_s btn-fill-vert-o_s item_btn_search" 
                          id={data.itemId} 
                          onClick={e =>{
                            setItemsid(e.target.id)  
                            goToDetail(e.target.id)
                            // props.history.push(`/ProductDetail/${e.target.id}`)
                            addCsstyle()
                          }}
                        >立即查看</button>
                        <button className="item_btn_an btn-navy_s btn-fill-vert-o_s">加入最愛</button>
                        <button className="item_btn_an btn-navy_s btn-fill-vert-o_s">加入比較</button>
                      </div>
                    </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
export default withRouter(ProductMain)
