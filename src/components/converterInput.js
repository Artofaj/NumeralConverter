import React from "react"

const Input = params => {
  const validateInput = e => {
    if ((e.keyCode === 8) | (e.keyCode >= 35 && e.keyCode <= 40)) {
      return true
    }

    if (params.type === "number" && !/^[0-9]/g.test(e.key)) {
      return e.preventDefault()
    }

    if (params.type === "text" && !/^[mMdDcCxXiIvVlL]/g.test(e.key)) {
      return e.preventDefault()
    }
  }

  return (
    <label htmlFor={params.id.toLowerCase()}>
      <div style={{margin:"var(--gap-sm)"}} className="big-font font-centered">{params.id}</div>
      <input
        style={{
          fontSize: "2rem",
          padding: "0.5rem 1rem",
          width: "100%",
        }}
        type={params.type}
        id={params.id.toLowerCase()}
        value={params.value}
        onChange={e => params.onChange(e)}
        onBlur={e => params.onBlur(e)}
        onKeyDown={e => validateInput(e)}
        min={params.type ==="number" && 1}
      />
    </label>
  )
}

export default Input
