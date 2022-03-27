import React from 'react'

function TextBox(props : any) {
  return (
    <div>
        <label htmlFor={props.label}>Enter {props.label}: </label>
        <input type="text" onChange={event => props.change(event.target.value)}></input>
    </div>
  )
}

export default TextBox