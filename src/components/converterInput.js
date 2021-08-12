import React from "react"

const Input = props => {

  const validateInput = e => {
    if ((e.keyCode === 8) | (e.keyCode >= 35 && e.keyCode <= 40)) {
      return true
    }

    if (props.type === "number" && !/^[0-9]/g.test(e.key)) {
      return e.preventDefault()
    }

    if (props.type === "text" && !/^[mMdDcCxXiIvVlL]/g.test(e.key)) {
      return e.preventDefault()
    }
  }

  return (
    <label htmlFor={props.id.toLowerCase()}>
      {props.id}
      <input
        type={props.type}
        id={props.id.toLowerCase()}
        value={props.value}
        onChange={e => props.onChange(e)}
        onKeyDown={e => validateInput(e)}
      />
    </label>
  )
}

export default Input
