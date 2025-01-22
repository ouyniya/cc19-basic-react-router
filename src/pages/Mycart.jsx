import React from 'react'
import useProductStore from './store/product-store'
import ProductCard from '../components/ProductCard'

function Mycart() {

    const cart = useProductStore(state => state.cart)
    const actionClear = useProductStore(state => state.actionClear)

    // console.log(cart)

  return (
    <div>
        <button 
        onClick={actionClear}
        className='bg-slate-400 p-2 rounded-md'
        >Clear</button>
        {cart.map((product, index) => (
            <ProductCard key={index} product={product}/>
        ))}
    </div>
  )
}

export default Mycart