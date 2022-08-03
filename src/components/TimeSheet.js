import React from 'react'
import '../assets/css/TimeSheet.css'
import TimeSheetCards from './TimeSheetCards'
import TimeSheetCardItem from './TimeSheetCardItem'


export default function TimeSheet() {
  return (
    <div>
        <div className='timesheet'>
           
           <div className='d-flex align-items-center fd'>
                <span>08:00</span>
            <hr className='ms-3'/>
            </div>
           
            <div className='dff'>
            <TimeSheetCardItem
            icon='fa-solid fa-car-side'
             plaque='42 C 0720'
             clock='09:00 - 10:00'
            />
            </div>
            
            <div className='d-flex align-items-center df'>
                <span>08:30</span>
            <hr className='ms-3'/>
            </div>
            
            <div className='d-flex align-items-center'>
                <span>09:00</span>
            <hr className='ms-3'/>
            </div>
           
            <div className='dff'>
            <TimeSheetCardItem
            icon='fa-solid fa-car-side'
             plaque='42 C 0720'
             clock='09:00 - 10:00'
            />
            </div>
            <div className='d-flex align-items-center'>
                <span>09:30</span>
            <hr className='ms-3'/>
            </div>

            <div className='d-flex align-items-center'>
                <span>10:00</span>
            <hr className='ms-3'/>
            </div>
            <div className='d-flex align-items-center'>
                <span>10:30</span>
            <hr className='ms-3'/>
            </div>
            <div className='d-flex align-items-center'>
                <span>11:00</span>
            <hr className='ms-3'/>
            </div>
            <div className='dff'>
            <TimeSheetCardItem
             icon='fa-solid fa-calendar-days'
             plaque='Arac Temizligi Toplanti'
             clock='09:00 - 10:00'
            />
            </div>
            <div className='d-flex align-items-center'>
                <span>11:30</span>
            <hr className='ms-3'/>
            </div>
            <div className='d-flex align-items-center'>
                <span>12:00</span>
            <hr className='ms-3'/>
            </div>
            <div className='d-flex align-items-center'>
                <span>12:30</span>
            <hr className='ms-3'/>
            </div>
            <div className='d-flex align-items-center'>
                <span>13:00</span>
            <hr className='ms-3'/>
            </div>
            <div className='d-flex align-items-center'>
                <span>13:30</span>
            <hr className='ms-3'/>
            </div>
            <div className='d-flex align-items-center'>
                <span>14:00</span>
            <hr className='ms-3'/>
            </div>
            <div className='d-flex align-items-center'>
                <span>14:30</span>
            <hr className='ms-3'/>
            </div>
            <div className='d-flex align-items-center'>
                <span>15:00</span>
            <hr className='ms-3'/>
            </div>
            <div className='d-flex align-items-center'>
                <span>15:30</span>
            <hr className='ms-3'/>
            </div>
            <div className='d-flex align-items-center'>
                <span>16:00</span>
            <hr className='ms-3'/>
            </div>
            <div className='d-flex align-items-center'>
                <span>16:30</span>
            <hr className='ms-3'/>
            </div>
            <div className='d-flex align-items-center'>
                <span>17:00</span>
            <hr className='ms-3'/>
            </div>
            <div className='d-flex align-items-center'>
                <span>17:30</span>
            <hr className='ms-3'/>
            </div>
            <div className='d-flex align-items-center'>
                <span>18:00</span>
            <hr className='ms-3'/>
            </div>

        </div>

    </div>
  )
}
