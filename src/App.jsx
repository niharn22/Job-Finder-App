import React from 'react'
import Navbar from "./Components/Navbar/Navbar"
import Jobs from "./Components/Jobs/Jobs"
import Search from "./Components/Search/Search"
import Value from './Components/Value/Value'
import Footer from "./Components/Footer/Footer"


const App = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>
      <Navbar />
      <Search />
      <Jobs />
      <Value />
      <Footer />
    </div>
  )
}

export default App
