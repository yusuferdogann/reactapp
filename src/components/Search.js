import React from 'react'
import '../assets/css/Search.css'

export default function search() {
  return (
   
    <div class="col-4 searchbox-wrap d-flex float-end me-5">
    <input type="text" placeholder="Arama yapın"/>
    <button><span><i className='fa fa-search'></i></span> </button>
  </div>
  )
}
