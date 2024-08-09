import React from 'react'
// import styles from '../style'
import { motion } from "framer-motion"

const Button = ({ styles }) => {
    return (
        <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
        <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}> Get Started

        </button>
        </motion.button>
    )
}

export default Button