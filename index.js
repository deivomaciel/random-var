const getRandomChars = () => {
    const upCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
    const symbols = "_@#&!."

    const upCaseRandom = upCaseLetters[ Math.floor(Math.random() * upCaseLetters.length) ]
    const lowerCaseRandom = lowerCaseLetters[ Math.floor(Math.random() * lowerCaseLetters.length) ]
    const numberRandom = Math.floor(Math.random() * 9)
    const symbolRandom = symbols[ Math.floor(Math.random() * symbols.length) ]

    return ({
        upCaseRandom: upCaseRandom,
        lowerCaseRandom: lowerCaseRandom,
        numberRandom: numberRandom,
        symbolRandom: symbolRandom
    })
}

const changeStringPosition = char => {
    let arrayChar = char.split('')
    let newArrayChar = []

    while(arrayChar.length) {
        let getNewElement  = Math.floor(Math.random() * arrayChar.length)
        let elements = arrayChar.splice(getNewElement, 1)
        newArrayChar.push(elements)
    }
    
    return newArrayChar.join('')
}

const generateValue = (len, options) => {
    let finalValue = ""
    const optionsKeys = ['upCase', 'lowerCase', 'number', 'symbol']

    if(len >= options.length) {
        for(let i = 0; i <= len; i++) {
            for(let i = 0; i < options.length; i++) {
                for(let e = 0; e < optionsKeys.length; e++) {
                    if(finalValue.length == len) break
                    options[i] == optionsKeys[e] && (finalValue += getRandomChars()[`${options[i]}Random`])
                }
            } 
        }

        return changeStringPosition(finalValue)

    } else {
        throw new Error('The size of the value cannot be greater than the number of options')
    }
}

module.exports = generateValue
