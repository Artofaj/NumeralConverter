import React, { useState } from "react"
import Input from "./converterInput"
import RomanNumerals from "./romanNumerals"

const Converter = () => {
  const styles = {
    minHeight: "60vh",
    display: "flex",
    justifyContent: "space-bewteen",
    alignContent: "center",
  }

  const value = new RomanNumerals(100)

  const [stateValue, setValue] = useState(value.baseValue)
  const [warning, showWarning] = useState(null)
  const [cheatsheet, showCheatsheet] = useState(false)

  const handleChange = e => {
    let targetValue = e.target.value

    if (e.target.id === "latinae") {
      targetValue = value.fromRoman(e.target.value)
    }

    value.setValue(targetValue)

    setValue(value.baseValue)
  }

  const validateEmpty = e => {
    let targetValue = e.target.value

    if (targetValue == 0) {
      triggerWarning("Sorry, Romans didn't use the zero.")
      targetValue = 1
    }
  }

  const triggerWarning = message => {
    showWarning(message)
    setTimeout(() => {
      showWarning(null)
    }, 1000)
  }

  return (
    <section id="Converter" className="card">
      {warning !== null && (
        <div style={{ backgroundColor: `var(--clr-red)` }}>{warning}</div>
      )}
      <form>
        <div style={styles} className="in-2-cols">
          <Input
            id="Arabicae"
            type="number"
            value={stateValue}
            onBlur={validateEmpty}
            onChange={handleChange}
          />
          <Input
            id="Latinae"
            type="text"
            value={value.toRoman(stateValue)}
            onBlur={validateEmpty}
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  )
}
export default Converter
