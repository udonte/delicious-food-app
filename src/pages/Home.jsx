import Veggies from "../components/Veggies";
import Popular from "../components/Popular";
import { motion } from "framer-motion";

import React from 'react'

const home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initital={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5}}
    >
      <Veggies />
      <Popular />
    </motion.div>
  )
}

export default home
