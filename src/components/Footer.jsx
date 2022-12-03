import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
     <div className='container mt-3 py-3 bg-dark text-white'>
      <h1>About</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, mollitia!</p>
      <Link to='/' className='btn btn-primary'>
      Go back to search
      </Link>
     </div>
    </>
  )
}

export default Footer