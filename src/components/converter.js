import React, { useState, useEffect } from "react"
import RomanNumerals from "./romanNumerals"

const Converter = () => {
  const handleChange = e => {
    value.setValue(e)
    setValue(value.baseValue)
  }
  const value = new RomanNumerals(100)

  const [stateValue, setValue] = useState(value.baseValue)

  return (
    <form>
      <label htmlFor="arabic">
        Arabicae
        <input
          type="number"
          id="arabic"
          value={stateValue}
          onChange={e => handleChange(e.target.value)}
        />
      </label>
      <label htmlFor="latinae">
        Latinae
        <input
          type="text"
          id="latinae"
          value={value.toRoman(stateValue)}
          onChange={e => handleChange(e.target.value)}
        />
      </label>
    </form>
  )
}
export default Converter
