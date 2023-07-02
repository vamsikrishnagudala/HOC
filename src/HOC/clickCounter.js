import React from 'react'
import Hoc from './counter'
function ClickCounter(props) {
  return (
    <div>    
      <button className='btn btn-primary' onClick={props.handler}>Clicked {props.counter}</button>
    </div>
  )}
export default Hoc (ClickCounter)