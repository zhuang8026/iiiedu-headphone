import React  ,{useState, useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import { Todoli } from './config'


function SellerTodoItem() {
  const [SellerData, setSellerData] = useState([]) 
  let SellerDataInner=[];

    const SellerDataFetch =()=>{
      fetch('http://localhost:3009/sellers/list',{
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
        console.log('response', response);
          [...SellerDataInner]=response;
          setSellerData(SellerDataInner)

        console.log('SellerDataInner',SellerDataInner)
        
      })
    }

    useEffect(()=>{
      SellerDataFetch()
    },[])

  return (
    <>
         <div className="seller-todo-list">
          <h2>待辦事項清單</h2>
          <p>您的待處理事項</p>
          <ul className="seller-todo-item">
              {SellerData.map((data, index)=>{
              return(
                <>
                <li>
                  <div className="seller-num">{data.delivery_arrived}</div>
                   <h1>{data.delivery}訂單</h1>
                </li>
                </>
              )
              })}
              {Todoli.map((item)=>{
              return(
                <>
                <li>
                  <div className="seller-num" key={item.id}>{item.num}</div>
                  <h1>{item.name}</h1>
                </li>
                </>
              )
              })}
          </ul>
        </div>
    </>
  )
}
export default withRouter(SellerTodoItem)
