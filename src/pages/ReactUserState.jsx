import React, {useState} from 'react'

function ReactUserState() {
    const num = 5
    const [number2, setNumber2] = useState({
        num: 5
    })
    const [number, setNumber] = useState(0)
    
    const hdlBtn = (n) => {
        setNumber(prev => prev + n)
    }

    const hdlBtn2 = (n) => {
        setNumber2(prev => {
            return {
                num: prev.num + n
            }
        })
    }
    const hdlBtn2Mul = (n) => {
        setNumber2(prev => {
            return {
                num: prev.num * n
            }
        })
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
        <hr />

        <h1 className='text-8xl'>{number2.num}</h1>
        <button
            onClick={() => hdlBtn2(1)}
            className='rounded-md bg-green-500  :hover:duration-300 p-2 hover:scale-105 m-2'
        >
            Increase2
        </button>
        <br />
        <button
            onClick={() => hdlBtn2(-1)}
            className='rounded-md bg-red-500 :hover:duration-300 p-2 hover:scale-105'
        >
            Decrease2
        </button>
        <br />
        <button
            onClick={() => hdlBtn2Mul(2)}
            className='rounded-md bg-blue-300 :hover:duration-300 p-2 hover:scale-105'
        >
            multiply 2
        </button>
    </div>
  )
}

export default ReactUserState