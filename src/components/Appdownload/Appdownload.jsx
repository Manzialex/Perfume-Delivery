import React from 'react'
import './Appdownload.css'
import { assets } from '../../assets/script'
const Appdownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download <br /> Ravishing App</p>
      <div className="dowload-here">
        <img src={assets.download1} alt="" />
        <img src={assets.download2} alt="" />
      </div>
    </div>
  )
}

export default Appdownload
