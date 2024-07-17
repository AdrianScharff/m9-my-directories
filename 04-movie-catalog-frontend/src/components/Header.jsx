import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-screen flex justify-center font-bold'>
      <div className='h-[5rem] w-[60%] border-b-2 flex items-center justify-between'>
        <NavLink to='/'>
          <button className='text-center border-4 border-sky-600 p-2'>Movie Catalog</button>
        </NavLink>
        <div className='flex gap-2'>
          <NavLink to='/login'>
            <button className='text-center bg-sky-300 p-2'>Login</button>
          </NavLink>
          <NavLink to='/register'>
            <button className='text-center bg-sky-300 p-2'>Register</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header
