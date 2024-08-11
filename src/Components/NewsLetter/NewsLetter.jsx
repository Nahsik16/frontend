import React from 'react'
import './NewsLetter.css'
import  playstore from '../assets/play_store.png'
import  appstore from '../assets/app_store.png'

const NewsLetter = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download<br/> Tomato App</p>
      <div className='app-download-platforms'>
        <img src={playstore} alt="" />
        <img src={appstore} alt="" />
      </div>
    </div>
  )
}

export default NewsLetter