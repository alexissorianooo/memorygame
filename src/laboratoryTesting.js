let items = ['apple', 'orange', 'potato']

let allItems = [...items, ...items.slice()]

console.log(allItems)

for(let i=allItems.length-1; i>0; i--){ // loop through all the items in the array from (end) index to (start) index
    let randomIndex = Math.floor(Math.random() * (i+1)) // generate random numbers dependes on the index (index: 5 has all the available index to call)
    let temp = allItems[i] // get the current index aand pass it to temp, to save it's current value
    allItems[i] = allItems[randomIndex] //  get the generated number, and the index currently on. replace the value of the index currently on with the value of the array with randomly generated index
    allItems[randomIndex] = temp // pass the temporary value to the array with randomly generated index
}
console.log(allItems)