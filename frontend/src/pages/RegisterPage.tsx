import { motion } from "framer-motion";
import { useState } from 'react'
import InputField from '../components/InputField'

const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordAuth, setPasswordAuth] = useState('')

  const handleSubmit = () => {
    // register the useer
  }

  const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }
  
  const handleFirstNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFirstName(e.currentTarget.value)
  }

  const handleLastNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setLastName(e.currentTarget.value)
  }

  const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }

  const handlePasswordAuthChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPasswordAuth(e.currentTarget.value)
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
          name='firstname'
          type='name'
          value={firstName}
          label='Firstname'
          onChange={handleFirstNameChange}
        />
        <InputField
          name='lastname'
          type='text'
          value={lastName}
          label='Lastname'
          onChange={handleLastNameChange}
        />
        <InputField
          name='password'
          type='password'
          value={password}
          label='Password'
          onChange={handlePasswordChange}
        />
        <InputField
          name='passwordAuth'
          type='password'
          value={passwordAuth}
          label='Confirm Password'
          onChange={handlePasswordAuthChange}
        />
        <div className="flex gap-6">
          <button 
            type="submit"
            className="px-10 py-2 border text-lg rounded-full w-max text-center transition duration-200 hover:bg-orange-200 hover:text-black"
          >
            Register
          </button>
        </div>
      </form>
    </motion.div>
  )
}

export default RegisterPage;