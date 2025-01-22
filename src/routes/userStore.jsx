import React from 'react'
import { create } from 'zustand'

const userStore = () => ({
        firstName: 'Ouy',
        lastName: 'mmmm',
        address: {
            street: '1234',
            zipcode: '567',
        },
        profile: ['OuyNiya', 'aaaa'],
        products: [
            {id: 1, title: 'ASUS', price: 40000},
            {id: 2, title: 'MSI', price: 50000},
        ]
})

const useUserStore = create(userStore)
export default useUserStore
