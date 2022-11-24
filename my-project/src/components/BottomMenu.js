import { Link} from 'react-router-dom'
import { Popover} from '@headlessui/react'

const BottomMenu = () => {

  return (
    <Popover className=" bg-white">
      <div className=" mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-t-2 border-red-100 py-6 md:justify-start space-x-5">
          <div className="flex-1 flex space-x-5">
              <span className="sr-only">AnimeList</span>
              <img
                className="h-5"
                src="https://i.imgur.com/A5t9RHJ.jpg"
                alt=""
                />
                
                <div className='hidden justify-start md:flex'>© 2022 Klirk, Inc.</div>
          </div>
          <nav>
            <Link 
            to="/#" 
            className="text-base font-medium text-red-500 hover:text-red-900">
            Main
            </Link>
          </nav>
          <nav>
            <Link 
            to="/anime" 
            className="text-base font-medium text-red-500 hover:text-red-900"
            key='Anime'>
              Anime
            </Link>
          </nav>
          <nav>
            <Link 
            to={localStorage.AuthData === undefined ? '/' : '/profile/' + localStorage.AuthData}
            className="text-base font-medium text-red-500 hover:text-red-900"
            key='Profile'>
              Profile
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