import React from "react"

class RomanNumerals {
  toRoman = () => "perro"
}

const Converter = () => {
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

  const toRoman = num => {
    let result = ""

    const romans = Object.keys(rules)

    for (let i = 0; i < romans.length; ++i) {
      const val = rules[romans[i]]
      while (num >= val) {
        num -= val
        result += romans[i]
      }
    }

    console.log(result)
  }

  const fromRoman = string => {
    let result = 0

    let num = string.toUpperCase()

    for (let i = 0; i + 1 < num.length; ++i) {
      const current = rules[num.charAt(i)]
      const next = rules[num.charAt(i + 1)]
      if (current >= next) {
        result += current
      } else {
        result -= current
      }
    }

    console.log(result + rules[num.charAt(num.length - 1)])
  }

  return (
    <form>
      <label htmlFor="arabic">
        Arabicae
        <input
          type="number"
          id="arabic"
          placeholder={1000}
          onChange={e => toRoman(e.target.value)}
        />
      </label>
      <label htmlFor="latinae">
        Latinae
        <input type="text" id="latinae" placeholder="M" onChange={e => fromRoman(e.target.value) } />
      </label>
    </form>
  )
}
export default Converter
