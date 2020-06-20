import React from 'react';
import { Link, withRouter } from "react-router-dom"

// Swiper
// import Swiper from 'react-id-swiper';

// scss
// import './MostPopular.scss';

// img data
import { PopularImg } from './config.js';

import LInkButton from '../../../components/LInkButton';

function MostPopular() {

    return (
        <div className="popular_inner_all">
            <div className="true_title">
                <h2>MOST POPULAR PRODUCTS</h2>
                <p>True wireless earbuds engineered for superior calls & music</p>
            </div>
            <div className="popular">
                { PopularImg.map((data, index)=>{
                    return (
                        <figure className="popular_inner" key={index}>
                            <img src={data.picUrl} alt="sample41"/>
                            <figcaption>
                                <h2>{ data.name }</h2>
                                <p>{ data.ptext }</p>
                                <p><LInkButton linkUrl={data.piclinkUrl}/></p>
                                <Link className="figureLink" to={data.piclinkUrl}></Link>
                            </figcaption>
                        </figure>
                    )
                })}	
            </div>
        </div>
    );
}

export default withRouter(MostPopular);
