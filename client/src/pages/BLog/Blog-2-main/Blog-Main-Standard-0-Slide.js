// 函式元件
import React, { Fragment, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
  NavLink,
  withRouter,
} from 'react-router-dom'

// -------------------- components --------------------

// -------------------- scss --------------------
// import '../../../assets/scss/blog_standard.scss'

// -------------------- imgs --------------------
import slide from '../../../assets/img/blog-img/blog-standard/slide.png'
import top from '../../../assets/img/blog-img/blog-standard/top.png'

// -------------------- func --------------------

function BlogMainStandardSlide(props) {
  return (
    <>
      <div className="carouselWall">
        <div className="imageWall">
          <figure className="blog-standard-fig wallFig blog-cover">
            <img src={top} alt="" />
          </figure>
        </div>
        <div className="slideWall">
          <div className="slides slider-container" id="sliderContainer">
            <ul
              className="list-unstyled slider-images blog-d-flex position-absolute"
              id="sliderImages"
            >
              <li>
                <img className="slide-images" src={slide} alt="" />
              </li>
              <li>
                <img src={slide} alt="" />
              </li>
              <li>
                <img src={slide} alt="" />
              </li>
              <li>
                <img src={slide} alt="" />
              </li>
              <li>
                <img src={slide} alt="" />
              </li>
            </ul>
            <ul
              className="list-unstyled position-absolute slider-dots blog-d-flex justify-content-center"
              id="sliderDots"
            >
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <a
              role="button"
              id="goNext"
              className="dir-btn position-absolute dir-right"
            >
              <i className="fas fa-chevron-right"></i>
            </a>
            <a
              role="button"
              id="goPrev"
              className="dir-btn position-absolute dir-left"
            >
              <i className="fas fa-chevron-left"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
export default withRouter(BlogMainStandardSlide)
