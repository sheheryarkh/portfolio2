import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <>
      <header className='bg-gray-700 flex list-none py-3 text-white max-sm:flex-col text-center w-full'>
        <div id='portfolio' className='ml-4 text-xl'>Portfolio</div>

        <div id="nav" className='flex ml-auto gap-3 mr-3 text-center max-sm:w-full justify-center gap-3 mt-3 '>
        <Link className='hover:text-gray-400' href='#about'><li>About</li></Link>
        <Link className='hover:text-gray-400' href='#projects'><li>projects</li></Link>
        <Link className='hover:text-gray-400' href='#skills'><li>Skills</li></Link>
        <Link className='hover:text-gray-400' href='#edu'><li>Education</li></Link>
       
        </div>
      </header>
    </>
  )
}

export default Header
