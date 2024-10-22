import React from 'react'
import Image from 'next/image'
import phone from "../assets/phone.png"
import mail from "../assets/mail.png"

const Contact = () => {
    return (
        <div className='max-w-[1000px] md:mx-auto flex flex-col lg:flex-row text-white/70 p-8 
                    rounded-lg space-y-8 lg:space-y-0 lg:space-x-8' id='contact'>
            
            <div className='bg-black p-7 rounded-xl max-w-[1000px]'>
            <h2 className='text-5xl font-bold text-sky-200 mb-4'>Let's connect</h2>
            <p className='text-white/70 mb-6'>Envie-me uma mensagem e vamos agendar uma ligação</p>
            <ul className='flex flex-col-reverse'> 
              <li className='flex items-center'> 
                 <p className='text-xl'>+55 61 98347-7928</p>
                 <Image src={phone} alt='Phone' className='h-[30px] w-auto  ml-6'/>
              </li>
              <li className='flex items-center'>
                 <p className='text-xl'>contato.caiocorrea@gmail.com</p>
                 <Image src={mail} alt='email' className='h-[30px] w-auto ml-6'/>
              </li>
          </ul>
            <form className='space-y-4 mt-6' action="https://getform.io/f/bqongyrb" method='POST'>
                <div className='grid md:grid-cols-2 gap-4'>
                    <input type="text" name="name" className='bg-white/10 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' 
                    placeholder='Firt Name' />
                    <input type="text" name="name" className='bg-white/10  rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' 
                    placeholder='Last Name' />
                    <input type="email" className='bg-white/10  rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' 
                    placeholder='Email' />
                    <input type="phone" name="phone" className='bg-white/10  rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' 
                    placeholder='Phone' />
                </div>
                <textarea className='bg-white/10  w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' 
                    placeholder='Your Message' />
                <button className='bg-cyan-800 hover:bg-cyan-700 text-white px-6 py-2 w-full font-semibold
                                    text-xl rounded-xl'>Send Message</button>
            </form>

            </div>



        </div>
    )
}

export default Contact
