import React from 'react'

function Recap() {
    const obj = {
        firstName: 'Ouy',
        lastName: 'ooooo'
    }

    const obj2 = {
        street: 'bbb',
    }

    obj2.address = 'Bkk'
    // console.log(obj.firstName)

    const mergeObj = {...obj, ...obj2}
    // console.log(mergeObj)

    const arr = ['ouyy', 'nnn']
    arr[2] = 'bkk'
    // console.log(arr)

    const arr2 = ['abc', 'def']
    const mergeArr = [...arr, ...arr2]
    // console.log(mergeArr[1])

    let productArr = [
        {id: 1, title: 'ASUS' , price: 40000 ,},
        {id: 2, title: 'MSI' , price: 50000 ,},
    ]

    const newProduct = {id: 3, title: 'Apple' , price: 50000,}

    productArr = [...productArr, newProduct]

    console.log(productArr)
;
  return (
    <div>
        Recap, Easy, Zustand
    </div>
  )
}

export default Recap