import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
        <Link to='/'>
          <h1 className='font-bold text-xl flex items-center'>
            <span className='text-slate-500'>She&She</span>
            <span className='text-slate-700'>Estate</span>
          </h1>
        </Link>
        <form className='bg-white p-2 rounded-lg flex items-center border border-slate-300 shadow-sm'>
          <input
            type="text"
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64 px-2 text-slate-700'
          />
          <FaSearch className='text-slate-600 ml-2 cursor-pointer' />
        </form>
       <ul className='flex gap-4 items-center'>
          <li>
            <Link to='/home' className='hidden sm:inline text-slate-700 hover:text-slate-900 px-3 py-2 hover:bg-slate-300 rounded transition duration-300 ease-in-out'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about' className='hidden sm:inline text-slate-700 hover:text-slate-900 px-3 py-2 hover:bg-slate-300 rounded transition duration-300 ease-in-out'>
              About
            </Link>
          </li>
          <li>
            <Link to='/sign-in' className='text-slate-700 hover:text-slate-900 px-3 py-2 hover:bg-slate-300 rounded transition duration-300 ease-in-out'>
              Sign in
            </Link>
          </li>
        </ul> 
      </div>
    </header>
  )

}
