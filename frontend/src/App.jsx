import React, { useState } from 'react'
import "./App.css"
const App = () => {
  const [screen,setscreen]=useState(2);
  return (
    <>
      {
        screen === 1 ? <>screen 1 </> : <>screen 2</> 
      }
    </>
  )
}

export default App
