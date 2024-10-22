import React from 'react'
import { FaLinkedin, FaDiscord, FaInstagram, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='px-6 md:px-0 mt-12 text-white/70 py-8 max-w-[1200px] mx-auto border-t border-gray-700
                    pt-14 flex justify-between items-center'>

        <h1 className='text-2xl font-bold'>Caio Corrêa</h1>

        <div className='flex space-x-6 mt-4'>
            <a href='https://www.linkedin.com/in/caiocorrêa/' className='hover:text-gray-300'>
                <FaLinkedin size={24}/>
            </a>
            <a href='https://discord.gg/GcYzdWXx' className='hover:text-gray-300'>
                <FaDiscord size={24}/>
            </a>
            <a href='https://www.instagram.com/caiiocorrea' className='hover:text-gray-300'>
                <FaInstagram size={24}/>
            </a>
            <a href='https://github.com/caiozyy' className='hover:text-gray-300'>
                <FaGithub size={24}/>
            </a>
        </div>

      
    </div>
  )
}

export default Footer
