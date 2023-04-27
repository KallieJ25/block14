// create an array of numbers
// create a for loop to reverse the array of numbers

const array = [1,-1,2,3,5,-8,13]
const reversedArray =[]

for(let i = array.length -1; i >= 0; i--) {
    const valueAtIndex = array[i]
    reversedArray.push(valueAtIndex)
}

console.log(reversedArray)