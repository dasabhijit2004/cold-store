import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full px-2 md:px-20 py-3 flex items-center justify-between'>
      <div className="logo">LOGO</div>
      <ul className='flex items-center gap-2 md:gap-10'>
        <li className='hover:text-blue-500 hover:cursor-pointer transition-color duration-[0.3s]'>Home</li>
        <li className='hover:text-blue-500 hover:cursor-pointer transition-color duration-[0.3s]'>Bonds</li>
      </ul>
      <div className="btns flex items-center gap-5">
        <button className='px-5 py-2 bg-blue-500 border border-[2px] border-blue-500 text-white rounded hover:bg-white hover:text-black transition-all duration-[0.5s]'>Login</button>
        <button className='px-5 py-2 bg-white border border-[2px] border-blue-500 rounded hover:bg-blue-500 hover:text-white transition-all duration-[0.5s]'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar