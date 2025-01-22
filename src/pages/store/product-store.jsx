import { create } from 'zustand'
import axios from 'axios'
import { persist } from 'zustand/middleware'

const productStore = (set) => ({
    products: [],
    cart: [],
    //    {name: 'mouse'},
    actionGetdata: async () => {
            try {
                const res = await axios.get('https://dummyjson.com/products')
                // console.log(res.data.products)
                set({ products: res.data.products })
            } catch (error) {
                console.log(error.message)
            }
    },
    actionAddToCart: (product) => {
        set((state) => ({
            cart: [...state.cart, product]
        }))
    },

})

const useProductStore = create(persist(productStore, {name: 'product-store'}))

export default useProductStore
