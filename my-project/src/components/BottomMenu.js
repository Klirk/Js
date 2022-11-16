import { Link} from 'react-router-dom'
import { Popover} from '@headlessui/react'

const BottomMenu = () => {

  return (
    <Popover className=" bg-white">
      <div className=" mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-t-2 border-red-100 py-6 md:justify-start space-x-5">
          <div className="flex-1 flex space-x-5">
              <span className="sr-only">2048</span>
              <img
                className="h-5"
                src="https://upload.wikimedia.org/wikipedia/commons/8/8a/2048_logo.png"
                alt=""
                />
                
                <div className='hidden justify-start md:flex'>© 2022 Klirk, Inc.</div>
          </div>
         
          <nav>
            <Link 
            to="/profile" 
            className="text-base font-medium text-red-500 hover:text-red-900"
            key='Profile'>
              Game
            </Link>
          </nav>
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
            Leaders
            </Link>
          </nav>
          <nav>
            <Link 
            to="/#" 
            className="text-base font-medium text-red-500 hover:text-red-900">
            Help
            </Link>
          </nav>
          <nav>
            <Link 
            to="/#" 
            className="text-base font-medium text-red-500 hover:text-red-900">
            Guides
            </Link>
          </nav>
          </div>
        </div>
    </Popover>
  )
}
export default BottomMenu