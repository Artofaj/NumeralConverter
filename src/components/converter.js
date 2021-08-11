import React from "react"

class RomanNumerals {

    toRoman =() => "perro"
}

const Converter = () => {

const toRoman = (e) => {
    console.log(e)
}
const fromRoman = () => "perro"

  return (
    <form>
      <label htmlFor="arabic">
        Arabicae
        <input type="number" id="arabic" placeholder={1000} onChange={e => toRoman(e.target.value)} />
      </label>
      <label htmlFor="latinae">
        Latinae
        <input type="text" id="latinae" placeholder="M"/>
      </label>
    </form>
  )
}
export default Converter
