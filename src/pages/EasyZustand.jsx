import React from 'react'
import useUserStore from '../routes/userStore'

function EasyZustand() {

    const firstName = useUserStore(state => state.firstName)
    const address = useUserStore(state => state.address)
    const profile = useUserStore(state => state.profile)
    // console.log(profile)
    const products = useUserStore(state => state.products)
    console.log(products[1].title)

  return (
    <div>
        <p>
            {profile[0]}
            <br />
            {address.zipcode}
            <br />
            {products[1].title}
        </p>
    </div> 
  )
}

export default EasyZustand