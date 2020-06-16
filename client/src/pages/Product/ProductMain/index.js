// 函式元件
import React ,{ Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, 
    Redirect,Link, NavLink, withRouter} from "react-router-dom"
    import '../../../assets/scss/ProductMain.scss'


// scss
// import './_menu.scss'

function ProductMain(props) {
    return (
       <>
       <div className="Yybodyin">
           <div className="Yybodyleft">
                     <ul>
                        <li><a href="#">品牌</a></li>
                        <li><a href="#">森海爾</a></li>
                        <li><a href="#">鐵三角</a></li>
                        <li><a href="#">Akg</a></li>
                        <li><a href="#">Sony</a></li>
                     </ul>
                     <ul>
                        <li>配戴方式 </li>
                        <li> <label for="yy1"><input id="yy1" type="checkbox" value="option1"/> 入耳</label>
                        </li>
                        <li> <label for="yy2"><input id="yy2" type="checkbox" value="option2"/> 耳罩</label>
                        </li>
                     </ul>
                <div className="Yysubmit">
                   <button className="btn" type="button">送出勾選資料</button>
                    
                </div>    
           </div>
           <div className="Yybodyright">
               
           </div>
       </div>
      
       </>
    )

}
export default withRouter(ProductMain);