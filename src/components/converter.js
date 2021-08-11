import React, { useState } from "react"
import RomanNumerals from "./romanNumerals"

const Converter = () => {

  const value = new RomanNumerals(100)

  const [stateValue, setValue] = useState(value.baseValue)
  
  const handleChange = e => {
    let targetValue = e.target.value

    if (e.target.id === "latinae") {
      targetValue = value.fromRoman(e.target.value)
    }

    value.setValue(targetValue)
    setValue(value.baseValue)
  }


  return (
    <form>
      <label htmlFor="arabic">
        Arabicae
        <input
          type="number"
          id="arabic"
          value={stateValue}
          onChange={e => handleChange(e)}
        />
      </label>
      <label htmlFor="latinae">
        Latinae
        <input
          type="text"
          id="latinae"
          value={value.toRoman(stateValue)}
          onChange={e => handleChange(e)}
        />
      </label>
    </form>
  )
}
export default Converter
