// 函式元件
import React, { Fragment, useState,useEffect} from 'react'
import {
  BrowserRouter as Router,
  withRouter,
} from 'react-router-dom'



// components
import { message } from 'antd';
// import { Pagination } from 'antd';

function MyFav(props) {
    //   const{userdata,setUserdata,name,setName}= props.allprops;
    const { itemsdata, setItemsdata, itemsid, setItemsid } = props;
    // const [CompareProductData, setCompareProductData] = useState([])
    // const [detailitems, setdetailitems] = useState('');
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
    const objcompare = JSON.parse(localStorage.getItem('love'))|| []
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
        localStorage.setItem("love", JSON.stringify(compareList))
        } else if(e === '2'){
            // descList = descList.sort(function(a, b) {
            //     return b.itemPrice - a.itemPrice;
            // });
            // console.log('desclist', descList)
            compareList = descList
            setCompareList(compareList)
            // localStorage.removeItem("compare")

            localStorage.setItem("love", JSON.stringify(compareList))

        }

        console.log(e)
        setSelectValue(e)
    }

    // const handleOp1 = (e)=>{
    //     setSelectValue(e)
    //     compareList = ascList
    //     setCompareList(compareList)
    // // localStorage.removeItem("compare")
    // localStorage.setItem("compare", JSON.stringify(compareList))
    // }
    // const handleOp2 = ()=>{
    //     setSelectValue(e)
    //     compareList = descList
    //     setCompareList(compareList)
    //     // localStorage.removeItem("compare")

    //     localStorage.setItem("compare", JSON.stringify(compareList))
    // }

    //更新購物車localstorage
    const updateCartToLocalStorage = (value) => {
      const currentCart = JSON.parse(localStorage.getItem('cart')) || []
      const newCart = [...currentCart, value]
      localStorage.setItem('cart', JSON.stringify(newCart))
    }  
    //更新比較功能localstorage
    const updateCompareToLocalStorage = (value) =>{
      const currentCompare = JSON.parse(localStorage.getItem('compare')) || []
      const newCompare = [...currentCompare, value]
      localStorage.setItem('compare',JSON.stringify(newCompare))

      currentCompare.map(element =>{
        if(element.itemName === value.itemName){
          window.localStorage.setItem('compare', JSON.stringify(currentCompare));
          message.warning(`商品"${element.itemName}"重複了`)
          return
        }
      });
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
                <a href="../">首頁</a> / <a href="#">我的最愛</a>
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
            <div className="MyFav_list">
                <ul className="MyFav_pwa_r_inner">
                {/* {console.log('compareList',compareList)} */}
                {compareList.length > 0 ? (
                    <Fragment>
                    {compareList.map((data,index)=>{
                      {/* console.log(data); */}
                      return(
                        <li key={index}>
                          <div className="MyFav_card">
                              <div className="MyFav_item">
                              <span 
                                className="iconfont icon-error" 
                                id={data.itemId} 
                                data-id={index}
                                onClick={()=>{        
                                  const newList = [...compareList]
                                  newList.splice(index, 1)
                                  setCompareList(newList)
                                  localStorage.setItem("love", JSON.stringify(newList)); 
                                }}
                              ></span>
                              <img src={`/items_img/${data.itemImg}`}/>
                              <h3>{data.itemsbrand}</h3>
                              <h3>{data.itemName}</h3>
                              </div>
                          </div>
                          <div><h4>{`$${data.itemPrice}`}</h4></div>
                          <div className="MyFav_card_button">
                              <button className=" MyFav_btn_style"
                              id={data.itemId} 
                              onClick={() =>{
                                message.success(`商品"${data.itemName}"加入比較`)  
                                updateCompareToLocalStorage({
                                  itemid: data.itemId,
                                  itemName:data.itemName,
                                  itemBrand: data.itemsbrand,
                                  itemImg: data.itemImg,
                                  itemPrice: data.itemPrice,
                                  created_at: data.created_at,
                                  itemQty: data.itemQty,
                                  itemsEndurance: data.itemsEndurance,
                                  itemsSensitivity: data.itemsSensitivity,
                                  itemsales: data.itemsales,
                                  itemsconnect: data.itemsconnect,
                                  itemscontent: data.itemscontent,
                                  itemsdrive: data.itemsdrive,
                                  itemsfeature: data.itemsfeature,
                                  itemsfrequency: data.itemsfrequency,
                                  itemsmains: data.itemsmains,
                                  itemsstar: data.itemsstar,
                                  itemstoreNumber: data.itemstoreNumber,
                                  itemstype: data.itemstype,
                                  itemswatertight: data.itemswatertight,
                                  itemsweight: data.itemsweight
                                })
                              }}
                              >加入比較</button>
                              <button className=" MyFav_btn_style2"                          
                                id={data.itemId}
                                onClick={() => {
                                  message.success(`商品"${data.itemName}"加入購物車`)
                                  updateCartToLocalStorage({
                                    id:data.itemid,
                                    itemName:data.itemName,
                                    itemBrand:data.itemsbrand,
                                    itemImg:data.itemImg,
                                    itemPrice:data.itemPrice,
                                    amount:1,
                                  })
                                }}
                              >加入購物車</button>
                          </div>
                        </li>
                      )
                    })}
                    </Fragment>
                ):(
                  <div className="loveError">
                  <p>目前我的最愛是空的</p>
                  <button><i class="iconfont icon-search"></i>去商店</button>
                  </div>
                )}
                
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
