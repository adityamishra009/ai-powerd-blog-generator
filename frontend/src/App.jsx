import React, { useState } from 'react'
import "./App.css"
import { IoArrowBackSharp } from "react-icons/io5";
const App = () => {
  const [screen,setscreen]=useState(2);
  const[text,settext]=useState("")
  return (
    <>
      {
        screen === 1 ? <>
        <div className="container flex flex-col items-center justify-center h-screen"> bhole
          <h1 className='text-[41px]'>AI <span className='text-purple-500'>BLOG </span> CONTENT <span className='text-purple-500'>GENERATOR</span></h1>
          <textarea onChange={(e)=>{settext(e.target.value)}} value={text} className='w-[50vw] min-h-[28vh] mt-5 bg-transparent border-[1px] border-[#333333] focus:border-purple-500 outline-none p-[20px] rounded-xl' placeholder='write prompt to generate your blog:'></textarea>
          <button className='btnnormal  py-[15px] transition-all hover:bg-purple-600 px-[20px] bg-purple-500 text-white rounded-xl border-0 outline-0 mt-4 w-[30vw]'>Generate</button>
        </div>
         </> : <>
         <div className="container py-[30px] px-[100px]"> hello
          <p className='font-bold text-[20px] mb-4 flex items-center gap-[10px]' ><i onClick={()=>{setscreen(1)}}className='cursor-pointer flex flex-col items-center justify-center w-[50px] h-[50px] rounded-[50%] transition-all duration-300 hover:bg-zinc-800'><IoArrowBackSharp/></i>output</p>
         </div>
         </> 
      }
    </>
  )
}

export default App
