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
import { Link, Navigate, redirect } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';

export default function SignIn() {
  const [shouldRedirect, setRedirect] = useState()
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const getName = (e) => {
    setName(e)
  }
  const getPassword = (e) => {
    setPassword(e)
  }

  const postSignIn = (event) => {
    event.preventDefault();

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

  return (
    <>
      {shouldRedirect && <Navigate to="/" replace={true} />}
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
              Log in to your account
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
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  placeholder="User name"
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
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
                  placeholder="Password"
                  onChange={(e) => getPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                onClick={(e) => postSignIn(e)}
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-red-300 group-hover:text-red-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
            <div className="flex items-center justify-end">
              <p className='pr-2'>
                Don't have an account?
              </p>
              <div className="text-sm">
                <Link to="/signup" className="font-medium text-red-600 hover:text-red-500">
                  Sign Up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}
