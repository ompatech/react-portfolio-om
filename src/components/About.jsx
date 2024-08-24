import React from 'react'
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion";


const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">About 
            <span className='text-neutral-500'> Me</span> 
        </h2>
        <div className="flex justify-center">
            <motion.div 
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity: 0, x: 100}}
                transition={{ duration: 0.5}}
                className="w-full lg:w-3/4">
                    <div className="flex justify-center">
                        <p className="my-2 max-w-3xl px-8 py-6 text-center">{ABOUT_TEXT}</p>
                    </div>
                    <div className="flex justify-center mt-6">
                        <a 
                            href="/Om_Resume.pdf" 
                            download 
                            className="flex items-center bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-105 duration-300">
                            Download Resume
                        </a>
                    </div>
            </motion.div>

    </div>
    </div>
  )
}

export default About
