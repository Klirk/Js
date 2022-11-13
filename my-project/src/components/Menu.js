import { Fragment, useState} from 'react'
import { Link} from 'react-router-dom'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  LifebuoyIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    to: '/#',
    icon: LifebuoyIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    to: '/#',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    to: '/#',
    icon: CalendarIcon,
  },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Menu = () => {

  const [username, setName] = useState('')
  return (
    <Popover className="relative bg-white">
      <div className="min-h-full mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-b-2 border-red-100 py-6 md:justify-start">
          <div className="flex justify-start lg:w-0 lg:flex-1">
          <nav>
            <Link 
            
            to="/#">
              <span className="sr-only">2048</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://upload.wikimedia.org/wikipedia/commons/8/8a/2048_logo.png"
                alt=""
              />
            </Link>
            </nav>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-red-400 hover:bg-red-100 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-5 md:flex">
          <nav>
            <Link 
            to="/profile" 
            className="text-base font-medium text-red-500 hover:text-red-900"
            key='Profile'>
              Profile
            </Link>
          </nav>
          <nav>
            <Link 
            to="/#" 
            className="text-base font-medium text-red-500 hover:text-red-900">
            LeaderBoard
            </Link>
          </nav>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-red-900' : 'text-red-500',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2'
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-red-600' : 'text-red-400',
                        'ml-2 h-5 w-5 group-hover:text-red-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <nav>
                            <Link
                              key={item.name}
                              to={item.to}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-red-50"
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0 text-red-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-red-900">{item.name}</p>
                                <p className="mt-1 text-sm text-red-500">{item.description}</p>
                              </div>
                            </Link>
                            </nav>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div htmlFor='name' className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <input
             type="text"
             name="name"
             id="name"
             className='ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border-2 border-red-600 px-4 py-2 text-base font-medium shadow-sm focus: outline-red-900'
             placeholder='Username'
             value={username} onChange={(e) =>setName(e.target.value)}
            ></input>
            <nav>
            <Link
              to="/profile"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border-2 border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700"
              state={{data : username}}
            >
              Sign up
            </Link>
            </nav>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-red-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8a/2048_logo.png"
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-red-400 hover:bg-red-100 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              <nav>
                <Link to="/#" className="text-base font-medium text-red-900 hover:text-red-700">
                  Profile
                </Link>
                </nav>
                <nav>
                <Link to="/#" className="text-base font-medium text-red-900 hover:text-red-700">
                  Leader Board
                </Link>
                </nav>
                {resources.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="text-base font-medium text-red-900 hover:text-red-700"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div>
              <nav>
                <Link
                  to="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700"
                >
                  Sign up
                </Link>
                </nav>
                <p className="mt-6 text-center text-base font-medium text-red-500">
                  Existing customer?{' '}
                  <nav>
                  <Link to="/#" className="text-red-600 hover:text-red-500">
                    Sign in
                  </Link>
                  </nav>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
export default Menu