import React, {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {GiCancel} from 'react-icons/gi'


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='w-screen h-[80px] z-10 bg-gray-200 fixed drop-shadow-lg'>
       <div className='px-2 flex justify-between items-center w-full h-full'>
          <div className='flex items-center'>
            <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Cloud.io</h1>
            <ul className='hidden md:flex'>
              <li><a href="/"> Home</a></li>
              <li><a href="/about"> About</a></li>
              <li><a href="/support"> Support</a></li>
              <li><a href="/allinone"> Products</a></li>
            </ul>
          </div>
          <div className='hidden md:flex pr-4'>
            <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
            <button className='px-8 py-3'>Sign Up</button>
          </div>
          <div className='md:hidden' onClick={handleClick}>
       {!nav ? <GiHamburgerMenu className='w-5' /> : <GiCancel className='w-5' />}
       </div>
       </div>

       <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
              <li className='border-b-2 border-zinc-300 w-full'><a href="/">Home</a></li>
              <li className='border-b-2 border-zinc-300 w-full'><a href="/about">About</a></li>
              <li className='border-b-2 border-zinc-300 w-full'><a href="/support">Support</a></li>
              <li className='border-b-2 border-zinc-300 w-full'><a href="/allinone">Products</a> </li>
              <div className='flex flex-col my-4'>
                <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
                <button className='px-8 py-3'>Sign Up</button>
              </div>
       </ul>
    </div>
  );
};

export default Navbar;
