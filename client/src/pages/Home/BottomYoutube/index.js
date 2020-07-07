import React from 'react';
import { Link, withRouter } from "react-router-dom"

// scss
// import './BottomIG.scss';


function BottomYoutube(props) {
    const { YoutubeImg } = props;
    return (
        <div className="ig_inner_all">
            <div className="true_title">
                <h2>BEST OF OUR YOUTUBE</h2>
                <p>Our campaigns, the latest trends and new collections</p>
            </div>
            <div className="ig">
                <ul>
                    {YoutubeImg.map((data, index)=>{
                        return (
                            <li key={index}>
                                <Link to={data.piclinkUrl}>
                                    {/* <div className="imgCover">
                                        <i className="iconfont icon-search"></i>
                                    </div> */}
                                    {/* <img src={data.picUrl} alt="product"/> */}
                                    <iframe width="100%" height="280px" src={data.picUrl} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default withRouter(BottomYoutube);
