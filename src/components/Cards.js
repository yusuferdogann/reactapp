import React from 'react'
import CardItem from './CardItem'

export default function Cards() {
  return (
    <div>
      <div className='d-flex'>
       <CardItem
       className='position-relative box-content'
        text='Özet Taşıt Raporları'
        logo='fa-solid fa-car'
        />
        <CardItem
        className='position-relative box-content'
        text='Özet Sürücü Raporları'
        logo='fa-solid fa-user-large'
        />
           <CardItem
           className='position-relative box-content'
        text='Özet Yakıt Raporları'
        logo='fa-solid fa-gas-pump'
        />
        <CardItem
        className='position-relative box-content'
        text='Özet Bölge Raporları'
        logo='fa-solid fa-map-location'
        />
        <CardItem
        className='position-relative box-content'
        text='Özet Cihaz Raporları'
        logo='fa-solid fa-screwdriver-wrench'
        />
       </div>
       <div className='d-flex'>
       <CardItem
       className='position-relative box-content'
        text='Özet Taşıt Raporları'
        logo='fa-solid fa-car'
        />
        <CardItem
        className='position-relative box-content'
        text='Özet Sürücü Raporları'
        logo='fa-solid fa-user-large'
        />
           <CardItem
           className='position-relative box-content'
        text='Özet Yakıt Raporları'
        logo='fa-solid fa-gas-pump'
        />
        <CardItem
        className='position-relative box-content'
        text='Özet Bölge Raporları'
        logo='fa-solid fa-map-location'
        />
       </div>
    </div>
  
  )
}
