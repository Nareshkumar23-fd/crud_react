import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = ({ cartCount }) => {

  const navigate = useNavigate();

  return (
    <div className='flex justify-between items-center p-4 bg-white '>
      <h1 onClick={()=>navigate("/")}
       className='text-2xl font-bold cursor-pointer'>CRUD</h1>
      <div>
        <Link to="/cartlist" className='font-bold mx-2' >
          CART <span className='font-bold text-sm border border-black bg-black text-white px-2 rounded-full'>{cartCount}</span>
        </Link>
      </div>
    </div>
  )
}

export default NavBar
