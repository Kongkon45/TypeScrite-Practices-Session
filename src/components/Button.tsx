import React from 'react'
type buttonProps = {
    children : React.ReactNode
}
const Button = ({children}:buttonProps) => {
  return (
    <div>
        <button>{children}</button>
    </div>
  )
}

export default Button