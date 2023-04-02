import React from 'react'
import {BiTimeFive} from 'react-icons/bi'
import google from "../../Assets/google.png"
import microsoft from "../../Assets/microsoft.png"
import goldman from "../../Assets/goldman.png"
import jpmorgan from "../../Assets/jpmorgan.png"
import maharashtra from "../../Assets/maharashtra.png"
import manchester from "../../Assets/manchester.png"
import amazon from "../../Assets/amazon.png"
import unacademy from "../../Assets/unacademy.png"

const Data =[
  {
    id:1,
    image:google,
    title:'Web Developer',
    time:'Now',
    location:'Bengaluru',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo assumenda officia, dolor voluptate',
  },
  {
    id:2,
    image:microsoft,
    title:'Cloud Engineer',
    time:'Now',
    location:'Hyderabad',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo assumenda officia, dolor voluptate',
  },
  {
    id:3,
    image:goldman,
    title:'Analyst',
    time:'Now',
    location:'Bengaluru',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo assumenda officia, dolor voluptate',
  },
  {
    id:4,
    image:jpmorgan,
    title:'Operations Director',
    time:'Now',
    location:'Mumbai',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo assumenda officia, dolor voluptate',
  },
  {
    id:5,
    image:maharashtra,
    title:'Clerk',
    time:'2 Days',
    location:'Pune',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo assumenda officia, dolor voluptate',
  },
  {
    id:6,
    image:manchester,
    title:'Manager',
    time:'5 Days',
    location:'Old Trafford',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo assumenda officia, dolor voluptate',
  },
  {
    id:7,
    image:amazon,
    title:'App Developer',
    time:'1 Week',
    location:'Bengaluru',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo assumenda officia, dolor voluptate',
  },
  {
    id:8,
    image:unacademy,
    title:'JEE Physics Tutor',
    time:'Now',
    location:'Bengaluru',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo assumenda officia, dolor voluptate',
  }
]


const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
      {
        Data.map(({id,image,title,time,location,desc}) => {
          return(
              <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-bluecolor shadow-lg shadow-greyish-400/700 hover:shadow-lg cursor-pointer">
        
                <div className='group-hover:bg-white margin-4 rounded-[10px] p-4'><img src={image} alt="" /></div>
        
              <span className='flex justify-between items-center gap-4 mt-4'>
                <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
                <span className='flex items-center text-[#ccc] gap-1'>
                  <BiTimeFive/>{time}
                </span>
              </span>

              <h6 className='text-textcolor group-hover:text-white'>{location}</h6>

              <p className="text-[13px] text-textcolor pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                {desc}
              </p>

              <button className='border-[2px] items-center w-full rounded-[10px] p-2 text-[14px] mt-2 text-textColor group-hover/item:text-textColor group-hover:text-black font-semibold'>
                Apply Now
              </button>
              </div>            
          )
        })
      }
      </div>
    </div>
  )
}

export default Jobs
