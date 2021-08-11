import React from "react"
import RomanNumerals from "./romanNumerals"


const Converter = () => {
  const handleClick = (e) => {
  
  console.log(value.toRoman())
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
          onChange={e => handleClick(e.target.value)}
          //onChange={e => toRoman(e.target.value)}
        />
      </label>
      <label htmlFor="latinae">
        Latinae
        <input
          type="text"
          id="latinae"
          value={value.toRoman}
          onChange={e => handleClick(e.target.value)}
          //onChange={e => fromRoman(e.target.value) }
        />
      </label>
    </form>
  )
}
export default Converter
