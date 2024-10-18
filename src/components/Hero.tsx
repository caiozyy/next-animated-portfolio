"use client"
import Image from "next/image";
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import { motion } from "framer-motion";
import profilepic from "../assets/profilepic.png"

const Hero = () => {
    return (
        <div className='py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#0c4a6e_35%,#7dd3fc_60%,#a5f3fc_80%)]'>

            <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2
                            bg-[radial-gradient(closest-side,#000_80%,#0c4a6e)]"></div>

            <div className="relative">
                <div className='text-8xl font-bold text-center'>
                    <h1 className="text-[#4d8acf]">Olá, Eu sou</h1>
                    <h1 className="text-[#4d8acf]">Caio Corrêa</h1>
                </div>

                <motion.div
                    className="hidden md:block absolute left-[280px] top-[170px]"
                    drag
                >
                    <Image
                        src={cursor}
                        height="170"
                        width="170"
                        alt="cursor"
                        className=""
                        draggable="false"
                    />

                </motion.div>

                <motion.div
                    className="hidden md:block absolute left-[280px] top-[170px]"
                    drag
                >
                    <Image
                        src={lightning}
                        height="120"
                        width="120"
                        alt="cursor"
                        className=""
                        draggable="false"
                    />

                </motion.div>

                <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80">
                    Hi 👋, I'm Caio! A passionate Back-End Developer - Data Analyst - Freelancer worker from Brazil.
                </p>

                <Image
                    src={profilepic}
                    alt="profile picture"
                    className="h-auto w-auto mx-auto"
                />
            </div>
        </div>
    )
}

export default Hero
