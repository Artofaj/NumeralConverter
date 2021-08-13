import React, { useState } from "react"
import Input from "./converterInput"
import RomanNumerals from "./romanNumerals"
import CheatSheet from "./cheatSheet"
import Warning from "./warning"

const Converter = () => {
  const styles = {
    minHeight: "60vh",
    display: "flex",
    justifyContent: "space-bewteen",
    alignContent: "center",
    flexDirection: "column",
  }

  const value = new RomanNumerals(1000)

  const [stateValue, setValue] = useState(value.baseValue)
  const [warning, showWarning] = useState(null)

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
      value.setValue(1)
    }
  }

  const triggerWarning = message => {
    showWarning(message)
  }

  return (
    <section id="Converter" className="card" style={styles}>
      <Warning warning={warning} showWarning={showWarning} />

      <form
        style={{ margin: "auto", padding: "var(--gap-md) 0", width: "100%" }}
      >
        <div className="in-2-cols">
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
      
      <CheatSheet />
    </section>
  )
}
export default Converter
