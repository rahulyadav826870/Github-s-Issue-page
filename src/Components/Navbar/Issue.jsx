import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import {
  FiSearch,
  FiPlus,
  FiCode,
  FiBookOpen,
  FiSettings,
} from 'react-icons/fi'
import { GoCommandPalette, GoProjectSymlink } from 'react-icons/go'
import { IoMdArrowDropdown } from 'react-icons/io'
import { GoIssueOpened } from 'react-icons/go'
import { AiOutlinePullRequest } from 'react-icons/ai'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import { MdOutlineSecurity } from 'react-icons/md'
import { CgInsights } from 'react-icons/cg'

// FiMenu FaCirclePlay

const Issue = () => {
  return (
    <div className=" bg-[#010409] pt-3 text-slate-100 flex flex-col gap-5">
      {/*    header top */}
      <div className="#010409  flex justify-between items-center px-2   py-[3px] ">
        {/*    header top  left*/}
        <div className="flex gap-3  items-center  ">
          {/* p1 for size */}
          <span className="flex border rounded-md border-[#30363d] items-center p-1  justify-around">
            <FiMenu color='#7d8590' size={20} />
          </span>
          <span>
            <FaGithub size={30} />
          </span>
          <span className="text-[14px] overflow-hidden ">
            apple / cups
          </span>
        </div>

        {/*    header top right */}

        <div className="flex gap-x-3 px-2 ">
          <span className="min-[1024px]:border-r border-[#30363d] min-[1024px]:px-4 flex  ">
            <span className="flex border rounded-md border-[#30363d]  items-center px-2 ">
              <span className="flex items-center gap-2 ">
                <FiSearch size={15} color='#7d8590' />
                <span className="min-w-[200px] text-[#7d8590] border-r border-[#30363d] text-[14px] mr-1 hidden md:block">
                  Type{' '}
                  <span className="border  border-[#7d8590] px-1 rounded-[3px]">
                    /
                  </span>{' '}
                  to search
                </span>
              </span>
              <GoCommandPalette color='#7d8590' className="hidden md:block" size={20} />
            </span>
          </span>
          <span className="flex border  rounded-md border-[#30363d] items-center p-1 justify-around max-[1024px]:hidden px-[8px]">
            <FiPlus size={17}  color='#7d8590'/> <IoMdArrowDropdown color='#7d8590' size={16} />
          </span>
          <span className="flex border rounded-md border-[#30363d] px-[6px] items-center p-1 justify-around max-[1024px]:hidden">
            <GoIssueOpened color='#7d8590' size={17} />
          </span>
          <span className="flex border rounded-md border-[#30363d] items-center px-[6px] p-1 justify-around">
            <AiOutlinePullRequest color='#7d8590' size={17} />
          </span>
          <span className="w-[30px] flex border-[1.5px] rounded-[50px]  border-[#30363d] items-center   justify-around">
            <img
              src="https://avatars.githubusercontent.com/u/103634544?v=4"
              alt="santosh"
              className="w-[100%] rounded-full bg-slate-100"
            />
          </span>
        </div>
      </div>

      {/*       header bottom*/}
      <div className="flex items-center gap-x-8 px-3  overflow-auto">
        <span className="flex text-[14px] items-center gap-x-2">
          {' '}
          <FiCode size={17} /> Code
        </span>
        <span className="flex items-center text-[14px]  gap-x-2 border-b-2 py-2 px-2 border-orange-500">
          <GoIssueOpened size={17} /> Issues{' '}
          
        </span>
        <span className="flex flex-row  items-center gap-x-2">
          {' '}
          <AiOutlinePullRequest size={17} />
          <p className="whitespace-nowrap text-ellipsis overflow-hidden text-[14px] ">
            Pull Requests
          </p>
        </span>
        <span className="flex items-center gap-x-2 text-[14px] ">
          <BsFillPlayCircleFill size={17} /> Actions
        </span>
        <span className="flex items-center gap-x-2 text-[14px] ">
          <GoProjectSymlink size={17} /> Projects
        </span>
        <span className="flex items-center gap-x-2 text-[14px] ">
          <FiBookOpen size={17} /> Wiki
        </span>
        <span className="flex items-center gap-x-2 text-[14px] ">
          <MdOutlineSecurity size={17} /> Security
        </span>
        <span className="flex items-center gap-x-2 text-[14px] ">
          <CgInsights size={17} /> Insight
        </span>
        <span className="flex items-center gap-x-2 text-[14px] ">
          <FiSettings size={17} /> Setting
        </span>
      </div>
    </div>
  )
}

export default Issue
