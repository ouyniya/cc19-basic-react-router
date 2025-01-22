import React from 'react'
import useProductStore from './store/product-store'
import ProductCard from '../components/ProductCard'

function Mycart() {

    const cart = useProductStore(state => state.cart)

    console.log(cart)

  return (
    <div>
        {cart.map((product, index) => (
            <ProductCard key={index} product={product}/>
        ))}
    </div>
  )
}

export default Mycart