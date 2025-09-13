import React, { useState } from 'react'
import "./App.css"
const App = () => {
  const [screen,setscreen]=useState(1);
  return (
    <>
      {
        screen === 1 ? <>
        <div className="container flex flex-col items-center justify-center h-screen"> bhole
          <h1 className='text-[41px]'>AI <span className='text-purple-500'>BLOG </span> CONTENT <span className='text-purple-500'>GENERATOR</span></h1>
          <textarea className='w-[50vw] min-h-[28vh] mt-5 bg-transparent border-[1px] border-[#333333] focus:border-purple-500 outline-none p-[20px] rounded-xl' placeholder='write prompt to generate your blog:'></textarea>
          <button className='btnnormal  py-[15px] transition-all hover:bg-purple-600 px-[20px] bg-purple-500 text-white rounded-xl border-0 outline-0 mt-4 w-[30vw]'>Generate</button>
        </div>
         </> : <>screen 2</> 
      }
    </>
  )
}

export default App
