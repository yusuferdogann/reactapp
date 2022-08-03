import React from 'react'
import '../assets/css/Card.css'

export default function Card(props) {
  return (
    <div className='cardblock'>
        <i className={props.logo}></i>
        <h4>{props.text}</h4>
    </div>
  )

}
