import React from "react"
import RomanNumerals from "./romanNumerals"

const handleClick = (e) => {

console.log(e)
return null
}

const Converter = () => {

  const value = new RomanNumerals(11)


  return (
    <form>
      <label htmlFor="arabic">
        Arabicae
        <input
          type="number"
          id="arabic"
          value={value}
          onChange={e => handleClick(e.target.value)}
          //onChange={e => toRoman(e.target.value)}
        />
      </label>
      <label htmlFor="latinae">
        Latinae
        <input
        type="text"
        id="latinae"
        placeholder="M"
        onChange={e => handleClick(e.target.value)}
        //onChange={e => fromRoman(e.target.value) } 
        />
      </label>
    </form>
  )
}
export default Converter
