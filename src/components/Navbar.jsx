import React, { useState } from 'react'
import { logo, lock, hamburgerMenu, close } from '../assets'
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => setToggle(!toggle)
    return (
        <div className='w-full h-[80px] bg-white border-b'>
            <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center'>
                <img src={logo} alt="" className='w-[70px]' />
                <div className='hidden md:flex items-center'>
                    <ul className='flex gap-4'>
                        <li>Home</li>
                        <li>projects</li>
                        <li>skills</li>
                        <li>about us</li>
                    </ul>

                </div>
                <div className='flex'>
                    <button className='flex justify-between items-center px-5 bg-transparent gap-2'>
                        <img src={lock} alt="lock" />
                        login
                    </button>
                    <button className='px-5 py-3 rounded-md bg-[#0dcfcb] text-white font-bold'>
                        signup for free
                    </button>
                </div>

                <div className='flex md:hidden' onClick={handleToggle}>
                    <img src={toggle ? close : hamburgerMenu} alt="" />
                </div>

            </div>

            <div className={toggle?'absolute z-10 p-4 bg-white w-full px-8 md:hidden':'hidden'}>
                <ul>
                    <li className='p-4 hover:bg-gray-100'>Home</li>
                    <li className='p-4 hover:bg-gray-100'>projects</li>
                    <li className='p-4 hover:bg-gray-100'>skills</li>
                    <li className='p-4 hover:bg-gray-100'>about us</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar