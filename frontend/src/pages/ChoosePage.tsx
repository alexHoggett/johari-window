import Adjective from "../components/Adjective";
import { motion } from "framer-motion";

const ChoosePage = () => {
  return (
    <motion.div className='absolute bottom-0 left-0 right-0 top-0 grid place-items-center'>
      <Adjective>Caring</Adjective>
    </motion.div>
  )
}

export default ChoosePage;