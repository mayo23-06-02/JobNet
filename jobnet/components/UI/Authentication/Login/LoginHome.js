import React, { useEffect, useState } from 'react'
import Logo from '../../Reusable/Logo/Logo'
import Input from '../../Reusable/Input/Input'
import Checkbox from '../../Reusable/Chekbox/Checkbox'
import Button from '../../Button/Button'
import { BsApple, BsGoogle } from "react-icons/bs";
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { setCookie } from 'cookies-next'

export default function LoginHome() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const [users, setUsers] = useState([])
  const [errorMessage, setErrorMessage] = useState("")
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("")

  useEffect(() => {
    fetch('/api/auth')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
      })
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    const selectedUser = users.find(
      (user) => user.email === email
    );
    setCookie('email', email)
    setCookie('userData', selectedUser)

    if (!selectedUser) {
      setErrorMessage('Account not found. Please try again')
    } else {
      if (selectedUser.password === password) {
        router.push('../../home')
      } else {
        setPasswordErrorMessage("Incorrect Email/Password!")
      }
    }
  }
  return (
    <div className=' items-center h-screen w-full'>
      <div className='space-y-8'>
        <div className='w-full items-center justify-center flex'>
          <Logo />
        </div>
        <div className='space-y-8 flex items-center flex-col border border-black/10 shadow rounded-2xl py-8 px-6'>
          <div className='w-full flex-col items-center justify-center flex space-y-2'>
            <p className='font-bold text-2xl'>Sign In</p>
            <p className='text-gray-600'>Welcome back! Please enter your details</p>
          </div>
          <div className='flex flex-col space-y-8 w-full'>
            <div className='text-red-600'>
              <p>{errorMessage}</p>
              <p>{passwordErrorMessage}</p>
            </div>
            <div className='flex flex-col space-y-6 w-full'>
              <Input label={"Email Address"} value={email} onChange={(e) => setEmail(e.target.value)} />
              <Input label={"Password"} type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
              <div className='flex w-full cursor-pointer justify-between items-center'>
                <Checkbox label={'Remember Me'} />
                <p className='text-blue-500 hover:underline cursor-pointer '>Forgot Password?</p>
              </div>
            </div>
            <div className='w-full space-y-8'>
              <Button label={"Sign In"} onClick={handleSubmit} />
              <div className='flex items-center justify-center space-x-2 text-gray-400'>
                <div className='h-0.5 w-full bg-gray-100' />
                <p>OR</p>
                <div className='h-0.5 w-full bg-gray-100' />
              </div>
              <div className='grid grid-cols-2 grid-flow-row gap-4'>
                <div className='hover:scale-105 cursor-pointer flex items-center border py-3 rounded-xl justify-center space-x-4'>
                  <BsGoogle className="text-xl" />
                  <p>Sign In with Google</p>
                </div>
                <div className='hover:scale-105 cursor-pointer flex items-center border py-3 rounded-xl justify-center space-x-4'>
                  <BsApple className="text-xl" />
                  <p>Sign In with Apple</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Link href="/register">
              <p className='text-gray-400'>Don't have an account? <span className='font-bold hover:underline text-black cursor-pointer'>Sign Up</span></p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
