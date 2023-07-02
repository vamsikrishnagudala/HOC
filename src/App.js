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
    
    </div>
  )
}
export default App