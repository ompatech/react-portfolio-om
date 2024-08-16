import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { FaPython } from "react-icons/fa";
import { SiPytorch } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiScikitlearn } from "react-icons/si";
import { SiQiskit } from "react-icons/si";
import { motion } from 'framer-motion';

const iconVariannts = (duration) => ({
  initial: {y: -10},
  animate: {
          y: [10, -10],
          transition: {  
            duration: duration, 
            ease: "linear", 
            repeat: Infinity, 
            repeatType: "reverse",
            },
      },
});


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{ opacity: 1, y: 0}}
      initial={{ opacity: 0, y: -100}}
      transition={{ duration: 1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100}}
        transition={{ duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
          variants={iconVariannts(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiPytorch className="text-7xl text-orange-400" />
        </motion.div>
        <motion.div 
          variants={iconVariannts(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiTensorflow className="text-7xl text-orange-400" />
        </motion.div>
        <motion.div 
          variants={iconVariannts(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiScikitlearn className="text-7xl text-orange-400" />
        </motion.div>
        <motion.div 
          variants={iconVariannts(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiQiskit className="text-7xl text-purple-400" />
        </motion.div>
        <motion.div 
          variants={iconVariannts(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
