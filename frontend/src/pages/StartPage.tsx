import { motion } from "framer-motion"
import NavButton from "../components/NavButton"

const StartPage = () => {
  return (
    <motion.div   
      className="absolute bottom-0 left-0 right-0 top-0 grid place-items-center"
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 200, opacity: 0 }}
      transition={{
        ease: [.17,.67,.49,1],
        duration: 1,
      }}
    >
      <div className="flex flex-col gap-10">
        <h1 className="text-7xl text-orange-200 text-left">First Time?</h1>
        <div className="flex flex-row gap-6">
          <NavButton
            destination="/login"
          >
            Login
          </NavButton>
          <NavButton
            destination="/register"
          >
            Register
          </NavButton>
          <NavButton
            destination="/choose"
          >
            Continue as Guest
          </NavButton>
        </div>
      </div>
    </motion.div>
  )
}

export default StartPage