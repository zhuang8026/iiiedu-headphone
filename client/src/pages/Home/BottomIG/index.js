import React ,{ useEffect } from 'react';
import { Link, withRouter } from "react-router-dom"

// scss
import './BottomIG.scss';

// img data
// import { PopularImg } from './config.js';
import Gif from './img/gif.jpg';


function BottomIG() {

    return (
        <div className="ig_inner_all">
            <div className="true_title">
                <h2>BEST OF OUR INSTAGRAM</h2>
                <p>Our campaigns, the latest trends and new collections</p>
            </div>
            <div className="ig">
                <ul>
                    <li>
                        <Link to="/">
                            <div className="imgCover"></div>
                            <img src={Gif} alt="product 404"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <div className="imgCover"></div>
                            <img src={Gif} alt="product 404"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <div className="imgCover"></div>
                            <img src={Gif} alt="product 404"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <div className="imgCover"></div>
                            <img src={Gif} alt="product 404"/>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default withRouter(BottomIG);
