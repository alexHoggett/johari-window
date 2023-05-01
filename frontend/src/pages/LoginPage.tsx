import { useState } from 'react'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    // log the user in
  }

  const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }
  
  const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        name="email"
        type="email" 
        value={email} 
        onChange={handleEmailChange}  
      />
      <label htmlFor="password">Password</label>
      <input
        name="password"
        type="password" 
        value={password} 
        onChange={handlePasswordChange}  
      />
      <button type="submit">
        Sign in
      </button>
    </form>
  )
}

export default LoginPage;