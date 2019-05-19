import React from 'react'
import NorrisSnackbar from './NorrisSnackbar'

import '../css/header.css'
import HeaderImg from '../resources/img/axakon.png'

const Header = ()=>(
  <header>
    <NorrisSnackbar/>
    <img src={HeaderImg} alt="header"/>
  </header>
);
export default Header
