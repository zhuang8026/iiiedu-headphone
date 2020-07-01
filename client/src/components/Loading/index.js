// 函式元件
import React from 'react';
import { withRouter } from 'react-router-dom'

// scss
import './loading.scss'


function MyLoading(props) {
    setTimeout(()=>{
        document.getElementById('lodingInner').style.visibility = 'hidden'
    },5000)

    return (
        <div class="lodingInner" id="lodingInner">
            <div class="box">

                <div class="title">
                    <span class="block"></span>
                    <h1>OTIS' STORE<span></span></h1>
                </div>

                <div class="role">
                    <div class="block"></div>
                    <p>Professional Headphones</p>
                </div>

            </div>
        </div>
    )
}
export default withRouter(MyLoading);