// 函式元件
import React, { useEffect,useState } from 'react';

import { withRouter, Link } from 'react-router-dom';
//antd
// import { message } from 'antd';

function ProductMain(props) {
  const [mycart, setMycart] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const updateCartToLocalStorage = (value) => {
    // 開啟載入指示
    //setDataLoading(true)
    const Memberman = JSON.parse(localStorage.getItem('memberData'))|| []
    console.log(Memberman)
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []
    const newCart = [...currentCart, value]
    localStorage.setItem('cart', JSON.stringify(newCart))
  }


  const { itemsdata, setItemsdata, itemsid, setItemsid } = props;

  console.log('itemsid:', itemsid) // text button id 


  
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
  },[])

  // const onChange = (event) => {
  //   console.log('radio checked', event.target.value)
  // }
  return (
    <>
      <div className="Yybodyin">
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
          
        {/* <form method="get" action="">
          <div class="price_slider_wrapper">
              <div class="price_slider_amount" data-step="10">
              <input type="text" id="min_price" name="min_price" value="10" data-min="10" placeholder="Min price" />
              <input type="text" id="max_price" name="max_price" value="300" data-max="300" placeholder="Max price" />
              <button type="submit" class="button">Filter</button>
              <div class="price_label" >
                Price: <span class="from"></span> &mdash; <span class="to"></span>
              </div>
              <div class="clear"></div>
            </div>
          </div>
        </form> */}
        
          <div className="Yysearch_container">
            <input type="text" placeholder=" search..." />
            <button>
              <i class="iconfont icon-search"></i>
            </button>
          </div>
        </div>
        <div className="Yybodyright">
          <div className="Yybodyheader">
            <span>SHOWING 1–12 OF 130 RESULTS</span>
            <select className="Yyorder">
              <option value="high">Price: Low to High</option>
              <option value="low">Price: High to Low</option>
            </select>
          </div>

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
                        <button className="item_btn_an_s btn-navy_s btn-fill-vert-o_s">加入最愛</button>
                        <button 
                          className="item_btn_an_s btn-navy_s btn-fill-vert-o_s" 
                          id={data.itemId} 
                          onClick={e =>{
                            setItemsid(e.target.id)  
                            goToDetail(e.target.id)
                            props.history.push(`/ProductDetail/${e.target.id}`)
                          }}
                        >立即查看</button>
                      </div>
                    </div>
                </div>
              )
            })}
            
  
            {/* <div class="Yypagination">
              <Pagination simple defaultCurrent={2} total={50} />
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}
export default withRouter(ProductMain)
