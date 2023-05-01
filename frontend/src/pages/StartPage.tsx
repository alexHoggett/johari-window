import { motion } from "framer-motion"

const StartPage = () => {
  return (
    <motion.div   
      className="p-12 flex flex-col gap-12 items-start w-min"
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 200, opacity: 0 }}
      transition={{
        ease: [.17,.67,.49,1],
        duration: 1,
      }}
    >

      <h1>HEELLOOOOo</h1>

    </motion.div>
  )
}

export default StartPage