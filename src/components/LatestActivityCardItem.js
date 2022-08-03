import React from 'react'
import '../assets/css/LatestActivityCardItem.css'
import Img1 from '../assets/images/avatar.png'
import Img2 from '../assets/images/avatar2.png'
import Img3 from '../assets/images/avatar3.png'

export default function LatestActivity() {
  return (
    <div className='latestactivity'>
    <div className=' d-flex justify-content-between latestactivity_detail'>
    <div>
     <h5>Yerler Etkinliği</h5>
      <h6>Buyuk Referandom Tahsisi</h6>
     </div>
     <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
    </div>
    </div>

    <div className='d-flex justify-content-between latestactivity_detail'>
    <div>
    <i class="fa-solid fa-clock"></i>
    <span>10:00 - 11:00</span>
    </div>
    <div className='latestactivity_imagesBox'>
      <img src={Img1}/>
      <img src={Img2}/>
      <label className='position-relative'>
        <p className='position-absolute top-50 start-50 translate-middle'>+2</p>
        <img  src={Img3}/>
      </label>
    </div>
    </div>

    </div>
  )
}
