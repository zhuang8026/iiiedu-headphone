// 函式元件
import React from 'react';
import { withRouter} from 'react-router-dom';

import { message } from 'antd';

import MembersLeft from '../ComponentMembersLeft';

// 測試圖片
import visa from '../../../assets/img/visa.png';

// css
import './bankCard.scss';

function MembersBank(props) {
    const key = 'updatable';
    const {userdata, setUserdata} = props;
    console.log('userdata', userdata);


    const membersEditBankCallback = () => {
        fetch('http://localhost:3009/membersEdit/bank', {
            method: 'post',
            body:JSON.stringify({
                card:  userdata.card,
                pin: userdata.pin,
                id: userdata.id
            }),
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            })
        })
            .then(result=>result.json())
            .then(obj=>{
                console.log(obj);
                // obj.success ? message.success(`修改成功`) : message.info(`資料無改變`);
                if(obj.success) {
                    message.loading({ content: 'Loading...', key });
                    setTimeout(() => {
                        message.success({ content: '修改成功!', key, duration: 2 });
                        // props.history.push('/KMembers/MembersAdress');
                    }, 1000);
                    
                } else {
                    message.info(`資料無改變`)
                }
                
            })
    }

    return (
        <main>
            <div className="members_all">
                <MembersLeft
                    userdata = {userdata}
                    setUserdata = {setUserdata}
                />
                <div className="members_right">
                    <div className="members_right_inner">
                        {/* title */}
                        <div className="members_r_top_text">
                            <h1>我的信用卡</h1>
                            <p>管理你的檔案以保護你的帳戶</p>
                        </div>
                        {/* 主要內容 */}
                        <div className="members_pwa_r_bottom">

                            <div className="card-form">
                                {/* 信用卡 */}
                                <div className="card-list">
                                    <div className="card-item">
                                    {/* <div className="card-item -active">  */}
                                        {/* 前 */}
                                        <div className="card-item__side -front">
                                            <div className="card-item__cover">
                                                <img className="card-item__bg" src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/9.jpeg"/>
                                            </div>
                                            <div className="card-item__wrapper">
                                                <div className="card-item__top">
                                                    <img className="card-item__chip" src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"/>
                                                    <div className="card-item__type">
                                                        <img className="card-item__typeImg" src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"/>
                                                    </div>
                                                </div>
                                                <label for="cardNumber" className="card-item__number">
                                                    <span>
                                                        <div class="card-item__numberItem">1</div>
                                                    </span>
                                                    <span>
                                                        <div class="card-item__numberItem">1</div>
                                                    </span>
                                                    <span>
                                                        <div class="card-item__numberItem">1</div>
                                                    </span>
                                                </label>
                                                <div className="card-item__content">
                                                    <label for="cardName" class="card-item__info">
                                                        <div className="card-item__holder">Card Holder</div>
                                                        <div className="card-item__name">Full Name</div>
                                                    </label>
                                                    <div class="card-item__date">
                                                        <label for="cardMonth" class="card-item__dateTitle">Expires</label>
                                                        <label for="cardMonth" class="card-item__dateItem">
                                                            <span>MM</span>
                                                        </label> 
                                                        /
                                                        <label for="cardYear" class="card-item__dateItem">
                                                            <span>YY</span>
                                                        </label> 
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* 後 */}
                                        <div className="card-item__side -back">
                                            <div className="card-item__cover">
                                                <img className="card-item__bg" src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/9.jpeg"/>
                                            </div>
                                            <div class="card-item__band">

                                            </div>
                                            <div class="card-item__cvv">
                                                <div className="card-item__cvvTitle">CVV</div>
                                                <div className="card-item__cvvBand"></div>
                                                <div className="card-item__type">
                                                    <img className="card-item__typeImg" src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 信用卡表單 */}
                                <div class="card-form__inner">
                                    <div class="card-input">
                                        <label for="cardNumber" class="card-input__label">Card Number</label>
                                        <input type="text" id="cardNumber" class="card-input__input" data-ref="cardNumber" autocomplete="off"/>
                                    </div>
                                    <div class="card-input">
                                        <label for="cardName" class="card-input__label">Card Holders</label>
                                        <input type="text" id="cardName" class="card-input__input" data-ref="cardName" autocomplete="off"/>
                                    </div>
                                    <div class="card-form__row">
                                        <div class="card-form__col">
                                            <div class="card-form__group">
                                                <label for="cardMonth" class="card-input__label">Expiration Date</label>
                                                <select class="card-input__input -select" id="cardMonth" data-ref="cardDate">
                                                    <option value="" disabled selected>Month</option>
                                                    <option value="n < 10 ? '0' + n : n">
                                                        {/* {{n < 10 ? '0' + n : n}} */}
                                                    </option>
                                                </select>
                                                <select class="card-input__input -select" id="cardYear" data-ref="cardDate">
                                                    <option value="" disabled selected>Year</option>
                                                    <option value="$index + minCardYear">
                                                        {/* {{$index + minCardYear}} */}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="card-form__col -cvv">
                                            <div class="card-input">
                                                <label for="cardCvv" class="card-input__label">CVV</label>
                                                <input type="text" class="card-input__input" id="cardCvv" maxlength="4" autocomplete="off"/>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 送出按鍵 */}
                                    <button class="card-form__button">
                                        Submit
                                    </button>
                                </div>
                            </div>

                            {/* 舊樣式 */}
                            <ul className="members_pwa_r_inner">
                                <li>
                                    <div className="members_card">
                                        <img src={visa}/>
                                        <h3>VISA</h3>
                                        <span>
                                            <input 
                                                type="text" 
                                                placeholder="您的信用卡" 
                                                defaultValue={userdata.card}
                                                size="25"
                                                onChange = {(e)=>{
                                                    setUserdata({
                                                        ...userdata,
                                                        card: e.target.value
                                                    })
                                                }}
                                            />
                                        </span>
                                        <span>PIN : 
                                            <input 
                                                type="text" 
                                                placeholder="您的信用卡後三碼" 
                                                defaultValue={userdata.pin}
                                                maxLength="3"
                                                onChange = {(e)=>{
                                                    setUserdata({
                                                        ...userdata,
                                                        pin: e.target.value
                                                    })
                                                }}
                                            />
                                        </span>
                                    </div>
                                    <div className="members_card_button">
                                        <button 
                                            className="members_update men_btn_style"
                                            onClick={()=>membersEditBankCallback()}
                                        >修改</button>
                                        <button className="members_del men_btn_style">刪除</button>
                                    </div>
                                </li>
                            </ul>
                            <button className="members_add">新增</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )

}
export default withRouter(MembersBank);