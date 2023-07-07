import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { FiSearch } from 'react-icons/fi'
import { FaTag } from 'react-icons/fa'
import { GoMilestone } from 'react-icons/go'

const Filter = () => {
  return (
    <div className='text-slate-100  gap-y-5 flex flex-col-reverse lg:flex-row  justify-between w-[90%] sm:w-[95%] m-auto mt-10 '> 

    {/* fliter right side */} 
      <div className="flex  border border-[#30363d] lg:w-[60%] rounded-[6px]  ">
        <div className="flex py-[5px] border-[#30363d]  text-[14px] items-center justify-center border-r  px-4">
          <span>Filters</span>
          <span className="items-center   ml-[4px]">
            <IoMdArrowDropdown size={15} />
          </span>
        </div>
        <div className="flex items-center rounded-[6px] bg-[#070e1a] gap-x-3 w-[100%]  px-4">
          <span className="">
            <FiSearch size={20} />
          </span>
          <div className="w-[100%]   text-slate-800">
            <input
              className="w-[100%]  bg-[#070e1a] outline-none"
              type="text"
              placeholder="is:issue is:open"
            />
          </div>
        </div>
      </div>

      {/* fliter left side */}
      <div className='flex   sm:gap-x-5 max-[400px]:text-[8px] sm:text-sm justify-between '>
     <div className='border border-[#30363d] flex rounded-lg bg-[#070e1a]'>
     <div className='flex items-center gap-x-2 px-5 border-r border-[#30363d] '>
     <span><FaTag size={15}/></span>
     <span className='text-[14px] md:text-[14px]'>Labels</span>
     {/* <span className='bg-slate-600 px-2 rounded-full'>9</span> */}
     </div>
     <div className='flex items-center gap-x-2 px-2 border-l border-[#30363d] mr-[10px] ' >
     <span  ><GoMilestone size={18}/></span>
     <span className='text-[14px] md:text-[14px]' >MileStones</span>
     {/* <span  className='bg-slate-600 px-2 rounded-full '>5</span> */}
     </div>
     </div>

     <span className=' bg-[#238636] text-[14px] font-semibold  px-4 py-1 rounded-lg '>
      
     <span className="hidden md:inline">New issue</span>
    <span className="inline md:hidden">New </span>
      
      </span>

      </div>

    </div>
  )
}

export default Filter
