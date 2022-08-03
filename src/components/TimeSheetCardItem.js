import React from 'react'
import '../assets/css/TimeSheetCardItem.css'

export default function TimeSheetCardItem(props) {
  return (
    <div className='timeline-item'>
      <div className='timeline-item-content d-flex'>
      <div className='timeline_icon'>
            <i className={props.icon}></i>
        </div>
        <div className='ms-3'>
          <h5 className='timeline_header fw-bold'>{props.plaque}</h5>
          <h6 className='timeline_subheader fw-lighter'>{props.clock}</h6>
        </div>
      </div>
    </div>
  )
}
