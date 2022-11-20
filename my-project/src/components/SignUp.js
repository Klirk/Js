/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';

export default function SignUp() {
  const [shouldRedirect, setRedirect] = useState(false)
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [cPassword, setCPassword] = useState()
  const getName = (value) => {
    setName(value)
  }
  const getPassword = (value) => {
    setPassword(value)
  }
  const getCPassword = (value) => {
    setCPassword(value)
  }

  const postSignUp = async (event) => {
    event.preventDefault();

    const user = {
      UserName: name,
      Password: password,
      ConfirmPassword: cPassword,
      IdType: 2
    };
    axios.post(`https://localhost:7278/api/Auth/SignUp`, user)
      .then(res => {
        localStorage.setItem('Registration', res.data.isSuccess)
      }).then(() => {
        if (localStorage.Registration === 'true') {
          const user = {
            UserName: name,
            Password: password,
          };
          axios.post(`https://localhost:7278/api/Auth/SignIn`, user)
            .then(res => {
              localStorage.setItem('Auth', res.data.isSuccess)
              if (localStorage.Auth === 'true') {
                localStorage.setItem('AuthData', user.UserName)
      
              }
              else {
                localStorage.removeItem('AuthData')
      
              }
            }).then(() => {
              window.location.reload()
            })
        }
        else{
          localStorage.removeItem('Registration')
          window.location.reload()
        }
        
      })
      return 
  }



  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://i.imgur.com/A5t9RHJ.jpg"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Create your account
            </h2>

          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="name" className="sr-only">
                  User Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  placeholder="User Name"
                  onChange={(e) => getName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  placeholder="Password"
                  onChange={(e) => getPassword(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password confirmation
                </label>
                <input
                  id="password_confirmation"
                  name="password_confirmation"
                  type="password"
                  autoComplete="current-password_confirmation"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  placeholder="Password confirmation"
                  onChange={(e) => getCPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                onClick={(e) => postSignUp(e)}
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-red-300 group-hover:text-red-400" aria-hidden="true" />
                </span>
                Sign Up
              </button>
              {shouldRedirect ? <Navigate to="/signin" replace={true}/>: null}
            </div>
            <div className="flex items-center justify-end">
              <p className='pr-2'>
                Already have an account?
              </p>
              <div className="text-sm">
                <Link to="/signin" className="font-medium text-red-600 hover:text-red-500">
                  Sign In
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
