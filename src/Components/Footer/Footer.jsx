import React from 'react'

const Footer = () => {
  return (
    <div className='p-[5rem] mb-4 bg-bluecolor rounded-[10px] gap-[8] grid grid-cols-5 m-auto items-center justify-center w-full'>


      <div>
      <div className="logo">
        <h1 className="logo text-[25px] text-white pb-[1.5rem]"><strong>Job</strong>Dhundo</h1>
      </div>
      <p className='text-white pb-[13px] opacity-2 leading-7'>
        We always make our seekers and companies find the best jobs and employers find 
        best candidates.
      </p>
      </div>

      <div className='grid ml-[4rem]'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Company
        </span>

        <div className="grid gap-3">
          <li className='text-white opacity-[2] hover:opacity-[4]'>About Us</li>
          <li className='text-white opacity-[2] hover:opacity-[4]'>Features</li>
          <li className='text-white opacity-[2] hover:opacity-[4]'>News</li>
          <li className='text-white opacity-[2] hover:opacity-[4]'>FAQ</li>
        </div>
      </div>


      <div className='grid ml-[3rem]'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Resources
        </span>

        <div className="grid gap-3">
          <li className='text-white opacity-[2] hover:opacity-[4]'>Account</li>
          <li className='text-white opacity-[2] hover:opacity-[4]'>Support Centre</li>
          <li className='text-white opacity-[2] hover:opacity-[4]'>Feedback</li>
          <li className='text-white opacity-[2] hover:opacity-[4]'>Contact Us</li>
        </div>
      </div>


      <div className='grid ml-[4rem]'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Support
        </span>

        <div className="grid gap-3">
          <li className='text-white opacity-[2] hover:opacity-[4]'>Events</li>
          <li className='text-white opacity-[2] hover:opacity-[4]'>Promo</li>
          <li className='text-white opacity-[2] hover:opacity-[4]'>Req Demo</li>
          <li className='text-white opacity-[2] hover:opacity-[4]'>Careers</li>
        </div>
      </div>


      <div className='grid'>
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">Contact Info</span>
        <div>
          <a href="mailTo:niharnandoskar@gmail.com" className="text-[15px] text-white">niharnandoskar@gmail.com</a>
        </div>
        <div className='mt-4 text-white'>
          +91-9372697992
        </div>
      </div>
    </div>
  )
}

export default Footer
