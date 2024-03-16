import React from 'react'
type btnStyleProps = {
    btnStyle : React.CSSProperties
}
const ButtonStyle = ({btnStyle}:btnStyleProps) => {
  return (
    <div style={btnStyle}>ButtonStyle</div>
  )
}

export default ButtonStyle