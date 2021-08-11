import React from "react"

class RomanNumerals {

    toRoman =() => "perro"
}

const Converter = () => {

const toRoman = (num) => {
    const rules = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      XXX: 30,
      XX: 20,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    }

    let res = ""

    const romans = Object.keys(rules)
    
    for (let i = 0; i < romans.length; ++i) {
      const val = rules[romans[i]]
      while (num >= val) {
        num -= val
        res += romans[i]
      }
    }

    console.log(res)
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
