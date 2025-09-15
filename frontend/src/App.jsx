import React, { useActionState, useState } from 'react'
import "./App.css"
import { IoArrowBackSharp } from "react-icons/io5";
import { GoogleGenAI } from "@google/genai";
import { ClipLoader } from "react-spinners";
import Markdown from 'react-markdown'

const App = () => {
  const [screen, setscreen] = useState(1);
  const [text, settext] = useState("");
  const[data,setdata]=useState(null);
  const[loading,setloading]=useState(false);
  

  
  const ai = new GoogleGenAI({ apiKey: "api" });
  async function generateblogcontent() {
    setloading(true);
    setscreen(2);
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",

      contents:
       ` 
       You are an expert SEO blog writer and AI content strategist.
Write a complete blog post on the topic: ${text}.
Return the blog in Markdown format, using clear sections and headings.
Follow this structure exactly, using proper heading levels like #, ##, and ### for compatibility with Markdown-to-HTML converters.
Do not add extra markdown formatting (like italics/bold) unless necessary for clarity. Do not return JSON or HTML — only markdown.


⚙ Requirements:
✅ Start with a catchy blog title.
✅ Include a meta description (max 160 characters).
✅ Provide 5 SEO-friendly tags/keywords.
✅ Generate a URL-friendly slug (lowercase, hyphens only).
✅ The blog post should include:
✅ A strong introduction (hook the reader)
✅ At least 3 subheadings (with relevant H2 tags)
✅ A conclusion with a CTA
✅ Use bullet points or numbered lists if needed
✅ Highlight code blocks (if topic is technical)

output:

Title:
[Catchy, SEO-optimized blog title]

Slug:
[URL-friendly version of title (lowercase, hyphenated)]

Meta Description:
[Short and SEO-friendly (under 160 characters)]

Keywords:
[Comma-separated list of 5 to 7 SEO keywords relevant to the blog]

Author:
[Author name or leave as "AI Assistant"]

Estimated Reading Time:
[X minutes]

Date:
[YYYY-MM-DD]

Introduction:
[A hook that introduces the topic and gives context]

Subheading 1:
[Explanation, examples, or list under this sub-topic]

Subheading 2:
[Another focused sub-topic, well explained]

Subheading 3:
[Optional — can include code blocks, steps, or comparisons]

Conclusion:
[Summarize the key points, add final thoughts or a call-to-action]

Hashtags:
[#tag1 #tag2 #tag3 #tag4 #tag5]

Tags:
[tag1, tag2, tag3, tag4, tag5]

Note: give title in h1 tag
      
      `,
    });
    console.log(response.text);
    setdata(response.text);
    setloading(false);
  }

  return (
    <>
      {
        screen === 1 ? <>
          <div className="container flex flex-col items-center justify-center h-screen"> bhole
            <h1 className='text-[41px]'>AI <span className='text-purple-500'>BLOG </span> CONTENT <span className='text-purple-500'>GENERATOR</span></h1>
            <textarea onChange={(e) => { settext(e.target.value) }} value={text} className='w-[50vw] min-h-[28vh] mt-5 bg-transparent border-[1px] border-[#333333] focus:border-purple-500 outline-none p-[20px] rounded-xl' placeholder='write prompt to generate your blog:'></textarea>
            <button onClick={generateblogcontent} className='btnnormal  py-[15px] transition-all hover:bg-purple-600 px-[20px] bg-purple-500 text-white rounded-xl border-0 outline-0 mt-4 w-[30vw]'>Generate</button>
          </div>
        </> : <>
          <div className="container py-[30px] px-[100px]">
            {loading ?
            <div className='fixed top-0 left-0 flex items-center justify-center h-screen w-screen '>
            
            <ClipLoader
        color="#a855f7"
        size={150}
        aria-label="Loading Spinner"
      />
      </div> :<>
      <p className='font-bold  text-[20px] mb-7 flex items-center gap-[10px]' ><i onClick={() => { setscreen(1) }} className='cursor-pointer flex flex-col items-center justify-center w-[50px] h-[50px] rounded-[50%] transition-all duration-300 hover:bg-zinc-800'><IoArrowBackSharp /></i>output</p>
      <Markdown>{data}</Markdown>
      </>}
  
          </div>
        </>
      }
    </>
  )
}

export default App
 