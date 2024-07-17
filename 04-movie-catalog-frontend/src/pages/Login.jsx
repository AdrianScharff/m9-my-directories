import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Login form submitted')
    console.log(`email: ${email}, password: ${password}`)
  }

  return (
    <div className='w-screen flex justify-center mt-[5rem]'>
      <form
        className='w-[40%] flex flex-col items-center gap-6'
        onSubmit={onSubmit}
      >
        <div className='w-full text-[50px] flex items-center gap-3'><FaSignInAlt /> Login</div>
        <div className='w-full flex flex-col gap-3 text-[20px] border-4 p-3'>
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            className='border w-full p-2'
            placeholder='Email'
            onChange={onChange}
          />
          <input
            type='password'
            name='password'
            id='password'
            value={password}
            className='border w-full p-2'
            placeholder='Password'
            onChange={onChange}
          />
          <button type='submit' className='bg-sky-300 rounded p-3'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Login
