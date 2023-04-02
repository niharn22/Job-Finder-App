import React from 'react'
import {AiOutlineCloseCircle, AiOutlineSearch} from 'react-icons/ai'
import {BsHouseDoor} from 'react-icons/bs'
import {CiLocationOn} from 'react-icons/ci'

const Search = () => {
  return (
    <div className="search grid gp-10 bg-greyish rounded-[10px] p-[3rem]">
      <form action="">
        <div className="flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyish-700">
          <div className="flex gap-2 items-center cursor-pointer">
            <AiOutlineSearch className='text-[25px] icon'/>
            <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%] pl-[10px]' placeholder='Search Jobs'/>
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
            </div>

            <div className="flex gap-2 items-center cursor-pointer">
            <BsHouseDoor className='text-[25px] icon'/>
            <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%] pl-[10px]' placeholder='Search by company'/>
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
            </div>

            <div className="flex gap-2 items-center cursor-pointer">
            <CiLocationOn className='text-[25px] icon'/>
            <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%] pl-[10px]' placeholder='Search by Location'/>
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>

            <button className='bg-bluecolor h-full p-4 ml-8 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>Search</button>
            </div>
        </div>
      </form>
      <br/>
      <div className="sortBy flex items-center gap-12 my-2 justify-center">

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relevance" className='text-[#808080] font-semibold'>Sort By:</label>
          <select name="" id="relevance" className='bg-white rounded-[3px] px-4 py-1 cursor-pointer'>
            <option value="" className='cursor-pointer'>Relevance</option>
            <option value="" className='cursor-pointer'>Inclusive</option>
            <option value="" className='cursor-pointer'>Starts with</option>
            <option value="" className='cursor-pointer'>Contains</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="type" className='text-[#808080] font-semibold'>Type:</label>
          <select name="" id="type" className='bg-white rounded-[3px] px-4 py-1 cursor-pointer'>
            <option value="" className='cursor-pointer'>Full-time</option>
            <option value="" className='cursor-pointer'>Remote</option>
            <option value="" className='cursor-pointer'>Contract</option>
            <option value="" className='cursor-pointer'>Part-time</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="level" className='text-[#808080] font-semibold'>Level:</label>
          <select name="" id="level" className='bg-white rounded-[3px] px-4 py-1 cursor-pointer'>
            <option value="" className='cursor-pointer'>Senior</option>
            <option value="" className='cursor-pointer'>Beginner</option>
            <option value="" className='cursor-pointer'>Intermediate</option>
            <option value="" className='cursor-pointer'>Intern</option>
          </select>
        </div>
        <span className="text-#a1a1a1 cursor-pointer">Clear All</span>
      </div>
    </div>
  )
}

export default Search
