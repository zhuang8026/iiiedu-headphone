import React ,{ Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

// components
import MyNavBar from '../../components/Navbar';
import MyMenu from '../../components/NavbarMenu';
import MyFooter from '../../components/Footer';

// main
import HomeSlider from './HomeSlider';
import MyDiscover from './DisCover';
import HotTrue from './HotTrue';
import MostPopular from './Popular';

import BottomStore from './BottomStore';
import BottomIG from './BottomIG';
import BottomYoutube from './BottomYoutube';

import { StoreImg, IGImg, YoutubeImg } from '../../assets/js/config';

function WiHome() {
  useEffect(()=>{
    let shop_btn = document.getElementById('shopping');
    let side_menu = document.getElementsByClassName('header-side-menu')[0]; 
    let page_cover = document.getElementsByClassName('nav-page-cover')[0]; 
    let menu_close = document.getElementsByClassName('side-menu-close')[0]; 
    shop_btn.addEventListener('click',()=>{
        side_menu.classList.add('header-side-menu-active');
        page_cover.classList.add('nav-page-cover-active');
        
    });
    page_cover.addEventListener('click',()=>{
        side_menu.classList.remove('header-side-menu-active');
        page_cover.classList.remove('nav-page-cover-active');
        
    });
    menu_close.addEventListener('click',()=>{
        side_menu.classList.remove('header-side-menu-active');
        page_cover.classList.remove('nav-page-cover-active');
        
    });
  },[])

  return (
    <Router>
        <Fragment>
          <header>
            <MyNavBar/>
            <MyMenu/>
          </header>
          
          <div>
            <HomeSlider/>
            <MyDiscover/>
            <HotTrue/>
            <MostPopular/>
            <BottomStore StoreImg={StoreImg}/>
            <BottomIG IGImg={IGImg}/>
            <BottomYoutube YoutubeImg={YoutubeImg}/>
          </div>

          <MyFooter/>
        </Fragment>
    </Router>
  );
}

export default WiHome;
