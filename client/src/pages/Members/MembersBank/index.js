// 函式元件
import React, { useState } from 'react';
import { withRouter} from 'react-router-dom';

import { message } from 'antd';

import MembersLeft from '../ComponentMembersLeft';

// 測試圖片
import visa from '../../../assets/img/visa.png';

// css
import './bankCard.scss';

function MembersBank(props) {
    const key = 'updatable';
    // 父層hooks
    const {userdata, setUserdata} = props;
    const [cardUser, setCardUser] = useState({});

    // 自用hooks
    const [currentCardBackground, setCurrentCardBackground] = useState(Math.floor(Math.random()* 25 + 1))
    // console.log('cardUser', cardUser);
    // console.log('userdata.card', 5234555588888888, typeof(5234555588888888));
    // console.log('userdata.card.String', String(userdata.card).split(''));


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

    const cardCvvCallback = (event) =>{
        let cardItem = document.getElementsByClassName('card-item')[0];
        cardItem.classList.toggle('-active');
    }


    // function replacer(match, p1, p2, p3, p4, offset, string) {
    //     return [p1, p2, p3, p4].join(' ');
    // }
    // 輸出 'abc - 12345 - #$*%'
    // console.log('abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer));

    const cardNameCallback =(data) =>{
        // console.log('cardNameCallback:',replacer(/([^\d]*)(\d*)([^\w]*)/, data))
        // console.log(data.replace(/\D/g, '').replace(/(\s)/g, '').replace(/(\d{4})/g, '$1 ').replace(/\s*$/, ''))
        let cardNumber = data.replace(/\D/g, '').replace(/(\s)/g, '').replace(/(\d{4})/g, '$1 ').replace(/\s*$/, '')
        setUserdata({
            ...userdata,
            card: cardNumber
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
                                                <img className="card-item__bg" src={`/card_img/${currentCardBackground}.jpeg`}/>
                                            </div>
                                            <div className="card-item__wrapper">
                                                <div className="card-item__top">
                                                    <img className="card-item__chip" src={`/card_img/chip.png`}/>
                                                    <div className="card-item__type">
                                                        {
                                                            (String(userdata.card).match(new RegExp("^44"))?(
                                                                <img className="card-item__typeImg" src={`/card_img/visa.png`}/>
                                                            ):(
                                                                (String(userdata.card).match(new RegExp("^33"))?(
                                                                    <img className="card-item__typeImg" src={`/card_img/mater.png`}/>
                                                                ):(
                                                                    <> </>
                                                                ))
                                                            ))
                                                        }
                                                        {/* <img className="card-item__typeImg" src={`/card_img/visa.png`}/> */}
                                                    </div>
                                                </div>
                                                <label for="cardNumber" className="card-item__number">
                                                    {String(userdata.card).split('').map((data, index)=>{
                                                        return(
                                                            <span>
                                                                <div class="card-item__numberItem">{data}</div>
                                                            </span>
                                                        )
                                                    })}
                                                    {/* <span>
                                                        <div class="card-item__numberItem">{userdata.card}</div>
                                                    </span> */}

                                                </label>
                                                <div className="card-item__content">
                                                    <label for="cardName" class="card-item__info">
                                                        <div className="card-item__holder">Card Holder</div>
                                                        <div className="card-item__name">{cardUser.cardName?cardUser.cardName : 'Full Name'}</div>
                                                    </label>
                                                    <div class="card-item__date">
                                                        <label for="cardMonth" class="card-item__dateTitle">Expires</label>
                                                        <label for="cardMonth" class="card-item__dateItem">
                                                            <span>{cardUser.Month ? cardUser.Month:'MM'}</span>
                                                        </label> 
                                                        /
                                                        <label for="cardYear" class="card-item__dateItem">
                                                            <span>{cardUser.Year ? cardUser.Year:'YY'}</span>
                                                        </label> 
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* 後 */}
                                        <div className="card-item__side -back">
                                            <div className="card-item__cover">
                                                <img className="card-item__bg" src={`/card_img/${currentCardBackground}.jpeg`}/>
                                            </div>
                                            <div class="card-item__band">

                                            </div>
                                            <div class="card-item__cvv">
                                                <div className="card-item__cvvTitle">CVV</div>
                                                <div className="card-item__cvvBand">{userdata.pin}</div>
                                                <div className="card-item__type">
                                                    {
                                                        (String(userdata.card).match(new RegExp("^44"))?(
                                                            <img className="card-item__typeImg" src={`/card_img/visa.png`}/>
                                                        ):(
                                                            (String(userdata.card).match(new RegExp("^33"))?(
                                                                <img className="card-item__typeImg" src={`/card_img/mater.png`}/>
                                                            ):(
                                                                <> </>
                                                            ))
                                                        ))
                                                    }
                                                    {/* <img className="card-item__typeImg" src={`/card_img/visa.png`}/> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 信用卡表單 */}
                                <div class="card-form__inner">
                                    <div class="card-input">
                                        <label for="cardNumber" class="card-input__label">Card Number</label>
                                        <input 
                                            type="text" 
                                            id="cardNumber" 
                                            class="card-input__input" 
                                            data-ref="cardNumber" 
                                            maxLength="16"
                                            autocomplete="off"
                                            placeholder="EX: 4444 5555 6666 7777"
                                            onChange = {(event)=>{
                                                cardNameCallback(event.target.value);
                                                // setUserdata({
                                                //     ...userdata,
                                                //     card: event.target.value
                                                // })
                                            }}
                                            />
                                    </div>
                                    <div class="card-input">
                                        <label for="cardName" class="card-input__label">Card Holders</label>
                                        <input 
                                            type="text" 
                                            id="cardName" 
                                            class="card-input__input"
                                            data-ref="cardName" 
                                            autocomplete="off"
                                            placeholder="EX: WANG XIAO MING"
                                            onChange = {(event)=>{
                                                setCardUser({
                                                    ...cardUser,
                                                    cardName:event.target.value
                                                })
                                            }}
                                        />
                                    </div>
                                    <div class="card-form__row">
                                        <div class="card-form__col">
                                            <div class="card-form__group">
                                                <label for="cardMonth" class="card-input__label">Expiration Date</label>
                                                <select 
                                                    class="card-input__input -select" 
                                                    id="cardMonth" 
                                                    data-ref="cardDate"
                                                    // defaultValue={cardUser.Month}
                                                    onChange = {(event)=>{
                                                        console.log(event)
                                                        setCardUser({
                                                            ...cardUser,
                                                            Month:event.target.value
                                                        })
                                                    }}
                                                >
                                                    <option value="00" disabled selected>Month</option>
                                                    <option value="01">01</option>
                                                    <option value="02">02</option>
                                                    <option value="03">03</option>
                                                    <option value="04">04</option>
                                                    <option value="05">05</option>
                                                    <option value="06">06</option>
                                                    <option value="07">07</option>
                                                    <option value="08">08</option>
                                                    <option value="09">09</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                </select>
                                                <select 
                                                    class="card-input__input -select" 
                                                    id="cardYear" 
                                                    data-ref="cardDate"
                                                    onChange = {(event)=>{
                                                        console.log(event)
                                                        setCardUser({
                                                            ...cardUser,
                                                            Year:event.target.value
                                                        })
                                                    }}
                                                >
                                                    <option value="0000" disabled selected>Year</option>
                                                    <option value="25">2025</option>
                                                    <option value="24">2024</option>
                                                    <option value="23">2023</option>
                                                    <option value="22">2022</option>
                                                    <option value="21">2021</option>
                                                    <option value="20">2020</option>
                                                    <option value="19">2019</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="card-form__col -cvv">
                                            <div class="card-input">
                                                <label for="cardCvv" class="card-input__label">CVV</label>
                                                <input 
                                                    type="text" 
                                                    class="card-input__input" 
                                                    id="cardCvv" 
                                                    maxlength="3" 
                                                    autocomplete="off"
                                                    placeholder="EX: 000"
                                                    onChange={
                                                        (event)=>{ 
                                                            setUserdata({
                                                                ...userdata,
                                                                pin: event.target.value
                                                            })
                                                        }
                                                    }
                                                    onBlur={
                                                        (event)=>{
                                                            cardCvvCallback(event) 
                                                        }
                                                    }
                                                    onClick={
                                                        (event)=>{
                                                            cardCvvCallback(event) 
                                                        }
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* 送出按鍵 */}
                                    <button 
                                        class="card-form__button"
                                        onClick={()=>membersEditBankCallback()}
                                    >Submit</button>
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