import React from 'react'
import useUserStore from './store/userStore'


function EasyZustand() {
    
    const address = useUserStore(state => state.address)
    const profile = useUserStore(state => state.profile)
    const products = useUserStore(state => state.products)
    console.log(products[1].title)
    const number = useUserStore(state => state.number)
    console.log(number)
    
    // function 
    const actionIncrease = useUserStore(state => state.actionIncrease)
    const actionDecrease = useUserStore(state => state.actionDecrease)
    const actionMultiply = useUserStore(state => state.actionMultiply)
    const actionDivide = useUserStore(state => state.actionDivide)
    
    // call function
    // actionIncrease()
    
    const hdlClick = () => {
        actionDecrease()
    }
    
    
    return (
    <>
        <h1 className='text-8xl'>
            {number}
        </h1>
        <div className='flex gap-2'>
        <button 
            className='bg-emerald-300 p-2 rounded-md'
            onClick={actionIncrease}
        >
            Increase
        </button>
        <button 
            className='bg-red-300 p-2 rounded-md'
            onClick={hdlClick}
        >
            Decrease
        </button>
        <button 
            className='bg-sky-300 p-2 rounded-md'
            onClick={actionMultiply}
        >
            Multiply by 2
        </button>
        <button 
            className='bg-violet-400 p-2 rounded-md'
            onClick={actionDivide}
        >
            Divide by 2
        </button>
        </div>
    </> 
  )
}

export default EasyZustand