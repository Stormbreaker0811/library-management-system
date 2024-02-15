import React from 'react'

const Navbar = () => {
  return (
    <div className='container flex-col justify-between sticky'>
        <h1 className='text-2xl mx-2 my-2'>Library Application</h1>
        <div className=''>
        <ul className='flex'>
                <li className=' list-none mx-2'><a href="/">Home</a></li>
                <li className=' list-none mx-2'><a href="/books">Books</a></li>
                <li className=' list-none mx-2'><a href="/articles">Articles</a></li>
                <li className=' list-none mx-2'><a href="/contact-us">Contact Us</a></li>
                <li className=' list-none mx-2'><a href="/login">Login</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
