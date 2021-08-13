import React, { useState } from "react"
import Input from "./converterInput"
import RomanNumerals from "./romanNumerals"

const Converter = () => {
  const styles = {
    backgroundColor: '#FFF',
    minHeight: "60vh",
    display:"flex",
    justifyContent: "space-bewteen",
    alignContent:"center",
    borderRadius:"var(--rounded-corners)"
  }

  const value = new RomanNumerals(100)

  const [stateValue, setValue] = useState(value.baseValue)
  const [warning, showWarning] = useState(null)

  const handleChange = e => {
    let targetValue = e.target.value

    if (e.target.id === "latinae") {
      targetValue = value.fromRoman(e.target.value)
    }

    if ((targetValue == 0)) {
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
    }, 1000)
  }

  return (
    <section id="Converter">
      <form>
        <div style={styles} className="in-2-cols">
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
      </form>
      {warning !== null && (
        <div style={{ backgroundColor: `var(--clr-red)` }}>{warning}</div>
      )}
    </section>
  )
}
export default Converter
