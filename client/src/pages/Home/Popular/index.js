import React ,{ Fragment, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom"

// Swiper
// import Swiper from 'react-id-swiper';

// scss
import './MostPopular.scss';


function MostPopular() {

    return (
        <Fragment>
            <figure class="snip0016">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample41.jpg" alt="sample41"/>
                <figcaption>
                    <h2>I think <span>nighttime</span> is dark</h2>
                    <p>So you can imagine your fears with less distraction.</p>
                    <a href="#"></a>
                </figcaption>			
            </figure>
            <figure class="snip0016">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample42.jpg" alt="sample42"/>
                <figcaption>
                    <h2>I suppose if we couldn't <span>laugh</span></h2>
                    <p>At things that don't make sense, we couldn't react to a lot of life.</p>
                    <a href="#"></a>
                </figcaption>			
            </figure>
            <figure class="snip0016">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample43.jpg" alt="sample43"/>
                <figcaption>
                    <h2>I think the <span>surest</span> sign </h2>
                    <p>That intelligent life exists elsewhere in the universe is that none of it has tried to contact us.</p>
                    <a href="#"></a>
                </figcaption>			
            </figure>
        </Fragment>
    );
}

export default withRouter(MostPopular);
