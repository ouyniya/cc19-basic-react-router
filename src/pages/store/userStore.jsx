import { create } from 'zustand'

const userStore = (set) => ({
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
        ],
        number: 5,
        actionIncrease: () => {
            // console.log("Easy!!!")
            set((state) => ({
                number: state.number + 1
            }))
        },
        actionDecrease: (newvalue) => {
            console.log(newvalue)
            set((state) => ({
                number: state.number - 1 <= 0 ? 0 : state.number - 1
            }))
        },
        actionMultiply: () => {
            // console.log()
            set((state) => ({
                number: state.number * 2
            }))
        },
        actionDivide: () => {
            set((state) => ({
                number: Math.max(0, state.number / 2)
            }))
        }
})

const useUserStore = create(userStore)
export default useUserStore
