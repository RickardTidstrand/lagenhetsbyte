import React from 'react'
import Button from '@material-ui/core/Button';
import NorrisSnackbar from './NorrisSnackbar'

import '../css/header.css'
import HeaderImg from '../resources/img/axakon.png'

function Header(){
  return(
    <header>
      <NorrisSnackbar/>
      <img src={HeaderImg} alt="header"/>
    </header>
  )
}
export default Header
