// 函式元件
import React, { Fragment, useState,useEffect} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
  NavLink,
  withRouter,
} from 'react-router-dom'


// components
import { message } from 'antd';
// import { Pagination } from 'antd';

function MyFav(props) {
      const{userdata,setUserdata,name,setName}= props.allprops;
    const { itemsdata, setItemsdata, itemsid, setItemsid } = props;
    const [MyFavProductData, setMyFavProductData] = useState([])
    const [detailitems, setdetailitems] = useState('');
    const [currentTotalPages, setCurrentTotalPages] = useState();
    const [currentPage, setCurrentPage] = useState(1); 
    const [itemchange, setitemchange] = useState(false); 
    let [loveList,setloveList] = useState([])
    const key = 'updatable';
    //打開會員的localstorage
    const Memberman = JSON.parse(localStorage.getItem('memberData'))|| []
    // console.log(Memberman)
    let id = Memberman.id;
    var MyFavProductDataInner=[];

    //抓取compare的localstorage
    let MyFavarray = []
    const objlove = JSON.parse(localStorage.getItem('love'))|| []
    loveList = [...objlove]

    //更新購物車localstorage
    const updateCartToLocalStorage = (value) => {
      const currentCart = JSON.parse(localStorage.getItem('cart')) || []
      const newCart = [...currentCart, value]
      localStorage.setItem('cart', JSON.stringify(newCart))
    }  
    //取得該會員的比較資料
    // const MyFavProductDataFetch =()=>{
    //     fetch('http://localhost:3009/compare/listCompareUserProduct',{
    //       method: 'post',
    //       headers: new Headers({
    //           'Accept': 'application/json',
    //           'Content-Type': 'application/json',
    //       }),
    //       body: JSON.stringify({
    //         id: id
    //       })
    //   })
    //     .then(response=>{
    //       return response.json() })
    //     .then(response=>{
    //       console.log('response', response);
    //        [...CompareProductDataInner]=response;
    //       setCompareProductData(CompareProductDataInner)
    //       console.log('CompareProudctDataInner',CompareProductDataInner)
          
    //     })
    //   }
    
      // useEffect(()=>{
      //   CompareProductDataFetch()
      // },[])
    
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
  
    useEffect(()=>{
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
          setCurrentTotalPages(response.totalPages) //總page
          setCurrentPage(response.page) //此刻的頁數
        })
  
            // let quick_view_modal = document.getElementsByClassName('items-quick-view-modal')[0];
            // let items_close_head = document.getElementsByClassName('items-close-head')[0];
            // let items_wrapper = document.getElementsByClassName('items-wrapper')[0];
            // let items_quick_view_overlay = document.getElementsByClassName('items-quick-view-overlay')[0];
            // items_quick_view_overlay.addEventListener('click', () => {
            // quick_view_modal.classList.remove('quick_view_modal_open')
            // items_wrapper.classList.remove('items_wrapper_open')
            // })
            // items_close_head.addEventListener('click', () => {
            // quick_view_modal.classList.remove('quick_view_modal_open')
            // items_wrapper.classList.remove('items_wrapper_open')
            // })
  
    },[currentPage])
  
    let typedata = props.match.params.type;
    useEffect(()=>{
      // 左側 menu 單選按鍵
      if(typedata) {
        message.loading({ content: 'Loading...', key });
        setItemsdata([])
        console.log(itemsdata);
        setTimeout(() => {
          message.success({ content: '修改成功!', key, duration: 1 });
          fetch(`http://localhost:3009/products/${typedata}`,  {
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
            console.log(response)
            setItemsdata(response)
            // setCurrentTotalPages(response.totalPages) //總page
            // setCurrentPage(response.page) //此刻的頁數
          })
        }, 1000);
      }
      
    },[typedata])

    // const handleDelete = (e,id)=>{
    //     compareList.splice(compareList.indexOf(index), 1);
    //     setCompareList(compareList)
    //     localStorage.setItem("compare", JSON.stringify(compareList)); 
    //     }
  return (
    <Router>
      <Fragment>
        <main>
          <div className="MyFav_container">
            <div className="MyFav_select">
              <div className="MyFav_Crumb">
              {/* 麵包屑 */}
              <a href="../">首頁</a> / <a href="#">我的最愛</a>
              </div>
              <div>
                <select >
                  <option>按價格排序-由低到高</option>
                  <option>按價格排序-由高到低</option>
                </select>
              </div>
            </div>
            <div className="MyFav_list">
        <ul className="MyFav_pwa_r_inner">
        {
        loveList ? (
            <Fragment>
            {loveList.map((data,index)=>{
            return(
          <li key={index}>
                <div className="MyFav_card">
                    <div className="MyFav_item">
                      <span className="iconfont icon-error" 
                    id={data.itemId} 
                    onClick={(index)=>{        
                    loveList.splice(loveList.indexOf(index), 1);
                    setloveList(loveList)
                    localStorage.setItem("love", JSON.stringify(loveList)); }}></span>
                      <img src={`/items_img/${data.itemImg}`}/>
                      <h3>{data.itemsbrand}</h3>
                      <h3>{data.itemName}</h3>
                    </div>
                </div>
                <div><h4>{data.itemPrice}</h4></div>
                <div className="MyFav_card_button">
                    <button className="MyFav_update MyFav_btn_style"
                    id={data.itemId} 
                    onClick={e =>{
                      setItemsid(e.target.id)  
                      // goToDetail(e.target.id)
                      // addCsstyle()
                      props.history.push(`/ProductDetail/${e.target.id}`)
                    }}>加入比較</button>
                    <button className="MyFav_del MyFav_btn_style"                          
                    id={data.itemId}
                    onClick={() => {
                      updateCartToLocalStorage({
                        id: data.itemId,
                        itemName:data.itemName,
                        itemBrand:data.itemsbrand,
                        itemImg:data.itemImg,
                        itemPrice:data.itemPrice,
                        amount:1,
                        })
                      }}>加入購物車</button>
                </div>
            </li>
      )})}
                        </Fragment>
                            ) : (
                                <li>
                                  55555555
                                </li>
                            )
                        }
  
          </ul>
          {/* <div className="page"><Pagination defaultCurrent={1} total={50} /></div> */}
      </div>
          </div>
        </main>
      </Fragment>
    </Router>
  )
}
export default withRouter(MyFav)
