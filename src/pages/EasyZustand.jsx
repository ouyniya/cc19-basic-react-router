import React from 'react'
import { create } from 'zustand'
import useUserStore from '../routes/userStore'

    // const userStore = () => ({
    //     firstName: 'nnn',
    //     lastName: 'mmmm',
    //     address: {
    //         street: '1234',
    //         zipcode: '567',
    //     }
    // })

    // const useUserStore = create(userStore)

    // const kk = useUserStore((state) => state.firstName)
    // console.log(kk)

    
    function EasyZustand() {

    const firstName = useUserStore(state => state.firstName)
    console.log(firstName)

  return (
    <div>
        EasyZustand
    </div> 
  )
}

export default EasyZustand