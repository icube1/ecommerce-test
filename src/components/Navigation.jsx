import React from 'react'
import { Link } from 'react-router-dom'
import useCart from '../hooks/useCart'

export const Navigation = () => {
    const {getCartSize} = useCart()
  return (
    <nav>
        <Link to="/">
        <h2>All Products</h2>
        </Link>

        <Link to="/Cart">
        <h2>Cart ({getCartSize()})</h2>
        </Link>
    </nav>
  )
}
