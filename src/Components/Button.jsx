import React from 'react'


export default function Button(prop) {
  return (
   <>
   <button onClick={prop.buttonFunctionality} style={prop.style}>{prop.buttonText}</button>
   </>
  )
}
