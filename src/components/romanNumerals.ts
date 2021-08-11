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

export default class RomanNumerals {

    number: number

    constructor(number) {
        this.number = number
    }

    toRoman = num => {
        let result = ""

        const romans = Object.keys(rules)

        for (let i = 0; i < romans.length; ++i) {
            const val = rules[romans[i]]
            while (num >= val) {
                num -= val
                result += romans[i]
            }
        }

        return result
    }

    fromRoman = string => {
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

        result = result + rules[num.charAt(num.length - 1)]

        return result
    }

    render() {
        return this.number
    }
}