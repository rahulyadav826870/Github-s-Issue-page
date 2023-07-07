import React from 'react'
import {BsGithub} from "react-icons/bs"
import { MdOutlineTipsAndUpdates} from "react-icons/md"

export default function Footer() {
  return (
    <div className=' bg-[#0d1117]  py-5 ' >
    <div className='w-[90%] sm:w-[100%] text-center text-[10px] sm:text-sm m-auto border-b  border-[#21262d] mb-7 pb-7 px-5' style={{display:"flex",
    gap: "4px", justifyContent: "center"}}>
    <span className= '  text-slate-100   '>
    <MdOutlineTipsAndUpdates size={20}/>
    </span>
    
    <div ><span style={{color:"white"}}>ProTip!</span> <span style={{color:"#484f58"}}>Exclude your own issues with </span>

    
    <span style={{color:"rgb(32, 129, 247)"}}>-author:rahulyadav826870.</span>
    
    </div>
</div>


<div className='flex flex-col-reverse items-center px-10 -2 sm:flex-row gap-y-5' >


        <div className='' style={{display:"flex",alignItems:"center" }}>
            <div style={{padding:"8px"}}>
        <BsGithub  size={25} color='#7d8590'/>

            </div>
<span style={{color:"#7d8590",fontSize:"12px"}}>© 2023 GitHub, Inc.</span>
        </div>

        <div className='flex flex-wrap mx-2 text-center sm:gap-x-1 md:gap-x-5 gap-x-2' style={{
    color: "rgb(32, 129, 247)",
    fontSize: "12px"} }>
<p>Terms</p>
<p>Privacy</p>
<p>Security</p>
<p>Status</p>
<p>Docs</p>
<p>Contact GitHub</p>
<p>Pricing</p>
<p>API</p>
<p>Training</p>
<p>Blog</p>
<p>About</p>
        </div>

        </div>
    </div>
  )
}