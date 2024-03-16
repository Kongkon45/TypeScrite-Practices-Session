import React from 'react'
type ChildrenType = {
    children : React.ReactNode
}

const Cart = ({children}:ChildrenType) => {
  return (
    <div className='cart'>
        {children}
    </div>
  )
}

export default Cart