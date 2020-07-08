import React from 'react';
import { Link, withRouter } from "react-router-dom"

// scss
// import './BottomIG.scss';


function BottomIG(props) {
    const { IGImg } = props;
    return (
        <div className="ig_inner_all">
            <div className="true_title">
                <h2>BEST OF OUR INSTAGRAM</h2>
                <p>Our campaigns, the latest trends and new collections</p>
            </div>
            <div className="ig">
                <ul>
                    {IGImg.map((data, index)=>{
                        return (
                            <li key={index}>
                                <a href={data.piclinkUrl}>
                                    
                                    <div className="imgCover">
                                        <i className="iconfont icon-instagram"></i>
                                    </div>
                                    <img src={data.picUrl} alt="product"/>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default withRouter(BottomIG);
