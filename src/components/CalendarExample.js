import React ,{useState,useEffect}from 'react'
import moment from 'moment'
import '../assets/css/CalendarExample.css'
// import dayStayles from './styles'

export default function CalendarExample() {
    const [value,setValue] = useState(moment())
    const [calendar,setCalendar] = useState([])

    useEffect(()=>{
        const day = startDay.clone().subtract(1,'day')
        const a =[]
        while(day.isBefore(endDay,'day')){
            a.push(
                Array(7).fill(0).map(()=>day.add(1,'day').clone())
            )
        }
        setCalendar(a)
    },[value])

    const startDay = value.clone().startOf('month').startOf('week')
    const endDay = value.clone().endOf('month').endOf('week')
 
   

 
  return (
    <div className='calendar'>
        {calendar.map((week)=>(
            <div>
                {week.map((day)=>(
                    <div className='day'
                    onClick={()=>setValue(day)}
                    >
                        <div
                        className={value.isSame(day,'day') ? 'selected': ""}
                        >{day.format('D').toString()}
                        </div>
                    </div>
                ))}
            </div>
        ))}
    </div>
            
  )
}
