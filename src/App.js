import React from 'react'
import ClickCounter from './HOC/clickCounter'
import HoverCounter from './HOC/hoverCounter'
function App() {
  return (
    <div>
      <ClickCounter />
      <HoverCounter />
      <p>Here reusable couter compenent is used for both Click and Hover</p>
      <p> Clone File HOC </p>
      <p> Eddited in Remote Repository</p>
      <p>Added recently</p>
    
    </div>
  )
}
export default App

