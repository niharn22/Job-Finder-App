import React from 'react'

const Navbar = () => {
  return (
      <div className="Navbar flex justify-between items-center p-[3rem] w-full">
        <div className="LogoDiv">
            <h1 className='logo text-[25px] text-bluecolor cursor-pointer'><strong>Job</strong>Dhundo</h1>
        </div>
        <div className="menu flex gap-8">
            <li className="List text-[#6f6f6f] hover:text-bluecolor">Jobs</li>
            <li className="List text-[#6f6f6f] hover:text-bluecolor">Companies</li>
            <li className="List text-[#6f6f6f] hover:text-bluecolor">About</li>
            <li className="List text-[#6f6f6f] hover:text-bluecolor">Contact</li>
            <li className="List text-[#6f6f6f] hover:text-bluecolor">Blog</li>
            <li className="List text-[#6f6f6f] hover:text-bluecolor">Login</li>
        </div>
      </div>
  )
}

export default Navbar
