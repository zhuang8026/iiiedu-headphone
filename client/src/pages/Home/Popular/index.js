import React ,{ Fragment, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom"

// Swiper
// import Swiper from 'react-id-swiper';

// scss
import './MostPopular.scss';

// img data
import { PopularImg } from './config.js';

function MostPopular() {

    return (
        <div className="popular">
            { PopularImg.map((data, index)=>{
                return (
                    <figure className="popular_inner" key={index}>
                        <img src={data.picUrl} alt="sample41"/>
                        <figcaption>
                            {/* <h2>NEW <span>POPULAR</span> HEADPHONE</h2> */}
                            <h2>{ data.name }</h2>
                            <p>{ data.ptext }</p>
                            <p>MORE +</p>
                            <a href="#"></a>
                        </figcaption>			
                    </figure>
                )
            })}
        </div>
    );
}

export default withRouter(MostPopular);
