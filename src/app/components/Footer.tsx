import React from "react"
import { FaFacebook, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div>
      
      <footer className='bg-gray-900 text-white flex flex-col text-center pb-9 pt-9'>
      <p>&copy; {year} sheheryar khan. All rights reserved.</p>
     <a className='w-min mx-auto mt-2 text-2xl hover:text-gray-400' href="https://www.linkedin.com/in/sheheryar-khan-a34151208/" ><FaLinkedin /></a>
      <a className='w-min text-2xl mt-2  mx-auto hover:text-gray-400' href="https://github.com/sheheryarkh" ><FaGithubSquare/></a>
      <a className='w-min  text-2xl mt-2 mx-auto hover:text-gray-400' href="https://www.facebook.com/profile.php?id=100073801196939&_rdc=1&_rdr" ><FaFacebook/></a>
      </footer>
    </div>
  )
}

export default Footer
