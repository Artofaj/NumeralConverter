import React, { useState } from "react"
import Input from "./converterInput"
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
      <Input
        id="Arabicae"
        type="number"
        value={stateValue}
         onChange={handleChange}
      />
      <Input
        id="Latinae"
        type="text"
        value={value.toRoman(stateValue)}
         onChange={handleChange}
      />
    </form>
  )
}
export default Converter
