// 函式元件
import React, { Fragment,useEffect } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

// import OtisGif from "../../assets/img/Otis.gif";

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
                <div>Slide #1</div>
                <div>Slide #2</div>
                <div>Slide #3</div>
                <div>Slide #4</div>
                <div>Slide #5</div>
            </Swiper>
        </Fragment>
    )

}
export default withRouter(HomeSlider);