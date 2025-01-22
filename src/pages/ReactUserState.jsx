import React, {useState} from 'react'

function ReactUserState() {
    const num = 5
    const [number, setNumber] = useState(0)
    
    const hdlBtn = (n) => {
        setNumber(prev => prev + n)
    }

    return (
    <div className='flex-col gap-2'>
        <h1 className='text-8xl'>{number}</h1>
        <button
            onClick={() => hdlBtn(1)}
            className='rounded-md bg-green-500  :hover:duration-300 p-2 hover:scale-105 m-2'
        >
            Increase
        </button>
        <br />
        <button
            onClick={() => hdlBtn(-1)}
            className='rounded-md bg-red-500 :hover:duration-300 p-2 hover:scale-105'
        >
            Decrease
        </button>
    </div>
  )
}

export default ReactUserState