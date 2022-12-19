const {shuffleArray} = require('./utils')

// THIS ONE DOES NOT WORK NOT SURE WHY?
// describe('shuffleArray should', () => {
//     test('return an array of the same length as the argument sent in', () => {
//         let array = ['kona', 'hollie', 'banjo']
//         let result = shuffleArray(array)
//         expect(result).toBe(3)
//     })
//     test('return an array', () => {
//         let array = ['kona', 'hollie', 'banjo']
//         let result = shuffleArray(array)
//         expect(result).toBe('length')
//     })
// })
const myArray = ['kona', 'hollie', 'banjo']
describe('shuffleArray should', () => {
    test(`return array`, () => {
        expect(Array.isArray(shuffleArray(myArray))).toBe(true)
    })
    test('return an array of the same length as the arguemtn sent in', () => {
        expect(shuffleArray(myArray).length).toBe(myArray.length)
    })
})