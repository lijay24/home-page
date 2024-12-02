import React from 'react'
import Header from '../Header/Header'

const SingleProduct = () => {
  return (
    <div>
      <Header/>
      <nav className="text-sm text-gray-500">
      <ol className="flex space-x-2">
        <li>
          <a href="/" className="hover:text-gray-700">
            Home
          </a>
        </li>
        <li>
          <span className="text-gray-400">2</span>
        </li>
        <li>
          <a href="/Shop" className="hover:text-gray-700">
            Shop
          </a>
        </li>
        <li>
          <span className="text-gray-400">1</span>
        </li>
        <li className="text-gray-900">Asgaard sofa</li>
      </ol>
    </nav>

    </div>
  )
}

export default SingleProduct
