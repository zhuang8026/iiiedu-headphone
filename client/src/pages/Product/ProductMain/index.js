// 函式元件
import React, { useEffect, useState } from 'react';

import { withRouter, Link } from 'react-router-dom';

//antd
import { message } from 'antd';

import ProductMainDrtail from '../ProductMainDrtail';
import Pagination from '../Pagination';

function ProductMain(props) {
  const { itemsdata, setItemsdata, itemsid, setItemsid, setlovechange, setcompareschange, setcartchange} = props;
  const [detailitems, setdetailitems] = useState('');
  const [currentTotalPages, setCurrentTotalPages] = useState(); // 總page
  const [currentPage, setCurrentPage] = useState();             // 此刻的頁數
  const [itemchange, setitemchange] = useState(false); 
  const [itemAll, setitemAll] = useState([]); 
  const [howManyTotal, sethowManyTotal] = useState({});

  const key = 'updatable';
  let typedata = props.match.params.type;

  // 加入購物車
  const updateCartToLocalStorage = (value) => {
    // const Memberman = JSON.parse(localStorage.getItem('memberData'))|| []
    // console.log(Memberman)
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []
    const newCart = [...currentCart, value]
    localStorage.setItem('cart', JSON.stringify(newCart))

    setcartchange(newCart);
  }

  // 加入比較
  const updateCompareToLocalStorage = (value) => {
    const currentCompare = JSON.parse(localStorage.getItem('compare')) || []
    const newcCompare = [...currentCompare, value]
    localStorage.setItem('compare', JSON.stringify(newcCompare))
    
    currentCompare.map(element => {
      if(element.itemName === value.itemName){
        window.localStorage.setItem('compare', JSON.stringify(currentCompare));
        message.warning(`商品"${element.itemName}"重複了`)
        return 
      }
    });
    
    setcompareschange(newcCompare)
  }
  const currentLove = JSON.parse(localStorage.getItem('love')) || []
  // 加入最愛
  const updateLoveToLocalStorage = (value) => {
    const newcLove = [...currentLove, value]
    localStorage.setItem('love', JSON.stringify(newcLove))

    currentLove.map(element => {
      if(element.itemName === value.itemName){
        window.localStorage.setItem('love', JSON.stringify(currentLove));
        message.warning(`商品"${element.itemName}"重複了`)
        return 
      }
    });

    setlovechange(newcLove)

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
            // console.log(res)
            setdetailitems(res)
        })
  }
  
  // 模糊搜尋
  const fuzzySearch = ( data )=> {
    // console.log(data)
    var params = new URLSearchParams();
    params.append('getname', data);
    // console.log(params.toString());
    // console.log(params.get('getname'));
    let getname = params.get('getname') || ''

    fetch(`http://localhost:3009/products/list/${getname}`, {
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
          // console.log(res)
          setItemsdata(res)
          // setdetailitems(res)
      })
  }

  // 點擊 css 樣式變換
  const itemsChangeFunctionTrue =()=>{
    setitemchange(true);
    let Yyaside_pro = document.getElementsByClassName('Yyaside_pro');
    for(let i=0; i<Yyaside_pro.length; i++){
      let s = Yyaside_pro[i];
      s.classList.add('Yyaside_pro_change');
    }
  }

  // 點擊 css 樣式變換
  const itemsChangeFunctionFalse =()=>{
    setitemchange(false);
    let Yyaside_pro = document.getElementsByClassName('Yyaside_pro');
    for(let i=0; i<Yyaside_pro.length; i++){
      let s = Yyaside_pro[i];
      s.classList.remove('Yyaside_pro_change');
    }
  }

  // 點擊 overlay 出現（細節頁）
  const addCsstyle =() =>{
    let quick_view_modal = document.getElementsByClassName('items-quick-view-modal')[0];
    let items_wrapper = document.getElementsByClassName('items-wrapper')[0];
    quick_view_modal.classList.add('quick_view_modal_open');
    items_wrapper.classList.add('items_wrapper_open');

  }

  // 細節頁面點擊出現
  useEffect(()=>{
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

  // 商品數量
  useEffect(()=>{
    fetch("http://localhost:3009/products/brand", {
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
      sethowManyTotal(response);
    })
  },[])
  
  // 分頁 點擊
  useEffect(()=>{
    if(typedata) return

      fetch(`http://localhost:3009/products/listpage/${currentPage}`,  {
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
        // console.log(response)
        setItemsdata(response.rows)
        setCurrentTotalPages(response.totalPages) // 總page
        setCurrentPage(response.page)             // 此刻的頁數
      })
  },[currentPage])

  // 篩選 點擊（menu）
  useEffect(()=>{
    if(typedata) {
      message.loading({ content: 'Loading...', key });
      setItemsdata([])
      // console.log(itemsdata);
      setTimeout(() => {
        message.success({ content: '修改成功!', key, duration: 1 });
        fetch(`http://localhost:3009/products/${typedata}/${currentPage}`,  {
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
          // console.log(response.rows)
          setItemsdata(response.rows)
          setCurrentTotalPages(response.totalPages) // 總page
          setCurrentPage(response.page)             // 此刻的頁數
          setitemAll(response);
        })
      }, 1000);
    }
    
  },[typedata, currentPage])

  return (
    <>
      <div className="Yybodyin">
        
        {/* 左側menu */}
        <div className="Yybodyleft">
          <div className="Yybrand">
              <div className="Yywearstyle">BRAND</div>
              <ul className="Yybrand_ul">
                <li><Link to='/YyProduct/AUDIOTECHNICA'> AUDIOTECHNICA ({howManyTotal.audioTechnica}) </Link></li>
                <li><Link to='/YyProduct/AKG'> AKG ({howManyTotal.AKG}) </Link></li>
                <li><Link to='/YyProduct/BANGOLUFSEN'> BANGOLUFSEN ({howManyTotal.BangOlufsen}) </Link></li>
                <li><Link to='/YyProduct/FINAL'> FINAL ({howManyTotal.Final}) </Link></li>
                <li><Link to='/YyProduct/GRADO'> GRADO ({howManyTotal.Grado}) </Link></li>
                <li><Link to='/YyProduct/SHURE'> SHURE ({howManyTotal.Shure}) </Link></li>
                <li><Link to='/YyProduct/SONY'> SONY ({howManyTotal.SONY}) </Link></li>
                <li><Link to='/YyProduct/SENHEIER'> SENHEIER ({howManyTotal.Senheier}) </Link></li>
              </ul>
          </div>
        
          <div className="Yysearch_container">
            <input 
              type="search" 
              placeholder=" search..." 
              id="fuzzySearch" 
              onKeyUp={ (event)=>{ fuzzySearch(event.target.value) } }
              onChange={ (event)=>{ fuzzySearch(event.target.value) } }
            />
            <button>
              <i className="iconfont icon-search"></i>
            </button>
          </div>
        </div>

        {/* 右側商品 */}
        <div className="Yybodyright">
          <div className="Yybodyheader">
            <span>SHOWING 1–16 OF {itemAll.totalRows} RESULTS</span>
            <div className="item_change">
            {itemchange ? (<div className="item_css_change" onClick={()=>{itemsChangeFunctionFalse()}}> 
                <span className="iconfont icon-more_1"></span>
              </div>) : (<div className="item_css_change" onClick={()=>{itemsChangeFunctionTrue()}}> 
                <span className="iconfont icon-more_2"></span>
              </div>)}
              {/* <div className="item_css_change" onClick={()=>{itemsChangeFunction()}}> 
                <span className="iconfont icon-more_1"></span>
              </div> */}
              <select className="Yyorder">
                <option value="high">Price: Low to High</option>
                <option value="low">Price: High to Low</option>
              </select>
            </div>
          </div>

          <ProductMainDrtail 
            detailitems={detailitems}
          />

          <div className="Yyasidebody">
            {itemsdata.map((data, index)=>{
              {/* console.log(itemsdata) */}
              return(
                <div className="Yyaside_pro" key={index}>
                    <div className="item_image">
                      <img className="item_img" src={`/items_img/${data.itemImg}`} />
                      <div className="item_btn_inner_all">
                        <div className="item_btn_inner">
                          {/* <button className="item_add item_btn"btn-navy btn-fill-vert-o */}
                          <button className="item_btn_add btn_navy_add btn_fill_vert_add"
                            id={data.itemId}
                            onClick={() => {
                              message.success(`商品"${data.itemName}"加入購物車`)
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
                            className="item_btn_add btn-navy_s btn-fill-vert-o_s item_btn_search" 
                            id={data.itemId} 
                            onClick={e =>{
                              setItemsid(e.target.id)  
                              goToDetail(e.target.id)
                              // props.history.push(`/ProductDetail/${e.target.id}`)
                              addCsstyle()
                            }}
                          >立即查看</button>
                          <button 
                            className="item_btn_add btn-navy_s btn-fill-vert-o_s"
                            onClick={() => {
                              message.success(`商品"${data.itemName}"加入最愛`)
                              updateLoveToLocalStorage({
                                itemid: `${data.itemId}`,
                                itemName:`${data.itemName}`,
                                itemBrand:`${data.itemsbrand}`,
                                itemImg:`${data.itemImg}`,
                                itemPrice:`${data.itemPrice}`,
                              })
                            }}
                          >加入最愛</button>
                          <button 
                            className="item_btn_add btn-navy_s btn-fill-vert-o_s"
                            onClick={() => {
                              message.success(`商品"${data.itemName}"加入比較`)
                              updateCompareToLocalStorage({
                                itemid: `${data.itemId}`,
                                itemName:`${data.itemName}`,
                                itemBrand:`${data.itemsbrand}`,
                                itemImg:`${data.itemImg}`,
                                itemPrice:`${data.itemPrice}`,
                              })
                            }}
                          >加入比較</button>
                        </div>
                      </div>
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
                  
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Pagination 
        currentTotalPages={currentTotalPages}       // 總page
        setCurrentTotalPages={setCurrentTotalPages} // 總page
        currentPage={currentPage}                   // 此刻的頁數
        setCurrentPage={setCurrentPage}             // 此刻的頁數
      />
    </>
  )
}
export default withRouter(ProductMain)