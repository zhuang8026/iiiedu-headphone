import React ,{ Fragment, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom"

// components


// scss
// import './discover.scss'

// imove
import BgImovie from '../../../assets/imove/bg_movie_2.mp4';

function MyDiscover() {
    useEffect(()=>{

    },[])

    return (
        <Fragment>
            <div className="MyDiscover">

                <div className="MyDiscover_inner">
                    <div className="MyVideo">
                        <video width="560" height="280" autoPlay playsInline muted loop>
                            <source src={BgImovie} type="video/mp4"/>
                        </video>
                    </div>
                    <article>
                        <h1>HEADPHONES DESIGN. <br/> TAIWAN ENGINNERING. </h1>
                        <p>Otis verve is an authentic music lifestyle via timeless products forged by unparalleled quality, fashion-forward design 
                        and an unequivocal passion for sound and materials.<br/>
                        Since 1953 Grado Labs has hand built headphones & cartridges in Brooklyn, NY.Through three generations the family 
                        has kept the tradition of putting sound first.</p>
                        <Link to="/" type="button">DISCOVER</Link>
                    </article>
                </div>

            </div>
            <div className="MyDiscover_bottom"></div>
        </Fragment>
    );
}

export default withRouter(MyDiscover);
