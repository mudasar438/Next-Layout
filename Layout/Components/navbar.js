import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
   <div className="">
       <ul className='flex  justify-center bg-black p-5 text-white'>
           <li className='mx-5'>
               <Link a href="/"><a>Home</a></Link>
           </li>
           <li className='mx-5'>
               <Link a href="/login"><a>login</a></Link>
           </li>
           <li className='mx-5'>
               <Link a href="/reg"><a>Register</a></Link>
           </li>
       </ul>



   </div>
  )
}

export default Navbar