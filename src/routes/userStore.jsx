import React from 'react'
import { create } from 'zustand'

const userStore = () => ({
        firstName: 'nnn',
        lastName: 'mmmm',
        address: {
            street: '1234',
            zipcode: '567',
        }
})


const useUserStore = create(userStore)
export default useUserStore