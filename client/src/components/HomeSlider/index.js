// 函式元件
import React, { Fragment,useEffect } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

import {swiperImg} from './config';

// Swiper
import Swiper from 'react-id-swiper';
// scss
import 'swiper/swiper.scss'

// scss
// import './_menu.scss'

function HomeSlider(props) {

    return (
        <Fragment>
            <Swiper>
                { swiperImg.map((data, index)=>{
                    return (
                        <a href={data.linkUrl} key={index}>
                            <img src={data.picUrl} />
                        </a>
                    )
                }) }
            </Swiper>
        </Fragment>
    )

}
export default withRouter(HomeSlider);