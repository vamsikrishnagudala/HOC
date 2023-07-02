import React from 'react'
import Hoc from './counter'
function hoverCounter(props) {
  return (
    <div>
      <h2 onMouseOver={props.handler}>Hover me: {props.counter}</h2>
    </div>
  )}
export default Hoc (hoverCounter)