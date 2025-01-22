import { create } from 'zustand'
import axios from 'axios'

const productStore = () => ({
    products: [
    //    {name: 'mouse'},
    ],
})

const useProductStore = create(productStore)

export default useProductStore
