import { ShoppingBasket } from 'lucide-react';
import useProductStore from '../pages/store/product-store';

function ProductCard({ product }) {

  const actionAddToCart = useProductStore(state => state.actionAddToCart)
  const actionRemoveProduct = useProductStore(state => state.actionRemoveProduct)

  return (
    <div className="shadow-md max-w-80 m-auto rounded-t-lg">
      <button
      onClick={() => actionRemoveProduct(product.id)}>x</button>
        <div className='flex justify-center w-full'>
          <img src={product?.images[0]} className='object-cover w-[200px] h-[200px]' />
        </div>
    
    <h1 className='text-center text-2xl text-'>{product.title}</h1>
    <p className="text-red-500 text-[30px] text-center">${product?.price}</p>
    <p className='p-3'>{product?.description}</p>
    <p>
    <button 
    className='bg-slate-900 text-zinc-50 p-3 w-full text-center flex justify-center gap-2 rounded-b-lg hover:pointer-events-auto' 
    onClick={() => actionAddToCart(product)}
    > Add to Cart <ShoppingBasket color='gray'/></button>
    </p>
</div>
  )
}

export default ProductCard