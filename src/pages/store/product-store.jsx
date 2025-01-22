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
        // console.log(product)
        set((state) => ({
            cart: [...state.cart, product]
        }))
    },
    actionClear: () => {
        set(() => ({
            cart: []
        }))
    },
    actionRemoveProduct: (id) => {
        set((state) => ({
            cart: state.cart.filter((el) => el.id !== id)
        }))
    }

})

const persistStore = {
    name: 'product-store',
}

const useProductStore = create(persist(productStore, persistStore))

export default useProductStore
