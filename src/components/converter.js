import React, { useState } from "react"
import Input from "./converterInput"
import RomanNumerals from "./romanNumerals"

const Converter = () => {
  const value = new RomanNumerals(100)

  const [stateValue, setValue] = useState(value.baseValue)
  const [warning, showWarning] = useState(null)

  const handleChange = e => {
    let targetValue = e.target.value

    if (e.target.id === "latinae") {
      targetValue = value.fromRoman(e.target.value)
    }

    if ((targetValue == 0) | (targetValue.length == 0) | isNaN(targetValue)) {
      triggerWarning("Sorry, Romans didn't use the zero.")
      targetValue = 1
    }

    value.setValue(targetValue)

    setValue(value.baseValue)
  }

  const triggerWarning = message => {
    showWarning(message)
    setTimeout(() => {
      showWarning(null)
    }, 1000);
  }

  return (
    <form>
      <div className="in-2-cols">
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
      </div>
      {warning !== null && <div>{warning}</div>}
    </form>
  )
}
export default Converter
