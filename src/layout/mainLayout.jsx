import React from 'react'
import Footer from '../components/Footer/Footer'
import HeaderNav from '../components/Header/HeaderNav'

function mainLayout(props) {
  return (
    <>
    <HeaderNav/>

     {props.children }
    <Footer/>
    </>
  )
}

export default mainLayout