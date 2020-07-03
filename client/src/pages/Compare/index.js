// 函式元件
import React, { Fragment, useState,useEffect} from 'react'
import {
  BrowserRouter as Router,
  withRouter,
  Link
} from 'react-router-dom'
import './compare.css'
import '../../assets/scss/Compare.scss'

// components
import { message } from 'antd';
// import { Pagination } from 'antd';

function Compare(props) {
    //   const{userdata,setUserdata,name,setName}= props.allprops;
    const { itemsdata, setItemsdata, itemsid, setItemsid } = props;
    // const [CompareProductData, setCompareProductData] = useState([])
    const [detailitems, setdetailitems] = useState('');
    const [currentTotalPages, setCurrentTotalPages] = useState();
    const [currentPage, setCurrentPage] = useState(1); 
    const [itemchange, setitemchange] = useState(false); 
    let [compareList,setCompareList] = useState([])
    const key = 'updatable';
    //打開會員的localstorage
    const Memberman = JSON.parse(localStorage.getItem('memberData'))|| []
    // console.log(Memberman)
    let id = Memberman.id;
    var CompareProductDataInner=[];
    const[selectValue,setSelectValue] = useState([])

    // console.log('selectValue',selectValue)

    //抓取compare的localstorage
    let comparearray = []
    const objcompare = JSON.parse(localStorage.getItem('compare'))|| []
    compareList = [...objcompare]
    // itemPrice
    console.log(compareList)
    let ascList = [...compareList]
    let descList = [...compareList]
    ascList.sort(function(a, b) {
        return a.itemPrice - b.itemPrice;
    });
    descList.sort(function(a, b) {
        return b.itemPrice - a.itemPrice;
    });
    // localStorage.setItem("compare", JSON.stringify(ascList))
    // localStorage.setItem("compare", JSON.stringify(descList))

    const handleSelect =(e)=>{
        if(e === '1'){
        //     ascList = ascList.sort(function(a, b) {
        //         return a.itemPrice - b.itemPrice;
        //     });
        // console.log('asclist', ascList)  
            compareList = ascList
            setCompareList(compareList)
        // localStorage.removeItem("compare")
        localStorage.setItem("compare", JSON.stringify(compareList))
        } else if(e === '2'){
            // descList = descList.sort(function(a, b) {
            //     return b.itemPrice - a.itemPrice;
            // });
            // console.log('desclist', descList)
            compareList = descList
            setCompareList(compareList)
            // localStorage.removeItem("compare")

            localStorage.setItem("compare", JSON.stringify(compareList))

        }

        console.log(e)
        setSelectValue(e)
    }

    //更新購物車localstorage
    const updateCartToLocalStorage = (value) => {
      const currentCart = JSON.parse(localStorage.getItem('cart')) || []
      const newCart = [...currentCart, value]
      localStorage.setItem('cart', JSON.stringify(newCart))
    }  

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


  return (
    // <Router>
      <Fragment>
        <main>
          <div className="MyCom_container">
            <div className="MyCom_select">
              <div className="MyCom_Crumb">
              {/* 麵包屑 */}
              <a href="../">首頁</a> / <a href="#">商品比較</a>
              {/* <Link to="/">首頁</Link> / <a href="#">商品比較</a> */}

              </div>
              <div>
                <select 
                defaultValue = {selectValue}
                onChange={(event)=>{
                    handleSelect(event.target.value)
                }}
                >
                  <option value="1" >按價格排序-由低到高</option>
                  <option value="2" >按價格排序-由高到低</option>
                </select>
              </div>
            </div>
            <div className="MyCom_list">
                <ul className="MyCom_pwa_r_inner">
                {/* <li> */}
                {console.log('compareList',compareList)}
                {compareList.length>0 ? (
                    <>
                    <li className="sty-1 comparecard_content_decoration" >
                            <div className="MyCom_card">
                                <div className="MyCom_item">
                                <span style={{height: 69 + 'px'}}></span>
                                <div style={{height: 99 + 'px',lineheight:99+'px'}}></div>
                                <h1 style={{height: 22 + 'px'}}>商品品牌</h1>
                                <h1 style={{height: 22 + 'px'}}>商品名稱</h1>
                                </div>
                            </div>
                            {/* <div className="context-adjust"> */}
                            <h1 style={{height: 22 + 'px'}}>商品價格</h1>
                            <h1 style={{height: 22 + 'px'}}>電池續航力</h1>
                            <h1 style={{height: 22 + 'px'}}>靈敏度</h1>
                            <h1 style={{height: 22 + 'px'}}>連結端子</h1>
                            <h1 style={{height: 22 + 'px'}}>單體驅動</h1>
                            <h1 style={{height: 88 + 'px'}}>重點特色</h1>
                            <h1 style={{height: 44 + 'px'}}>頻率響應</h1>
                            <h1 style={{height: 22 + 'px'}}>商品評等</h1>
                            {/* </div> */}
                        </li>
                    {/* )})} */}
                    {compareList.map((data,index)=>{
                    console.log(data);
                    return(
                        <li className="sty-1  comparecard-decoration" key={index}>
                        <span
                                style={{height: 40 + 'px'}} 
                                className="iconfont icon-error compare-iconfont" 
                                id={data.itemId} 
                                data-id={index}
                                onClick={()=>{        
                                const newList = [...compareList]
                                newList.splice(index, 1);
                                setCompareList(newList)
                                localStorage.setItem("compare", JSON.stringify(newList)); }}></span>
                            <div className="MyCom_card">
                                <div className="MyCom_item  sty-1">
                                <div className="compareImg">
                                <img src={`/items_img/${data.itemImg}`}/>
                                </div>
                                <div style={{height: 22 + 'px'}}></div>
                                <h3 style={{height: 22 + 'px'}}>{data.itemBrand}</h3>
                                <h3 style={{height: 22 + 'px'}}>{data.itemName}</h3>
                                </div>
                            </div>
                            <div>
                            <h4 style={{height: 22 + 'px'}}>{data.itemPrice}</h4>
                            <h4 style={{height: 22 + 'px'}}>{data.itemsEndurance}</h4>
                            <h4 style={{height: 22 + 'px'}}>{data.itemsSensitivity}</h4>
                            <h4 style={{height: 22 + 'px'}}>{data.itemsconnect}</h4>
                            <h4 style={{height: 22 + 'px'}}>{data.itemsdrive}</h4>
                            <h4 style={{height: 88 + 'px'}}>{data.itemsfeature}</h4>
                            <h4 style={{height: 44 + 'px'}}>{data.itemsfrequency}</h4>
                            <h4 style={{height: 22 + 'px'}}>{data.itemsstar}</h4>
                            </div>
                            <div className="MyCom_card_button sty-1">
                                <Link 
                                  className="MyFav_update MyCom_btn_style a-link-style"
                                  to={`/ProductDetail/${data.itemid}`}
                                >前往細節頁</Link>
                                <button className="MyFav_del MyCom_btn_style"                          
                                id={data.itemId}
                                onClick={() => {
                                updateCartToLocalStorage({
                                    id:data.itemid,
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
                    </>
                ):(
                  <div className="cart_row" >
                    <figure>
                        <img src={"/user_img/fail.gif"} alt="商品圖片"/>
                        <img src={"/user_img/fail.gif"} alt="商品圖片"/>
                        <img src={"/user_img/fail.gif"} alt="商品圖片"/>
                        <img src={"/user_img/fail.gif"} alt="商品圖片"/>
                    </figure>
                    <div className="cart_price">
                      
                    </div>
                  </div>
                )}
              {/* </li> */}
            </ul>
          {/* <div className="page"><Pagination defaultCurrent={1} total={50} /></div> */}
      </div>
          </div>
        </main>
      </Fragment>
    // </Router>
  )
}
export default withRouter(Compare)
