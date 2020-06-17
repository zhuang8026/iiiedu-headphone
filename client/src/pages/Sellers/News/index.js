import React from 'react'
import { withRouter } from 'react-router-dom'
//import css
import '../../../assets/css/AliceSeller/News.css'

function News() {
  return (
    <>
      <aside class="seller-news">
        <h2>公告</h2>
        <div>
          <div>
            <img
              class="icon-size"
              src="./asset/img/index/headphones-alt-solid.svg"
              alt=""
            />
            <span>已出貨訂單</span>
          </div>
          <p>
            如之前預告，PaMu Slide mini 將於 5/31(日) 23:59
            結束早鳥優惠，價格將由 $2,490 調整至 $2,790
          </p>
        </div>
        <div>
          <div>
            <img
              class="icon-size"
              src="./asset/img/index/headphones-alt-solid.svg"
              alt=""
            />
            <span>Otis 七月徵文活動</span>
          </div>
          <p>
            「徵文送好禮，就是要你！」總價超過３５萬的行銷資源等你來拿！!
            點入查看更多👉
          </p>
        </div>
        <div>
          <div>
            <img
              class="icon-size"
              src="./asset/img/index/headphones-alt-solid.svg"
              alt=""
            />
            <span>「新型冠狀病毒」相關配套政策公告</span>
          </div>
          <p>
            （更新於：2020/4/9）因疫情影響，Otis將做以下金流相關「暫時性」調整以利賣家彈性運用資金，所有調整為疫情期間之暫時性調整，後續會再公告恢復相關作業時間及流程
          </p>
        </div>

        <div>
          <h3>FASHIONABLE LIFE WITH HEADSET</h3>
          <h6>FASHION / AUGUST 1,2020</h6>
          <img src="" alt="" />
        </div>
      </aside>
    </>
  )
}
export default withRouter(News)
