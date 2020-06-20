import React, { Fragment, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

// components
// import MyNavBar from '../../components/Navbar'
// import MyMenu from '../../components/NavbarMenu'
// import MyFooter from '../../components/Footer'

// main
import HomeSlider from './HomeSlider'
import MyDiscover from './DisCover'
import HotTrue from './HotTrue'
import MostPopular from './Popular'
import OurConnected from './Connected'

import BottomStore from './BottomStore'
import BottomIG from './BottomIG'
import BottomYoutube from './BottomYoutube'

import { StoreImg, IGImg, YoutubeImg } from '../../assets/js/config'

function WiHome() {
  return (
    <Router>
      <Fragment>
        {/* <header>
          <MyNavBar />
          <MyMenu />
        </header> */}

        <div>
          <HomeSlider />
          <MyDiscover />
          <HotTrue />
          <MostPopular />
          <OurConnected />
          <BottomStore StoreImg={StoreImg} />
          <BottomIG IGImg={IGImg} />
          <BottomYoutube YoutubeImg={YoutubeImg} />
        </div>

        {/* <MyFooter /> */}
      </Fragment>
    </Router>
  )
}

export default WiHome
