import React from 'react'
import '../assets/css/Dashboard.css'
import Navbar from './Navbar'
import Cards from './Cards'
import Search from './Search'
import SidebarUserDetail from './SidebarUserDetail'
import Button from './Button'
import TimeSheet from './TimeSheet'
import Calendar from './Calendar'
import Flickity from './Flickity'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Flickity from "react-flickity-component";

export default function Dashboard() {
  return (
   
  <div className="container-fluid">
     <div className="row">
      <div className="col-10 container-fluid main p-3">
      <div className='d-flex justify-content-between col-12 main-part'>
       <div className='logo'>LOGO</div>
        <div className='search justify-content-end'><Search/></div>
       </div>
       <div className='container-fluid content mt-5'>
         
     

         <div> <h4>Merhaba, Selcuk</h4></div>
         <div className='navbar my-4'><Navbar/></div>
         <div className='row mt-4'>
         <div className=''>
         {/* <div className='position-relative box-content'></div>
           <div className='position-relative box-content'></div>
           <div className='position-relative box-content'></div>
           <div className='position-relative box-content'></div>
           <div className='position-relative box-content'></div> */}
           <Cards/>
         </div>
         
         </div>
         <div className='rt my-5'>
          <div className='d-flex align-items-center'>
          <h4 className='m-2'> Son Etkinlikler</h4>
          <h5 className='m-2' style={{color:'rgb(79, 220, 255)'}}>Tumunu Gor <span><i class="fa-solid fa-angle-right"></i></span></h5>
          </div>
        <div><Flickity/></div>

         

          
         </div>
       </div>

      </div>
        <div className="col-2 rightbar p-3">
          <div className='user-detail'><SidebarUserDetail/></div>
          <div className='calendar my-3'><Calendar/></div>
          <div className='buttons my-3 row'>
           <div className='container-fluid'>
           <div className='d-flex col-11 mt-2'>
           <div className='col-4 mx-2'>
           <Button
            className='col-12 btn btn-outline-primary'
            text='Bakim'
            />
           </div>
           <div className='col-4 mx-2'>
           <Button
            className='col-12  btn btn-outline-primary'
            text='Sigorta'
            />
           </div>
           <div className='col-4 mx-2'>
           <Button
            className='col-12 btn btn-outline-primary'
            text='Vize'
            />
           </div>
             </div>
           
            <div className='col-12'>
            <Button
            className='col-12 my-2 btn btn-light'
            text='Tumunu Goruntule'
            />
            </div>
          
           </div>
          
          </div>
          <div className='timeline'>
            <TimeSheet/>
          </div>
        </div>
    </div>
  </div>
  
  )
}
