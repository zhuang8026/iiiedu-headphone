// 函式元件
import React ,{ Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, 
    Redirect,Link, NavLink, withRouter} from "react-router-dom"
    import '../../../assets/scss/Product_Main.scss'
    import WHH8101 from '../../../assets/items_img/WH-H810-01.png'
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
                <div className="Yysearch_container">
                 <input type="text" placeholder=" search..." />
                </div>
           </div>
           <div className="Yybodyright">
               <div className="Yybodyheader">
                  <span>一共12筆結果</span>
                  <select className="Yyorder">
                            <option >按價格排序-由高到低</option>
                            <option >按價格排序-由低到高</option>
                  </select>
               </div>
             
               <div className="Yyasidebody">
                     <div className="Yyaside_pro">
                        <div className="item_image">
                            <img className="item_images" src={WHH8101}  />
                            <form className="item_imagebtnout">
                               <buttun className="item_imagebtn btn">加入購物車</buttun>
                              <buttun className="item_imagebtn2 btn">立即查看</buttun>
                            </form>
                        </div>
                        <div className="item_cover"></div>
                        <ul className="itemul">
                                <li className="pro_name">
                                    <p>GAME ONE</p>
                                    <div className="pro_new">NEW</div>
                                </li>
                             
                                <li>
                                    <div className="pro_c"></div>
                                </li>
                        </ul>
                            <p>Senheiser</p>
                            <p>$4900</p>
                     </div>
                     <div className="Yyaside_pro">
                        <div className="item_image">
                            <img className="item_images" src={WHH8101}  />
                            <form className="item_imagebtnout">
                               <buttun className="item_imagebtn btn">加入購物車</buttun>
                              <buttun className="item_imagebtn2 btn">立即查看</buttun>
                            </form>
                        </div>
                        <div className="item_cover"></div>
                        <ul className="itemul">
                                <li className="pro_name">
                                    <p>GAME ONE</p>
                                    <div className="pro_new">NEW</div>
                                </li>
                             
                                <li>
                                    <div className="pro_c"></div>
                                </li>
                        </ul>
                            <p>Senheiser</p>
                            <p>$4900</p>
                     </div>
                     <div className="Yyaside_pro">
                        <div className="item_image">
                            <img className="item_images" src={WHH8101}  />
                            <form className="item_imagebtnout">
                               <buttun className="item_imagebtn btn">加入購物車</buttun>
                              <buttun className="item_imagebtn2 btn">立即查看</buttun>
                            </form>
                        </div>
                        <div className="item_cover"></div>
                        <ul className="itemul">
                                <li className="pro_name">
                                    <p>GAME ONE</p>
                                    <div className="pro_new">NEW</div>
                                </li>
                             
                                <li>
                                    <div className="pro_c"></div>
                                </li>
                        </ul>
                            <p>Senheiser</p>
                            <p>$4900</p>
                     </div>
                     <div className="Yyaside_pro">
                        <div className="item_image">
                            <img className="item_images" src={WHH8101}  />
                            <form className="item_imagebtnout">
                               <buttun className="item_imagebtn btn">加入購物車</buttun>
                              <buttun className="item_imagebtn2 btn">立即查看</buttun>
                            </form>
                        </div>
                        <div className="item_cover"></div>
                        <ul className="itemul">
                                <li className="pro_name">
                                    <p>GAME ONE</p>
                                    <div className="pro_new">NEW</div>
                                </li>
                             
                                <li>
                                    <div className="pro_c"></div>
                                </li>
                        </ul>
                            <p>Senheiser</p>
                            <p>$4900</p>
                     </div>
                     <div className="Yyaside_pro">
                        <div className="item_image">
                            <img className="item_images" src={WHH8101}  />
                            <form className="item_imagebtnout">
                               <buttun className="item_imagebtn btn">加入購物車</buttun>
                              <buttun className="item_imagebtn2 btn">立即查看</buttun>
                            </form>
                        </div>
                        <div className="item_cover"></div>
                        <ul className="itemul">
                                <li className="pro_name">
                                    <p>GAME ONE</p>
                                    <div className="pro_new">NEW</div>
                                </li>
                             
                                <li>
                                    <div className="pro_c"></div>
                                </li>
                        </ul>
                            <p>Senheiser</p>
                            <p>$4900</p>
                     </div>
                     <div className="Yyaside_pro">
                        <div className="item_image">
                            <img className="item_images" src={WHH8101}  />
                            <form className="item_imagebtnout">
                               <buttun className="item_imagebtn btn">加入購物車</buttun>
                              <buttun className="item_imagebtn2 btn">立即查看</buttun>
                            </form>
                        </div>
                        <div className="item_cover"></div>
                        <ul className="itemul">
                                <li className="pro_name">
                                    <p>GAME ONE</p>
                                    <div className="pro_new">NEW</div>
                                </li>
                             
                                <li>
                                    <div className="pro_c"></div>
                                </li>
                        </ul>
                            <p>Senheiser</p>
                            <p>$4900</p>
                     </div>
                     <div class="pagination">
                        <a href="#">&laquo;</a>
                        <a href="#">1</a>
                        <a href="#" class="active">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">6</a>
                        <a href="#">&raquo;</a>
                      </div>
               </div>
           </div>
       </div>
      
       </>
    )

}
export default withRouter(ProductMain);