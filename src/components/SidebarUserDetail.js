import React from 'react'
import '../assets/css/SidebarUserDetail.css'
import Profil from '../assets/images/avatar.png'

export default function SidebarUserDetail() {
  return (
    <div className='icon d-flex justify-content-end me-4'>
       <div className='d-flex'>
       <i className="fa-solid fa-envelope position-relative text-muted mb-3">
        <span className="primary position-absolute top-0 start-100 translate-middle"></span>
        </i>
       <i class="fa-solid fa-bell position-relative text-muted">
       <span class="danger position-absolute top-0 start-100 translate-middle"></span>
       </i>
       </div>

       <div className='profil_details d-flex'>
       <div className='profil_img'>
         <img src={Profil} alt='avatar'/>
       </div>

        <div className='profil_info'>
          <h5>Yusuf Erdogan</h5>
          <h6 className='text-muted'>FrontEnd Developer</h6>
        </div>
       </div>

       
    </div>
  
  )
}
