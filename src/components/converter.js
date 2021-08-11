import React from "react"
import RomanNumerals from "./romanNumerals"


const Converter = () => {
  const handleChange = e => {
    return null
  }

  const value = new RomanNumerals(11)


  return (
    <form>
      <label htmlFor="arabic">
        Arabicae
        <input
          type="number"
          id="arabic"
          value={value.baseValue}
          onChange={e => handleChange(e.target.value)}
        />
      </label>
      <label htmlFor="latinae">
        Latinae
        <input
          type="text"
          id="latinae"
          value={value.toRoman()}
          onChange={e => handleChange(e.target.value)}
        />
      </label>
    </form>
  )
}
export default Converter
