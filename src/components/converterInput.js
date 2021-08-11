import React from "react"

const Input = props => {
  return (
    <label htmlFor={props.id.toLowerCase()}>
      {props.id}
      <input
        type={props.type}
        id={props.id.toLowerCase()}
        value={props.value}
        //onChange={e => props.onChange(e)}
      />
    </label>
  )
}

export default Input
