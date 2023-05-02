import { useState } from 'react'
import InputField from '../components/InputField'
import NavButton from '../components/NavButton'
import { motion } from 'framer-motion'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    // log the user in
  }

  const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value)
    setEmail(e.currentTarget.value)
  }
  
  const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }

  return (
    <motion.div className='absolute bottom-0 left-0 right-0 top-0 grid place-items-center'>
      <form 
      onSubmit={handleSubmit}
      className='flex flex-col gap-12 items-center'
    >
      <InputField
        name='email'
        type='email'
        value={email}
        label='Email'
        onChange={handleEmailChange}
      />
      <InputField
        name='password'
        type='password'
        value={password}
        label='Password'
        onChange={handlePasswordChange}
      />
      <div className="flex gap-6">
        <button 
          type="submit"
          className="px-10 py-2 border text-lg rounded-full w-max text-center transition duration-200 hover:bg-orange-200 hover:text-black"
        >
          Sign in
        </button>
        <NavButton
          destination='/register'
        >
          Register
        </NavButton>

      </div>
    </form>
    </motion.div>
    
  )
}

export default LoginPage;