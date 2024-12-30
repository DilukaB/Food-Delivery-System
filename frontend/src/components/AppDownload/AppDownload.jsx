import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experiance Download <br/>D7B Food App</p>
        <div className="app-download-platforms">
            <img src={assets.app_store} alt="" />
            <img src={assets.play_store} alt="" />
           
        </div>
      
    </div>
  )
}

export default AppDownload
