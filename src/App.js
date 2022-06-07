import Navbar from './Navbar'
import Blocks from './Blocks'
import React from 'react'


function App() {

  let items = ['apple', 'orange', 'potato', 'tomato', 'strawberry', 'mango', 'banana', 'watermelon']
  let allItems = [...items, ...items.slice()]

  const [memoryItems, setMemoryItems] = React.useState({
    shuffledItems: '',
    numTurns: 0,
    compare: false, // to know if 1st or 2nd click
    firstElement: '',
    firstElementIndex: '',
  })

  function handleClick(){
    for(let i=allItems.length-1; i>0; i--){ 
      let randomIndex = Math.floor(Math.random() * (i+1)) 
      let temp = allItems[i] 
      allItems[i] = allItems[randomIndex] 
      allItems[randomIndex] = temp
    }
    setMemoryItems(prevState => {
      return {
        ...prevState,
        shuffledItems: allItems,
        numTurns: 0,
        compare: false,
        lastElement: '',
        lastElementIndex: '',
      }
    })
  }

  function addTurn(passedValue,passedNum){
    console.log('Clicked:',passedValue,passedNum)
    setMemoryItems(prevState => {
      if(prevState.compare){ //starts to compare to second element
        if(prevState.lastElement === passedValue && prevState.lastElementIndex !== passedNum){ // if matched
          console.log('matched')
          prevState.shuffledItems[prevState.lastElementIndex] = prevState.lastElement+"|matched"
          prevState.shuffledItems[passedNum] = passedValue+"|matched"
          return {
            ...prevState,
            numTurns: prevState.numTurns+=1,
            compare: false, 
            lastElement: passedValue,
          }
        }else{ // not matched
          prevState.shuffledItems[passedNum] = passedValue+"|show" // changing current index
          prevState.shuffledItems[prevState.lastElementIndex] = prevState.lastElement.replace("|show",'') // changing past index past index
          return {
            ...prevState,
            numTurns: prevState.numTurns+=1,
            compare: false, 
            lastElement: passedValue,
            lastElementIndex: passedNum,
          }
        }
      }else{
        prevState.shuffledItems[passedNum] = passedValue+"|show" // changing current index
        if(!/matched/.test(prevState.shuffledItems[prevState.lastElementIndex])){
          prevState.shuffledItems[prevState.lastElementIndex] = prevState.lastElement.replace("|show",'') // changing past index past index
        }
        return {
          ...prevState,
          compare: true, //starts to compare to second element
          lastElement: passedValue,
          lastElementIndex: passedNum,
        }
      }
    })
  }

  // To know if completed
  let countMatched = 0
  for(let i=0; i<memoryItems.shuffledItems.length; i++){
    if(/matched/.test(memoryItems.shuffledItems[i])){
      countMatched++
    }
    
  }
  if(countMatched > 0 &&countMatched === memoryItems.shuffledItems.length){
    alert('Completed!')
  }

  return (
    <div className="bg-gray-300 h-screen w-screen">
      <Navbar/>
      <div className='grid grid-cols-2'>
        <button onClick={handleClick} className="p-3 m-4 border-2 border-gray-900 rounded-xl md:w-3/5 md:place-self-end md:p-6 txt">
          {memoryItems.shuffledItems ? 'Reshuffle' : 'Start'}
        </button>
        <div className='p-3 m-4 border-2 border-gray-900 rounded-xl md:w-3/5 md:place-self-start md:p-6 txt'>
          <p className='text-center'>
            Turns: <span>{memoryItems.numTurns}</span>
          </p>
        </div>
      </div>
      
      <div className="w-3/4 md:w-3/5 lg:w-1/2 xl:w-1/3 m-auto grid grid-cols-4 gap-2 max-h-[800px]">
        {
          memoryItems.shuffledItems && 
            memoryItems.shuffledItems.map((item,num) => {
              return (
                <Blocks 
                  blockName={item} 
                  key={num} blockClicked={() => addTurn(item,num)}
                />
              )
            })
        }
      </div>
    </div>
  );
}

export default App;
