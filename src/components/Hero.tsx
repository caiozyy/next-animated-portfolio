"use client"
import cursor from "../assets/computador-portatil.png"
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';
import profilepic from '../assets/profilecaio.jpg';

const Hero = () => {
    return (
        <div className='py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#0c4a6e_35%,#7dd3fc_60%,#a5f3fc_80%)]'>
            <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2
                        bg-[radial-gradient(closest-side,#000_80%,#0c4a6e)]"></div>

            <div className="relative">
                <div className='text-8xl font-bold text-center'>
                    <h1 className="text-[#e4e4e4]">Olá, Eu sou</h1>
                    <h1 className="text-[#e4e4e4]">Caio <span className="text-cyan-800">Corrêa</span>!</h1>
                </div>

                <motion.div
                    className="hidden md:block absolute right-[150px] top-20"
                    drag
                >
                    <Image
                        src={cursor}
                        height="120"
                        width="120"
                        alt="cursor"
                        draggable="false"
                    />
                </motion.div>

                <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80">
                    Um dedicado Desenvolvedor Back-End, procurando atuar como Analista de Dados e Banco de Dados.
                </p>

                {/* Ajustando a imagem de perfil */}
                <Image
                    src={profilepic}
                    alt="profile picture"
                    className="w-[30rem] h-[30rem] sm:w-[20rem] sm:h-[20rem] rounded-full mt-12 mx-auto object-cover"
                />

                <div className='flex justify-center items-center space-x-8 mt-10'>
                    <a href="https://www.linkedin.com/in/caiocorrêa/" className='hover:text-gray-300'>
                        <FaLinkedin size={34} />
                    </a>
                    <a href="https://github.com/caiozyy" className='hover:text-gray-300'>
                        <FaGithub size={34} />
                    </a>
                    <a href="https://www.instagram.com/caiiocorrea" className='hover:text-gray-300'>
                        <FaInstagram size={34} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;
