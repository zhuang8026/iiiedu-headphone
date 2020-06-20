import React ,{ useEffect } from 'react';
import {withRouter } from "react-router-dom"

// scss
// import './BottomIG.scss';

import {StoreImg} from './config';

function OurConnected(props) {
    useEffect(()=>{
    },[])
    
    return (
        <div className="store_all">
                {/* 熱門標題 */}
            <div className="true_title">
                <h2>LET’S GET CONNECTED</h2>
                <p>True wireless earbuds engineered for superior calls & music</p>
            </div>
            <div className="store_inner">
                {StoreImg.map((data, index)=>{
                    return(
                        <div className="cardContainer inactive" key={index}>
                            <div className="store_card">
                                <div className="store_side store_front">
                                <div className="store_img">
                                    <img src={data.picUrl} alt="產品圖片"/>
                                </div>
                                <div className="store_info">
                                    <h2>{data.h2text}</h2>
                                    <p>{data.ptext}</p>
                                </div>
                                </div>
                                <div className="store_side store_back">
                                    <div className="store_info">
                                        <h2>{data.h2textback}</h2>
                                        <div className="store_reviews">
                                            <svg fill="#FFC324" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                                            <svg fill="#FFC324" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                                            <svg fill="#FFC324" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                                            <svg fill="#FFC324" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                                            <p>{data.ptextback}</p>
                                        </div>
                                        <ul>
                                            <li>{data.litextback}</li>
                                        </ul>
                                        <div className="store_btn">
                                            <a href={data.piclinkUrl}>
                                                <h4>CONNECTED</h4>
                                                <svg fill="#fff" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><path d="M0-.25h24v24H0z" fill="none"/></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default withRouter(OurConnected);
