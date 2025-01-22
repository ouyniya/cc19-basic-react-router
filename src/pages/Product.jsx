import React from 'react'
import useProductStore from './store/product-store'
import { useEffect } from 'react'
import ProductCard from '../components/ProductCard'

function Product() {

    const products = useProductStore(state => state.products)
    // console.log(products)

    const actionGetdata = useProductStore(state => state.actionGetdata)

    useEffect(() => {
        actionGetdata()
    }, [])

        // image
        // title
        // description
  return (
    <div className='p-5'>

        <div className='flex flex-wrap gap-3 m-auto'>
            {products.map(
            (el, index) => (
                <ProductCard key={index} product={el}/>

            )
        )
            } 
        </div>
       
    </div>
  )
}

export default Product