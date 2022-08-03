import React from 'react'
import '../assets/css/Button.css'

const  STYLES = ['btn-primary','btn-outline']

export const Button = (props)=> {

 
  
  return (
    <div >
        <button className={props.className}>
        {props.text}
        </button>        
    </div>
  )
}
export default Button