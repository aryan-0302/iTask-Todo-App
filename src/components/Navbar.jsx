import React from 'react'

 const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-between bg-indigo-900 text-white py-2'>
            <div>
                <span className='font-bold text-xl mx-8'>iTask</span>
            </div>
            <ul className='flex gap-8 mx-8'>
                <li className='cursor-pointer hover:font-bold transition-all duration-75'>Home</li>
                <li className='cursor-pointer hover:font-bold transition-all duration-75'>Your Tasks</li>
            </ul>
        </nav>
    </div>
  )
}
export default Navbar
