import React from 'react'
import { BiChevronDown } from 'react-icons/bi'

const Header = () => {
    return (
        <div className='flex justify-between max-w-[80%] mx-auto py-6'>
            {/* logo */}
            <div>
                <h1 className='text-white font-bold text-3xl '>
                    <span className='text-orange-500'>C</span>rypto
                </h1>
            </div>
            {/* menu  */}
            <div>
                <ul className='flex gap-6'>
                    <li className='cursor-pointer capitalize text-white font-light flex items-center gap-1 hover:text-orange-500'>product <BiChevronDown /></li>
                    <li className='cursor-pointer capitalize text-white font-light flex items-center gap-1 hover:text-orange-500'>template <BiChevronDown /></li>
                    <li className='cursor-pointer capitalize text-white font-light hover:text-orange-500'>blog</li>
                    <li className='cursor-pointer capitalize text-white font-light hover:text-orange-500'>pricing</li>
                </ul>
            </div>
            {/* sing up and sign in buttons  */}
            <div className='flex gap-6 items-center text-white'>
                <span>Sign In</span>
                <button className='bg-orange-600 py-2 px-3 rounded-md cursor-pointer'>Start Free</button>
            </div>
        </div>
    )
}

export default Header